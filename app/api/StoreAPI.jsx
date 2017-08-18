let $ = require('jquery');
let axios = require('axios');

module.exports = {
	//PRODUCTS API
	getProducts() {
		return axios.get("/products");
	},
	getProduct(id) {
		$.ajax({
			       url    : `/products/${id}`,
			       type   : "GET",
			       success: (data) => {
				       console.log(data);
			       },
			       error  : (error) => {
				       console.log(error.responseText);
			       }
		       });
	},
	addProduct(product) {
		$.ajax({
			       url        : "/products",
			       data       : JSON.stringify(product),
			       type       : "POST",
			       contentType: "application/json",
			       success    : (data) => {
				       console.log(data);
			       },
			       error      : (error) => {
				       console.log(error.responseText);
			       }
		       });
	},
	updateProduct(id, product) {
		$.ajax({
			       url        : `/products/${id}`,
			       data       : JSON.stringify(product),
			       type       : "PATCH",
			       contentType: "application/json",
			       success    : (data) => {
				       console.log(data);
			       },
			       error      : (error) => {
				       console.log(error.responseText);
			       }
		       });
	},
	deleteProduct(id) {
		$.ajax({
			       url    : `/products/${id}`,
			       type   : "DELETE",
			       success: (data) => {
				       console.log(data);
			       },
			       error  : (error) => {
				       console.log(error.responseText);
			       }
		       });
	},
	//USER API
	getUsers() {
		$.ajax({
			       url    : "/users",
			       type   : "GET",
			       success: (data) => {
				       console.log(data);
			       },
			       error  : (error) => {
				       console.log(error.responseText)
			       }
		       });
	},
	addUser(user) {
		$.ajax({
			       url        : "/users",
			       data       : JSON.stringify(user),
			       type       : "POST",
			       contentType: "application/json",
			       success    : (data) => {
				       console.log(data);
			       },
			       error      : (error) => {
				       console.log(error.responseText);
			       }
		       })
	},
	removeUser(user) {
		$.ajax({
			       url        : "/users/cart",
			       data       : JSON.stringify(user),
			       type       : "DELETE",
			       contentType: "application/json",
			       success    : (data) => {
				       console.log(data);
			       },
			       error      : (error) => {
				       console.log(error.responseText);
			       }
		       });
	},
	updateUser(id, user) {
		$.ajax({
			       url        : `/users/cart/${id}`,
			       data       : JSON.stringify(user),
			       type       : "PATCH",
			       contentType: 'application/json',
			       success    : (data) => {
				       console.log(data);
			       },
			       error      : (error) => {
				       console.log(error);
			       }
		       });
	}
};
