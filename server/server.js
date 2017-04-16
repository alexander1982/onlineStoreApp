require ('./config/config.js');
const mongoose = require('./db/mongoose.js').mongoose;
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

const User = require('./models/userModel.js').User;

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
		res.status(400).send(err);
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
//GET USER BY ID
app.get('/users/:id', (req,res) => {
	User.findOne({id: req.params.id}).then((user) => {
		res.send(user);
	},(err) => {
		res.status(400).send(err);
	})
});

app.listen(port, () => {
	console.log(`Server is running on port`, port)
});

module.exports = {app};
