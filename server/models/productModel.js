const mongoose = require('mongoose');
const _ = require('lodash');
require('../config/config.js');

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
		trim: true
	},
	describtion: {
		type: String,
		required: false
	},
	quantity: {
		type: Number,
		required: true
	}
});

var Product = mongoose.model('Product', productSchema);
 
module.exports = {Product};
