const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');
require('../config/config.js');
const Product = require('./productModel.js').Product;
let objectId = require('mongodb').ObjectID;
let moment = require('moment');

const UserSchema = new mongoose.Schema({
	name     : {
		type     : String,
		trim     : true,
		required : true,
		minlength: 1
	},
	username : {
		type     : String,
		trim     : true,
		required : true,
		unique   : true,
		minlength: 2
	},
	email    : {
		type    : String,
		trim    : true,
		required: true,
		validate: {
			validator: (value)=> {

				return validator.isEmail(value);

			},

			message: '{VALUE} is not a valid Email'

		},
		unique  : true
	},
	createdAt: { type: Date },
	password : {
		type     : String,
		trim     : true,
		required : true,
		minlength: 7
	},
	tokens   : [
		{
			access: {
				type    : String,
				required: true
			},
			token : {
				type    : String,
				required: true
			}
		}
	],
	billingData: [
		{
			cardNumber: {
				type: String,
				required: true,
				unique: true,
				trim: true
			},
			expDate: {
				type: String,
				required: true,
				unique: true
			},
			ccv: {
				type: String,
				required: true,
				unique: true
			},
			address: {
				type     : String,
				trim     : true,
				required : true
			},
			country: {
				type     : String,
				trim     : true,
				required : true
			},
			index: {
				type: String,
				required: true,
				unique: true
			}
		}
	],
	cart     : [
		{
			name       : {
				type    : String,
				required: true,
				unique  : true,
				trim    : true
			},
			describtion: {
				type    : String,
				required: true
			},
			quantity   : {
				type    : Number,
				required: true
			}
		}
	]
});

UserSchema.pre('save', function(next) {
	var user = this;

	if(user.isModified('password')){
		bcrypt.genSalt(12, (err, salt) => {
			bcrypt.hash(user.password, salt, (err, hash) => {
				user.password = hash;
				next();
			})
		})
	} else {
		next()
	}
});

UserSchema.pre('save', function(next) {
	this.createdAt = moment().format("MM-DD-YYYY");
	next();
});

UserSchema.methods.toJSON = function() {
	var user = this;
	var userObject = user.toObject();

	return _.pick(userObject, ['_id', 'email', 'username', 'cart', 'billingData']);
};

UserSchema.methods.generateToken = function() {
	var user = this;
	var access = 'auth';
	var token = jwt.sign({ _id: user._id.toHexString(), access }, process.env.JWT_SECRET).toString();

	user.tokens.push({ access, token });

	return user.save().then(() => {
		return token;
	});
};

UserSchema.statics.findByToken = function(token) {
	var User = this;
	var decoded;

	try {
		//noinspection JSUnresolvedVariable
		decoded = jwt.verify(token, process.env.JWT_SECRET);
	} catch(e) {
		return Promise.reject();
	}
	return User.findOne({
		                    "_id"          : decoded._id,
		                    "tokens.token" : token,
		                    'tokens.access': 'auth'
	                    })
};

UserSchema.statics.findByCredentials = function(email, password) {
	var User = this;

	return User.findOne({ email }).then((user) => {
		if(!user){
			return Promise.reject();
		}
		return new Promise((resolve, reject) => {
			bcrypt.compare(password, user.password, (err, res) => {
				if(res){
					resolve(user);
				} else {
					reject();
				}
			})
		});
	});
};

UserSchema.methods.removeToken = function(token) {
	var user = this;

	return user.update({
		                   $pull: {
			                   tokens: { token }
		                   }
	                   });
};

//BillingData methods
UserSchema.methods.addToBillingData = function(data) {
	var user = this;

	user.billingData.push(data);
	return user.save().then(() => {
		return user;
	});
};

UserSchema.methods.removeFromBillingData= function(data) {
	var user = this;

	return user.update({ $pull: { "billingData": { "cardNumber": data.cardNumber } } });
};

//Cart methods
UserSchema.methods.addToCart = function(product) {
	var user = this;

	user.cart.push(product);
	return user.save().then(() => {
		return user;
	});
};

UserSchema.methods.removeProductFromCart = function(product) {
	var user = this;

	return user.update({ $pull: { "cart": { "name": product.name } } });
};

UserSchema.methods.getProductFromCart = function(product, token) {
	var userId = User.findByToken(token);
	userId = userId._conditions._id;
	return User.find({ _id: userId }, { "cart": { $elemMatch: { "name": product.name } } });
};

var User = mongoose.model('User', UserSchema);

module.exports = { User };