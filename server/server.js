require('./config/config.js');
let mongoose = require('./db/mongoose.js').mongoose;
let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let _ = require('lodash');
let objectId = require('mongodb').ObjectID;
let SendGrid = require('sendgrid-nodejs').SendGrid;
let sendGrid = new SendGrid(process.env.SECRET_NAME, process.env.API_KEY);
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
				sendGrid.send({
					              to     : `${user.email}`,
					              from   : process.env.EMAIL,
					              subject: `Hello ${user.username}, we are welcome you`,
					              text   : `Dear ${user.name}, thank you for joining us Enter this link to verify your account https://www.youtube.com/watch?v=Q0CbN8sfihY, enjoy.`
				              }, function(error, json) {
					if(error){
						console.log(error);
					}
					console.log(json);
				});
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
//ADD BILLING DATA
app.post('/users/billing/add', (req, res) => {
	let body = _.pick(req.body, ['cardNumber', 'expDate', 'ccv', 'address', 'country', 'index', 'email', 'name', 'lastName', 'username']);
	let billingData = {
		cardNumber: body.cardNumber,
		expDate: body.expDate,
		ccv: body.ccv,
		address: body.address,
		country: body.country,
		index: body.index
	};
	User.findOne({username: body.username, email: body.email}).then((foundUser) => {
		if(foundUser.billingData.length === 0){
			foundUser.addToBillingData(billingData).then((user) => {
				return res.status(200).send(user);
			});
			
		} else {
			let billing = foundUser.billingData;
			let errorData = [];
			for(let x = 0; x < billing.length; x++){
				if(billing[x].cardNumber === billingData.cardNumber){
					errorData[0] = 'The credit card number is already exist';
				} 
				if(billing[x].address === billingData.address){
					errorData[1] = 'The address is already exist';
				}
				return res.status(400).send(errorData);
			}
		}
	});
});
//REMOVE BILLING DATA
app.post('/users/billing/remove', (req, res) => {
	let body = _.pick(req.body, ['cardNumber', 'expDate', 'ccv', 'address', 'country', 'index', 'email', 'username']);
	let billingData = {
		cardNumber: body.cardNumber,
		expDate: body.expDate,
		ccv: body.ccv,
		address: body.address,
		country: body.country,
		index: body.index
	};

	User.findOne({username: body.username, email: body.email}).then((foundUser) => {
		let billing = foundUser.billingData;
		for(let x = 0; x < billing.length; x++) {
			if(billing[x].cardNumber !== billingData.cardNumber) {
				return res.status(400).send('The credit card number is not exist');
			} else {
				console.log(billingData.cardNumber);
				foundUser.removeFromBillingData(billingData.cardNumber).then((response) => {
					res.status(200).send(response)
				});
			}
		}
	});
});

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = //

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
	var body = _.pick(req.body, ['describtion', '_id', 'name', 'quantity', 'token']);
	var product = {
		_id        : objectId(body._id),
		describtion: body.describtion,
		name       : body.name,
		quantity   : body.quantity
	};
	var token = body.token;

	User.findByToken(token).then((user) => {
		if(!user){
			return res.status(404).send('User not found');
		} else {
			user.getProductFromCart(product, token).then((data) => {
				if(data[0].cart.length === 0) {
					user.addToCart(product);
					res.status(200).send(user);
				} else {
					product.quantity = parseInt(product.quantity) + parseInt(data[0].cart[0].quantity);
					user.removeProductFromCart(product).then((deletedProduct) => {
						user.addToCart(product);
						res.status(200).send(user);
					});
				}
			});
		}
	});
});
//GET PRODUCT FROM CART
app.post('/users/cart/product', (req, res) => {
	var body = _.pick(req.body, ['_id', 'describtion', 'name', 'quantity', 'token']);
	var product = {
		_id        : objectId(body._id),
		description: body.describtion,
		name       : body.name,
		quantity   : body.quantity
	};
	var token = body.token;

	User.findByToken(token).then((user) => {
		if(!user){
			return res.status(404).send('User not found');
		} else {
			user.getProductFromCart(product, token).then((foundProduct) => {
				return res.status(200).send(foundProduct);
			});
		}
	});
});
//GET LIST OF PRODUCT FROM CART
app.post('/users/cart/products', (req, res) => {
	var body = _.pick(req.body, ['token']);
	
	User.findByToken(body.token).then((response) => {
		if(!response){
			return res.status(404).send('User not found');
		} else {
			return res.status(200).send(response);
		}
	});
});
//DELETE PRODUCT FROM CART
app.post('/users/cart/product/remove', (req, res) => {
	var body = _.pick(req.body, ['_id', 'describtion', 'name', 'quantity', 'token']);
	var product = {
		_id        : objectId(body._id),
		description: body.describtion,
		name       : body.name,
		quantity   : body.quantity
	};
	var token = body.token;

	User.findByToken(token).then((user) => {
		if(!user){
			return res.status(404).send('User not found');
		} else {
			user.removeProductFromCart(product).then((product) => {
				return res.status(200).send(product);
			});
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
//INCREMENT QUANTITY IN STORE
app.post('/products/inc', (req, res) => {
	var body = _.pick(req.body, ['_id', 'describtion', 'name', 'quantity']);
	var product = {
		_id        : objectId(body._id),
		description: body.describtion,
		name       : body.name,
		quantity   : body.quantity
	};

	Product.update({ _id: product._id }, { $inc: { "quantity": 10 } }).then((result) => {
		return res.status(200).send(result);
	});
});
//DECREMENT QUANTITY IN STORE
app.post('/products/dec', (req, res) => {
	var body = _.pick(req.body, ['_id', 'describtion', 'name', 'quantity']);
	var product = {
		_id        : objectId(body._id),
		description: body.describtion,
		name       : body.name,
		quantity   : body.quantity
	};

	Product.update({ _id: product._id }, { $inc: { "quantity": -product.quantity } }).then((result) => {
		return res.status(200).send(result);
	});
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

// = = = = = = = = = = = = = = = = = = = = = = = = = = //

app.listen(port, () => {
	console.log(`Server is running on port`, port)
});

module.exports = { app };