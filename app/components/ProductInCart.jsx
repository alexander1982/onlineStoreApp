let React = require('react');
let { connect } = require('react-redux');
let createClass = require('create-react-class');
let actions = require('Actions');
let authStuff = require('AuthStuff');
let api = require('API');
let store = require('ConfigureStore').configure();

export let ProductInCart = createClass({
	                                 collectFields(_id, name, describtion, quantity, price, picture) {
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
	                                 render() {
		                                 let { _id, name, describtion, quantity, price, picture, dispatch } = this.props;
		                                 let collectedFields = this.collectFields(_id, name, describtion, quantity, price, picture);
		                                 console.log('From Product in cart' ,collectedFields);
		                                 return (
		                                 <div>
			                                 <span>{name}</span>
			                                 <span>{describtion} </span>
			                                 <span>{quantity}</span>
			                                 <span>------></span>
			                                 <span>{price}</span>
			                                 <button className="button" onClick={() => {
			                                    {
			                                    let collected = this.collectFields(_id,name,describtion,quantity, price, picture);
			                                      api.removeProductFromCart(collected).then((response) => {
			                                       api.getUserByToken(collected).then((user) => {
			                                        dispatch(actions.setUser(user));
			                                       });
			                                      });
			                                    }
			                                  }}>Delete product from cart
			                                 </button>
		                                 </div>
		                                 )
	                                 }
                                 });
export default connect()(ProductInCart);