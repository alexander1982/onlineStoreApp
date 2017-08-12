import React from 'react';
let createClass = require('create-react-class');
let $ = require('jquery');
let actions = require('Actions');
let api = require('API');

const StoreApp = createClass({
	                             handleGetProducts() {
		                             api.getProducts();
	                             },
	                             handleGetProduct(id) {
		                             api.getProduct(id);
	                             },
	                             handleAddProduct(e) {
		                             e.preventDefault();
		                             let newProduct = {
			                             name       : this.refs.name.value,
			                             describtion: this.refs.describtion.value,
			                             quantity   : this.refs.qty.value
		                             };

		                             api.addProduct(newProduct);
	                             },
	                             handleUpdateProduct(id) {
		                             let Product = {
			                             name       : this.refs.nameOne.value,
			                             describtion: this.refs.describtionOne.value,
			                             quantity   : this.refs.qtyOne.value
		                             };

		                             api.updateProduct(id, Product);
	                             },
	                             handleDeleteProduct(id) {
		                             api.deleteProduct(id);
	                             },
	                             handleGetUsers() {
		                             api.getUsers();
	                             },
	                             handleAddUser(e) {
		                             e.preventDefault();
		                             let user = {
			                             name    : this.refs.uName.value,
			                             username: this.refs.username.value,
			                             email   : this.refs.email.value,
			                             password: this.refs.password.value
		                             };

		                             api.addUser(user);
	                             },
	                             handleDeleteUser() {
		                             let userId = {
			                             _id     : this.refs.id.value,
			                             username: this.refs.usernameTwo.value,
			                             email   : this.refs.emailTwo.value
		                             };
		                             api.removeUser(userId);
	                             },
	                             handleUpdateUser(id) {
																let updatedUser = {
																	name: this.refs.nameThree.value,
																	username: this.refs.usernameThree.value,
																	email: this.refs.emailThree.value
																};
		                             
		                             api.updateUser(id, updatedUser);
	                             },
	                             render() {
		                             return (
		                             <div className="grid-y grid-frame">
			                             <div className="medium-4 cell"></div>

			                             <div className="medium-4 cell">
				                             <div className="grid-x">
					                             <div className="medium-4 cell"></div>
					                             <div className="medium-4 cell text-center" style={{backgroundColor: "beige"}}>
						                             <button className="button success" type="submit"
						                                     onClick={this.handleGetProducts}>Press me
						                             </button>
						                             <button className="button" type="submit"
						                                     onClick={this.handleGetProduct.bind(this,'58fa3d6df7374e079c2c2947')}>
							                             Press me
						                             </button>
						                             <button className="button primary" type="submit"
						                                     onClick={this.handleGetUsers}>
							                             Press me
						                             </button>
						                             <button className="button warning" type="submit"
						                                     onClick={this.handleDeleteUser.bind(this, '598f3d459942961730154ede')}>
							                             Press me
						                             </button>
					                             </div>
					                             <div className="medium-4 cell"></div>
				                             </div>
			                             </div>
			                             <div className="medium-4 cell">
				                             <div className="grid-x">
					                             <div className="medium-2 cell">
						                             <legend>Add Product</legend>
						                             <form onSubmit={this.handleAddProduct}>
							                             <input type="text" ref="name"/>
							                             <input type="text" ref="describtion"/>
							                             <input type="text" ref="qty"/>
							                             <button className="button" type="submit">Do</button>
						                             </form>
					                             </div>
					                             <div className="medium-2 cell">
						                             <legend>Add User</legend>
						                             <form onSubmit={this.handleAddUser}>
							                             <input type="text" ref="uName" placeholder="Name"/>
							                             <input type="text" ref="email" placeholder="Email"/>
							                             <input type="text" ref="username" placeholder="Username"/>
							                             <input type="text" ref="password" placeholder="Password"/>
							                             <button className="button secondary" type="submit">Do</button>
						                             </form>
					                             </div>
					                             <div className="medium-2 cell">
						                             <legend>Update Product</legend>
						                             <form
						                             onSubmit={this.handleUpdateProduct.bind(this, '598f029ece68e11f80ea1d4e')}>
							                             <input type="text" ref="nameOne"/>
							                             <input type="text" ref="describtionOne"/>
							                             <input type="text" ref="qtyOne"/>
							                             <button className="button" type="submit">Do</button>
						                             </form>
					                             </div>
					                             <div className="medium-2 cell">
						                             <legend>Remove user</legend>
						                             <form
						                             onSubmit={this.handleDeleteUser}>
							                             <input type="text" ref="id" placeholder="id"/>
							                             <input type="text" ref="usernameTwo" placeholder="username"/>
							                             <input type="text" ref="emailTwo" placeholder="email"/>
							                             <button className="button" type="submit">Do</button>
						                             </form>
					                             </div>
					                             <div className="medium-2 cell">
						                             <legend>Update user user</legend>
						                             <form
						                             onSubmit={this.handleUpdateUser.bind(this, '598f3edd9d8c112b78ec57ce')}>
							                             <input type="text" ref="nameThree" placeholder="name"/>
							                             <input type="text" ref="usernameThree" placeholder="username"/>
							                             <input type="text" ref="emailThree" placeholder="email"/>
							                             <button className="button" type="submit">Do</button>
						                             </form>
					                             </div>
				                             </div>
			                             </div>
		                             </div>
		                             )
	                             }
                             });

module.exports = StoreApp;