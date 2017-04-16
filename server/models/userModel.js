const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');
require ('../config/config.js');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: true,
		minlength: 1
	},
	username: {
		type: String,
		trim: true,
		required: true,
		unique: true,
		minlength: 2
	},
	email: {
		type: String,
		trim: true,
		required: true,
		validate: {
			validator: validator.isEmail,
			message: 'Email is not valid'
		},
		unique: true
	},
	password: {
		type: String,
		trim: true,
		required: true,
		minlength: 7
	},
	tokens: [
		{
			access: {
				type: String,
				required: false
			},
			token: {
				type: String,
				required: false
			}
		}
	]
});

UserSchema.pre('save', function(next) {
	var user = this;
	
	if(user.isModified('password')) {
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

UserSchema.methods.generateToken = function() {
	var user = this;
	var access = 'auth';
	var token = jwt.sign({_id: user._id.toHexString(), access}, process.env.JWT_SECRET).toString();
	
	user.tokens.push({access, token});
	
	return user.save().then(() => {
		return token;
	});
};

UserSchema.statics.findByToken = function(token) {
	var User = this;
	var decoded;
	
	try{
		decoded = jwt.verify(token, process.env.JWT_SECRET);
	} catch(e) {
		return Promise.reject();
	}
	return User.findOne({
												"_id": decoded._id,
												"tokens.token": token,
												'tokens.access': 'auth'
	                    })
};

var User = mongoose.model('User', UserSchema);

module.exports = {User};