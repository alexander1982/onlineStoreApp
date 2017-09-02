import React from 'react';
let createClass = require('create-react-class');
let $ = require('jquery');
let actions = require('Actions');
let api = require('API');
import ProductsList from "ProductsList";
import ProductSearch from "ProductSearch";
import Filters from "Filters";
import Signin from 'Signin';
import Login from 'Login';

const StoreApp = createClass({
	                             getInitialState() {
		                             return {
			                             products     : undefined,
			                             users        : undefined,
			                             gOnly        : false,
			                             range        : undefined
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
	                             render() {
		                             let { products, searchText, userErrorText, gOnly, range, users } = this.state;
		                             return (
		                             <div className="grid-y grid-frame">
			                             <div className="medium-auto cell">
				                             <ProductSearch onSearch={this.handleSearch}/>
				                             <ProductsList/>
				                             <Filters onFilter={this.handleFilter}/>
				                             <Signin onSubmit={this.handleUser} {...this.state}/>
				                             <Login onSubmit={this.handleUser}/>
			                             </div>
		                             </div>
		                             )
	                             }
                             });
module.exports = StoreApp;