let React = require('react');
let { connect } = require('react-redux');
let createClass = require('create-react-class');
let actions = require('Actions');
import ProductsList from "ProductsList";
import ProductSearch from "ProductSearch";
import Filters from "Filters";
import Signin from 'Signin';
import Login from 'Login';
import authStuff from 'AuthStuff';
import api from 'API';
import SingleProduct from 'SingleProduct';
let store = require('ConfigureStore').configure();
import Cart from 'Cart';
import CheckOut from 'CheckOut';
import AddProduct from 'AddProduct';

export let SigninLogin = createClass({
	                                     collectFieldsForCart(_id, name, describtion, quantity) {
		                                     let medal = authStuff.getCookie('auth');
		                                     let product = {
			                                     _id,
			                                     name,
			                                     describtion,
			                                     quantity,
			                                     token: medal
		                                     };
		                                     return product;
	                                     },
	                                     render() {
		                                     let { dispatch, signin, login, users, allProductsInCart, productsOrProduct, productInCart, singleProduct, searchText, toggleSingleProductCheckOut } = this.props;
		                                     let renderBackToMain = () => {
			                                     if(productInCart){
				                                     return (
				                                     <button className="button" onClick={() => {
			                                      dispatch(actions.toggleCart());
			                                     }}>Back</button>
				                                     )
			                                     }
		                                     };
		                                     let renderQuantityOfCart = () => {
			                                     if(users.cart.length === 0){
				                                     return (
				                                     <span>0</span>
				                                     )
			                                     } else {
				                                     return (
				                                     <span>{users.cart.length}</span>
				                                     )
			                                     }
		                                     };
		                                     let renderSingleProduct = () => {
			                                     if(singleProduct.length > 0){
				                                     return (
				                                     <SingleProduct singleProduct={singleProduct[0]}/>
				                                     )
			                                     }
		                                     };
		                                     let renderProductInCart = () => {
			                                     if(productInCart){
				                                     return (
				                                     <Cart/>
				                                     )
			                                     }
		                                     };
		                                     let renderProductsOrProduct = () => {
			                                     if(!productsOrProduct || searchText){
				                                     return (
				                                     <div>
					                                     <ProductsList/>
					                                     <Filters onFilter={this.handleFilter}/>
				                                     </div>
				                                     )
			                                     } else {
				                                     return (
				                                     <div>
					                                     {renderSingleProduct()}
				                                     </div>
				                                     )
			                                     }
		                                     };
		                                     let renderUsername = () => {
			                                     if(!users.username){
				                                     return (
				                                     <p>Hello guest</p>
				                                     )
			                                     } else {
				                                     return (
				                                     <p>Hello {users.username}</p>
				                                     )
			                                     }
		                                     };

		                                     let renderRegister = () => {
			                                     if(signin){
				                                     return (
				                                     <div>
					                                     <Signin onSubmit={this.handleUser}
					                                             userErrorText={this.props.userErrorText}/>
				                                     </div>
				                                     )
			                                     } else if(login){
				                                     return (
				                                     <div>
					                                     <Login onSubmit={this.handleUser}
					                                            userErrorText={this.props.userErrorText}/>
				                                     </div>
				                                     )
			                                     } else if(productInCart){
				                                     return (
				                                     <div>
					                                     {renderProductInCart()}
				                                     </div>
				                                     )
			                                     } else if(toggleSingleProductCheckOut){
				                                     return (
				                                     <div>
					                                     <CheckOut />
				                                     </div>
				                                     )
			                                     } else {
				                                     return (
				                                     <div>
					                                     {renderUsername()}
					                                     <ProductSearch onSearch={this.handleSearch}/>
					                                     {renderProductsOrProduct()}
				                                     </div>
				                                     )
			                                     }
		                                     };
		                                     let renderCartButton = () => {
			                                     if(users.cart) {
				                                     return(
				                                     <button className="button" onClick={() => {
			                                      dispatch(actions.toggleCart());
			                                     }}>Toggle cart - {renderQuantityOfCart()}</button>
				                                     )
			                                     }
		                                     };
		                                     return (
		                                     <div>
			                                     {renderCartButton()}
			                                     {renderRegister()}
			                                     {renderBackToMain()}
			                                     <AddProduct />
		                                     </div>
		                                     )
	                                     }
                                     });
export default connect((state) => {
	return state;
})(SigninLogin);