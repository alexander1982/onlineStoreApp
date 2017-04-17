const User = require('../../models/userModel.js').User;
const Product = require('../../models/productModel.js').Product;
const objectId = require('mongodb').ObjectID;
const userOneId = new objectId();
const userTwoId = new objectId();
const jwt = require('jsonwebtoken');
require('../../config/config.js');

const users = [
	{
		_id: userOneId,
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
		_id: userTwoId,
		name: 'Aladin',
		username: 'JohnnyDoesy',
		email: "johsn@gmail.com",
		password: '12345678',
		tokens: [{
			access: "auth",
			token: jwt.sign({_id: userTwoId, access: "auth"}, process.env.JWT_SECRET).toString()
		}]
	}
];

const populateUsers = (done) => {
	User.remove({}).then(() => {
		var userOne = new User(users[0]).save();
		var userTwo = new User(users[1]).save();
		
		return Promise.all([userOne, userTwo])
	}).then(() => {
		done();
	})
};

const products = [
	{
		_id: new objectId(),
		name: 'Snickers',
		describtion: 'Tasty bar',
		quantity: 3
	},
	{
		_id: new objectId(),
		name: 'Mars',
		describtion: 'Very tasty bar',
		quantity: 4
	}
];

const populateProducts = (done) => {
	Product.remove({}).then(() => {
		return Product.insertMany(products);
	}).then(() => {
		done();
	});
};

module.exports = {
	users,
	products,
	populateUsers,
	populateProducts
};