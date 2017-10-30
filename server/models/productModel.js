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
		required: false
	},
	quantity   : {
		type    : Number,
		required: true
	}
});

var Product = mongoose.model('Product', ProductSchema);

module.exports = { Product };
