const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');
require('../config/config.js');

const UserSchema = new mongoose.Schema({
	name    : {
		type     : String,
		trim     : true,
		required : true,
		minlength: 1
	},
	username: {
		type     : String,
		trim     : true,
		required : true,
		unique   : true,
		minlength: 2
	},
	email   : {
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
	password: {
		type     : String,
		trim     : true,
		required : true,
		minlength: 7
	},
	tokens  : [
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
	cart : []
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

UserSchema.methods.toJSON = function() {
	var user = this;
	var userObject = user.toObject();

	return _.pick(userObject, ['_id', 'email', 'username', 'cart']);
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
UserSchema.static.findByCredentials = function(email, password) {
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
					reject()
				}
			})
		})
	})
};

UserSchema.methods.removeToken = function(token) {
	var user = this;

	return user.update({
		                   $pull: {
			                   tokens: { token }
		                   }
	                   });
};

UserSchema.methods.addToCart = function(product) {
	var user = this;

	user.cart.push(product);
	return user.save().then(() => {
		return user;
	});
};

var User = mongoose.model('User', UserSchema);

module.exports = { User };