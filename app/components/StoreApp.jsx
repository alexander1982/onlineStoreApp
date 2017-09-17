import React from 'react';
let createClass = require('create-react-class');
let $ = require('jquery');
let actions = require('Actions');
let api = require('API');
import RegisterButton from 'RegisterButton';
import LoginButton from 'LoginButton';
import LogoutButton from 'LogoutButton';
import SigninLogin from 'SigninLogin';
import AddProductToCartButton from 'AddProductToCartButton';

const StoreApp = createClass({
	                             getInitialState() {
		                             return {
			                             products     : undefined,
			                             users        : undefined,
			                             userErrorText: undefined,
			                             gOnly        : false,
			                             range        : undefined,
			                             register     : false,
			                             login        : false,
			                             signin       : false
		                             };
	                             },
	                             handleSearch(searchText) {
		                             this.setState({
			                                           searchText: searchText.toLowerCase()
		                                           })
	                             },
	                             handleFilter(gOnly, range) {
		                             this.setState({
			                                           gOnly: gOnly,
			                                           range: range
		                                           });
	                             },
	                             handleUser(user, userErrorText) {
		                             this.setState({
			                                           users        : user,
			                                           userErrorText: userErrorText
		                                           });
	                             },
	                             handleToggleSignin(signin) {
		                             this.setState({
			                                           signin: signin
		                                           })
	                             },
	                             handleToggleLogin(login) {
		                             this.setState({
			                                           login: login
		                                           })
	                             },
	                             handleLogout() {
		                             this.setState({
			                                           user: undefined
		                                           });
	                             },
	                             render() {
		                             let { products, searchText, userErrorText, gOnly, range, register, login, signin, users, cart } = this.state;
		                             return (
		                             <div className="grid-y grid-frame">
			                             <div className="medium-auto cell">
				                             <RegisterButton onClick={this.handleToggleSignin}/>
				                             <LoginButton onClick={this.handleToggleLogin}/>
				                             <LogoutButton onClick={() => {this.handleLogout()}}/>
				                             <SigninLogin onSearch={this.handleSearch} onFilter={this.handleFilter}/>
			                               <AddProductToCartButton/>
			                             </div>
		                             </div>
		                             )
	                             }
                             });
module.exports = StoreApp;