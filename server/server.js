require('./config/config.js');
let mongoose = require('./db/mongoose.js').mongoose;
let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let _ = require('lodash');
let objectId = require('mongodb').ObjectID;

const User = require('./models/userModel.js').User;
const Product = require('./models/productModel.js').Product;
const authenticate = require('./middlewears/authenticate.js').authenticate;
const publicPath = path.join(__dirname, '../public');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.use(bodyParser.json());

//ADD NEW USER
app.post('/users', (req, res) => {
	var body = _.pick(req.body, ['name', 'email', 'username', 'password']);
	var user = new User(body);
	User.findOne({ email: body.email, username: body.username }).then((foundUser) => {
		if(foundUser){
			return res.status(400).send('User with the same username or email already exist');
		} else {
			user.save().then((user) => {
				return user.generateToken();
			}).then((token) => {
				res.cookie('auth', token).send({ username: user.username, id: user._id, email: user.email });
			}).catch((err) => {
				res.status(400).send("Please check one of the fields");
			});
		}
	});
});
//GET USER
app.post('/users/login', (req, res) => {
	var body = _.pick(req.body, ['email', 'password']);

	User.findByCredentials(body.email, body.password).then((user) => {
		return user.generateToken().then((token) => {
			res.cookie('auth', token).send(user)
		});
	}).catch((error) => {
		res.status(400).send('Check email or password');
	});
});
//LIST OF ALL USERS
app.get('/users', (req, res) => {
	User.find({}).then((usersList) => {
		res.send(usersList);
	}, (err) => {
		res.status(400).send(err);
	});
});

//GET USER BY TOKEN
app.post('/users/user', (req, res) => {
	var body = _.pick(req.body, ['token']);
	User.findByToken(body.token).then((user) => {
		if(!user){
			return res.status(404).send('User not found');
		} else {
			return res.status(200).send(user);
		}
	});
});
//UPDATE USER
app.patch('/users/cart/:id', (req, res) => {
	var body = _.pick(req.body, ['name', 'username', 'email']);

	if(!objectId.isValid(req.params.id)){
		return res.status(400).send('ID is invalid');
	}

	User.findOneAndUpdate({ _id: req.params.id }, { $set: body }, { new: true }).then((user) => {
		if(!user){
			return res.status(400).send();
		}
		res.status(200).send(user);
	}).catch((err) => {
		res.status(400).send(err);
	})
});
//DELETE USER
app.delete('/users/cart', (req, res) => {

	if(!objectId.isValid(req.body._id)){
		return res.status(404).send()
	}

	User.findOneAndRemove({
		                      _id     : req.body._id,
		                      username: req.body.username,
		                      email   : req.body.email
	                      }).then((user) => {
		if(!user){
			return res.status(400).send();
		}
		res.status(200).send(user);
	}).catch((err) => {
		res.status(400).send(err);
	})
});
//DELETE TOKEN
app.delete('/users/token', authenticate, (req, res) => {
	req.user.removeToken(req.token).then(() => {
		res.status(200).send();
	}, () => {
		res.status(400).send();
	});
});
//===================================================
//ADD A NEW PRODUCT TO STORE
app.post('/products', (req, res) => {
	var product = new Product({
		name       : req.body.name,
		describtion: req.body.describtion,
		quantity   : req.body.quantity
	});

	product.save().then((product) => {
		if(!product){
			res.status(400).send();
		}
		res.status(200).send(product);
	}).catch((err) => {
		res.status(400).send(err.errmsg);
	});
});
//ADD A NEW PRODUCT TO CART
app.post('/users/cart', (req, res) => {
	var product = 'Doom3';
	var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWJkNDRmZjE1MTQyNjA3ZDgxZTFmM2EiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTA1NTc2MTkyfQ.f6kQQ4jan8vmf68n5dWGiJPy6eAwKMJNMr-rGPotlMk';

	User.findByToken(token).then((user) => {
		if(!user){
			return res.status(404).send('User not found');
		} else {
			user.addToCart(product);
			return res.status(200).send(user);
		}
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

	Product.findOneAndUpdate({ _id: productId }, { $set: formattedProduct }, { new: true }).then((product) => {
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
		return res.status(404).send('The quantity must be a positive number');
	}

	Product.findOneAndUpdate({ _id: productId }, { $set: { quantity: newQuantity } }, { new: true }).then((product) => {
		if(!product){
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

module.exports = { app };
