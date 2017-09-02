let React = require('react');
let { connect } = require('react-redux');
let createClass = require('create-react-class');

export let Product = createClass({
	                                 render() {
		                                 let { _id, name, describtion, quantity } = this.props;
		                                 return (
		                                  <div>
			                                  <span>{name} </span>
			                                  <span>{describtion} </span>
			                                  <span>{quantity}</span>
		                                  </div>
		                                 )
	                                 }
                                 });
export default connect()(Product);