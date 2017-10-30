let React = require('react');
let { connect } = require('react-redux');
let createClass = require('create-react-class');

export let ProductInCheckout = createClass({
	                                       render() {
		                                       let { _id, name, describtion, quantity, dispatch } = this.props;
		                                       return (
		                                       <div>
			                                       <span>{name}</span>
			                                       <span>{describtion} </span>
			                                       <span>{quantity}</span>
		                                       </div>
		                                       )
	                                       }
                                       });
export default connect()(ProductInCheckout);