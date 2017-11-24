let $ = require('jquery');
let axios = require('axios');

module.exports = {
	//PRODUCTS API
	getProducts() {
		return axios.get("/products");
	},
	getProductsFromCart(medal) {
		return axios.post("/users/cart/products", medal).then((response) => {
			return response.data.cart;
		}).catch((error) => {
			console.log(error);
		});
	},
	getProduct(id) {
		return axios.get(`/products/${id}`).then((response) => {
			return response;
		}).catch((error) => {
			console.log(error);
		});
	},
	addProduct(product) {
		return axios.post('/products', product).then((response) => {
			return response;
		}).catch((error) => {
			return error;
		});
	},
	addProductToCart(productData) {
		return axios.post("/users/cart", productData).then((response) => {
			return response.data;
		}).catch((error) => {
			console.log(error.response);
		});
	},
	getProductFromCart(product) {
		return axios.post("/users/cart/product", product).then((response) => {
			return response;
		}).catch((error) => {
			console.log(error.response);
		});
	},
	removeProductFromCart(product) {
		return axios.post("/users/cart/product/remove", product).then((response) => {
			return response;
		}).catch((error) => {
			console.log(error);
		});
	},
	incrementProductInStore(product) {
		return axios.post("/products/inc", product).then((response) => {
			return response;
		}).catch((error) => {
			console.log(error);
		});
	},
	decrementProductInStore(product) {
		return axios.post("/products/dec", product).then((response) => {
			return response;
		}).catch((error) => {
			console.log(error);
		});
	},
	updateProduct(id, product) {
		return axios.post(`/products/update`, product).then((response) => {
			return response;
		}).catch((error) => {
			console.log(error.response);
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
	getProductPictureById(id) {
		return axios.post('/products/picture', id).then((response) => {
			return response;
		}).catch((error) => {
			console.log(error);
		});
	},

	//USER API

	//BILLING 
	addBillingData(billingData) {
		return axios.post('/users/billing/add', billingData).then((response) => {
			return response;
		}).catch((error) => {
			console.log(error.response.data);
		});
	},

	removeBillingData(billingData) {
		return axios.post('/users/billing/remove', billingData).then((response) => {
			return response;
		}).catch((error) => {
			console.log(error.response.data);
		});
	},
	
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
