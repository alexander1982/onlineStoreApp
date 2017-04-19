require ('./config/config.js');
const mongoose = require('./db/mongoose.js').mongoose;
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

const User = require('./models/userModel.js').User;
const Product = require('./models/productModel.js').Product;
const authenticate = require('./middlewears/authenticate.js').authenticate;

const objectId = require('mongodb').ObjectID;
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

//ADD NEW USER
app.post('/users', (req, res) => {
	var body = _.pick(req.body,['name', 'email', 'username', 'password']);
	var user = new User(body);

	user.save().then((user) => {
		return user.generateToken();  
	}).then((token) => {
		res.header('x-auth', token).send(user);
	}).catch((err) => {
		res.status(400).send(err.errmsg);
	});
});
//LIST OF ALL USERS
app.get('/users', (req, res) => {
	User.find({}).then((usersList) => {
		res.send(usersList);
	},(err) => {
		res.status(400).send(err);
	});
	
});
//GET USER BY TOKEN
app.get('/users/cart', authenticate, (req,res) => {
	if(!req.user){
		res.status(404).send('User not found');
	}
	res.status(200).send(req.user);
});

//===================================================

//ADD A NEW PRODUCT TO STORE
app.post('/products', (req,res) => {
	var body = _.pick(req.body, ['name', 'describtion', 'quantity']);
	var product = new Product(body);
	
	product.save().then((product) => {
		if(!product){
			res.status(400).send();
		}
		res.status(200).send(product);
	}).catch((err) => {
		res.status(400).send(err.errmsg);
	});
});
//FIND PRODUCT BY ID
app.get('/products/:id', (req, res) => {
	
	Product.findById(req.params.id).then((product) => {
		if(!product){
			return res.status(404).send();
		}
		res.status(200).send(product);
	}).catch((err) => {
		res.status(400).send();
	});
});
//GET LIST OF PRODUCTS
app.get('/products', (req, res) => {

	Product.find({}).then((products) => {
		if(!products){
			return res.status(404).send();
		}
		res.status(200).send(products);
	}).catch((err) => {
		res.status(400).send(err.errmsg);
	});
});
//UPDATE THE WHOLE PRODUCT
app.patch('/products/:id', (req, res) => {
	var productId = req.params.id;
	var formattedProduct = _.pick(req.body, ['name', 'describtion', 'quantity']);

	if(!objectId.isValid(productId)){
		return res.status(404).send();
	}
	
	Product.findOneAndUpdate({ _id: productId }, {$set: formattedProduct}, { new: true }).then((product) => {
		if(!product){
			return res.status(400).send();
		}
		res.status(200).send(product);
	}).catch((err) => {
		res.status(400).send(err.errmsg);
	})
});	
//UPDATE QUANTITY OF THE PRODUCT
app.patch('/products', (req, res) => {
	var productId = req.body._id;
	var newQuantity = req.body.quantity;
	
	if(newQuantity < 0){
		throw new Error('The quantity must be a positive number');
	}

	Product.findOneAndUpdate({_id: productId},{$set:{quantity: newQuantity}}, {new: true}).then((product) => {
		if(!product) {
			return res.status(404).send();
		}
		res.status(200).send(product)
	}).catch((err) => {
		res.status(400).send(err);
	})
});
//DELETE PRODUCT
app.delete('/products/:id', (req, res) => {
	
	//if(!objectId.isValid(productId)){
	//	return res.status(404).send('The id is invalid');
	//}
	
	Product.findByIdAndRemove(req.params.id).then((product) => {
		if(!product){
			return res.status(404).send();
		}
		res.status(200).send(product);
	}).catch((err) => {
		res.status(400).send(err);
	})
});
app.listen(port, () => {
	console.log(`Server is running on port`, port)
});

module.exports = {app};
