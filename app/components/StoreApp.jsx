import React from 'react';
let createClass = require('create-react-class');
let $ = require('jquery');
let actions = require('Actions');
let api = require('API');
import ProductsList from "ProductsList";

const StoreApp = createClass({
	                             getInitialState() {
		                             return {
			                             products: undefined,
			                             users: undefined
		                             };
	                             },
	                             render() {
																let {products} = this.state;
		                             return (
		                             <div className="grid-y grid-frame">
                                  <div className="medium-auto cell">
	                                  <ProductsList products={products}/>
                                  </div>
		                             </div>
		                             )
	                             }
                             });
module.exports = StoreApp;