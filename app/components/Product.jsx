let React = require('react');
let { connect } = require('react-redux');
let createClass = require('create-react-class');
let actions = require('Actions');
let authStuff = require('AuthStuff');
let api = require('API');
let store = require('ConfigureStore').configure();

export let Product = createClass({
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
	                                 collectFieldsForSingleProduct(_id, name, describtion, quantity) {
		                                 let product = {
			                                 _id,
			                                 name,
			                                 describtion,
			                                 quantity
		                                 };
		                                 return product;
	                                 },
	                                 render() {
		                                 let { _id, name, describtion, quantity, dispatch } = this.props;
		                                 return (
		                                 <div>
			                                 <span onClick={() => {
			                                 dispatch(actions.setSingleProduct(this.collectFieldsForSingleProduct(_id,name,describtion,quantity)));
				                                        dispatch(actions.toggleProductsOrPruduct());
				                                      }}>
				                                 {name}
			                                 </span>
			                                 <span>{describtion} </span>
			                                 <span>{quantity}</span>
			                                 <button className="button" onClick={() => {
			                                    let medal = authStuff.getCookie('auth');
						                              let userInfo = {
							                              token: medal
						                              };
				                                 
				                                  dispatch(actions.toggleSingleProductCheckOut());
				                                 }}>To checkout</button>
		                                 </div>
		                                 )
	                                 }
                                 });
export default connect()(Product);