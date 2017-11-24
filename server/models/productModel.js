const mongoose = require('mongoose');
require('../config/config.js');

const ProductSchema = new mongoose.Schema({
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
	},
	price      : {
		type    : Number,
		required: true
	},
	picture    : {
		type    : String,
		required: true
	}
});

var Product = mongoose.model('Product', ProductSchema);

module.exports = { Product };
