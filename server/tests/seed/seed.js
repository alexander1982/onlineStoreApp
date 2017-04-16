const User = require('../../models/userModel.js').User;
const objectId = require('mongodb').ObjectID;
const userOneId = new objectId();
const userTwoId = new objectId();
const jwt = require('jsonwebtoken');
require('../../config/config.js');

const users = [
	{
		name: 'Alan',
		username: 'JohnDoe',
		email: "john@gmail.com",
		password: '12345678',
		tokens: [{
			access: "auth",
			token: jwt.sign({_id: userOneId, access: "auth"}, process.env.JWT_SECRET).toString()
		}]
	},
	{
		name: 'Aladin',
		username: 'JohnnyDoesy',
		email: "john@gmail.com",
		password: '12345678',
		tokens: [{
			access: "auth",
			token: jwt.sign({_id: userTwoId, access: "auth"}, process.env.JWT_SECRET).toString()
		}]
	}
];

const populateUsersDB = (done) => {
	User.remove({}).then(() => {
		var userOne = new User(users[0]).save();
		var userTwo = new User(users[1]).save();
		
		return Promise.all([userOne, userTwo])
	}).then(() => {
		done();
	})
};

module.exports = {
	users,
	populateUsersDB
};