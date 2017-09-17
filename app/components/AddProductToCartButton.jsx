let React = require('react');
let { connect } = require('react-redux');
let createClass = require('create-react-class');
let actions = require('Actions');
let api = require('API');

export let AddProductToCartButton = createClass({
	                                                render() {
		                                                let { dispatch } = this.props;
		                                                return (
		                                                <div>
			                                                <button className="button" onClick={() => {
                                                        api.addProductToCart();
									                              }}
			                                                >Add
			                                                </button>
		                                                </div>
		                                                )
	                                                }
                                                });
export default connect((state) => {
	return state;
})(AddProductToCartButton);