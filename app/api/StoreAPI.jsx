let $ = require('jquery');

module.exports = {
	//PRODUCTS API
	getProducts() {
		$.get("/products", (data) => {
			console.log(data);
		});
	},
	getProduct(id) {
		$.get(`/products/${id}`, (data) => {
			console.log(data);
		});
	},
	addProduct(product) {
		$.ajax({
			       url        : "/products",
			       data       : JSON.stringify(product),
			       type       : "POST",
			       contentType: "application/json"
		       }).done((data) => {
			console.log(data);
		});
	},
	updateProduct(id, product) {
		$.ajax({
			       url        : `/products/${id}`,
			       data       : JSON.stringify(product),
			       type       : "PATCH",
			       contentType: "application/json"
		       }).done((data) => {
			console.log(data);
		});
	},
	deleteProduct(id) {
		$.ajax({
			       url : `/products/${id}`,
			       type: "DELETE"
		       }).done((data) => {
			console.log(data);
		});
	},
	//USER API
	getUsers() {
		$.get("/users", (data) => {
			console.log(data);
		});
	},
	addUser(user) {
		$.ajax({
			       url        : "/users",
			       data       : JSON.stringify(user),
			       type       : "POST",
			       contentType: "application/json"
		       }).done((data) => {
			console.log(data);
		});
	},
	removeUser(user) {
		$.ajax({
			url: "/users/cart",
			data: JSON.stringify(user),
			type: "DELETE",
			contentType: "application/json"
		       }).done((data) => {
			console.log(data);
		});
	},
	updateUser(id, user) {
		$.ajax({
			url: `/users/cart/${id}`,
			data: JSON.stringify(user),
			type: "PATCH",
			contentType: 'application/json'
		       }).done((data) => {
			console.log(data);
		});
	}
};