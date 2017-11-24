let React = require('react');
let { connect } = require('react-redux');
let createClass = require('create-react-class');
let actions = require('Actions');
let authStuff = require('AuthStuff');
let api = require('API');
let store = require('ConfigureStore').configure();

export let Product = createClass({
	                                 collectFieldsForCart(_id, name, describtion, quantity, price, picture) {
		                                 let medal = authStuff.getCookie('auth');
		                                 let product = {
			                                 _id,
			                                 name,
			                                 describtion,
			                                 quantity,
			                                 price,
			                                 picture,
			                                 token: medal
		                                 };
		                                 return product;
	                                 },
	                                 collectFieldsForSingleProduct(_id, name, describtion, quantity, price, picture) {
		                                 let product = {
			                                 _id,
			                                 name,
			                                 describtion,
			                                 quantity,
			                                 price,
			                                 picture
		                                 };
		                                 return product;
	                                 },
	                                 render() {
		                                 let { _id, name, describtion, quantity, price, picture, dispatch } = this.props;
		                                 return (
		                                 <div>
			                                 <span onClick={() => {
			                                 dispatch(actions.setSingleProduct(this.collectFieldsForSingleProduct(_id,name,describtion,quantity, price, picture)));
				                                        dispatch(actions.toggleProductsOrPruduct());
				                                      }}>
				                                 {name}
			                                 </span>
			                                 <span>{describtion} </span>
			                                 <span>------></span>
			                                 <span>{quantity}</span>
			                                 <span>------></span>
			                                 <span>{price}</span>
			                                 <img src={picture}/>
			                                 <button className="button" onClick={() => {
			                                    let medal = authStuff.getCookie('auth');
						                              let userInfo = {
							                              token: medal
						                              };
				                                 
				                                  dispatch(actions.toggleSingleProductCheckOut());
				                                 }}>To checkout
			                                 </button>
		                                 </div>
		                                 )
	                                 }
                                 });
export default connect()(Product);