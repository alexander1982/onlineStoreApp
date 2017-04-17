require ('./config/config.js');
const mongoose = require('./db/mongoose.js').mongoose;
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

const User = require('./models/userModel.js').User;
const Product = require('./models/productModel.js').Product;
const authenticate = require('./middlewears/authenticate.js').authenticate;

const objectId = require('express').ObjectID;
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
//ADD ITEM TO STORE
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

app.listen(port, () => {
	console.log(`Server is running on port`, port)
});

module.exports = {app};
