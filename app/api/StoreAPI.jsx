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
	addProductToCart() {
		return axios.post("/users/cart").then((response) => {
			console.log(response);
		}).catch((error) => {
			console.log(error.response);
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
	
	//LOGIN
	getUser(user) {
		return axios.post("/users/login", user).then((response) => {
			return response.data;
		}).catch((error) => {
			return error.response;
		});
	},
	getUserByToken(token) {
		return axios.post("/users/user", token).then((response) => {
			return response.data;
		}).catch((error) => {
			console.log(error.response);
		});
	},
	//SIGNIN
	addUser(user) {
		return axios.post("/users", user).then((response) => {
			return response.data;
		}).catch((error) => {
			return error.response;
		});
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
	},
	filterProducts(products, searchText, gOnly, range) {
		let filteredProducts = products;

		filteredProducts = filteredProducts.filter((product) => {
			let firstChar = product.name.charAt(0).toLowerCase();
			if(gOnly && firstChar === 'g'){
				return product.name;
			} else if(!gOnly){
				return filteredProducts;
			}
		});

		filteredProducts = filteredProducts.filter((product) => {
			if(range[0] === undefined){
				return filteredProducts;
			} else {
				let from = range[0]['from'];
				let to = range[0]['to'];
				if(product.quantity >= from && product.quantity <= to){
					return product.name;
				}
			}
		});

		filteredProducts = filteredProducts.filter((product) => {
			return product.name.toLowerCase().includes(searchText);
		});

		filteredProducts.sort(function(x, y) {
			let nameA = x.name;
			let nameB = y.name;
			return (nameA < nameB)? -1 : (nameA > nameB)? 1 : 0;
		});
		return filteredProducts;
	}
};
