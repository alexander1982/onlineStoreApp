let React = require('react');
let { connect } = require('react-redux');
let createClass = require('create-react-class');

let api = require('API');
import ProductInCheckout from "ProductInCheckout";
import Billing from 'Billing';
import authStuff from 'AuthStuff';
let actions = ('Actions');
let store = require('ConfigureStore').configure();

export let CheckOut = createClass({
	                                  render() {
		                                  let {users} = this.props;
		                                  let Cart = users.cart;
		                                  let renderProductsFromCart = () => {
			                                  return Cart.map((product) => {
				                                  return (
				                                  <ProductInCheckout key={product._id} {...product}/>
				                                  )
			                                  });
		                                  };
		                                  let renderTotalPrice = () => {
			                                  for(let x = 0; x < Cart.length; x++) {
				                                  return Cart[x].quantity += Cart[x].quantity;
			                                  }
		                                  };
		                                  return (
		                                  <div>
			                                  {renderProductsFromCart()}
			                                  --------------------------
			                                  <h3 ref="totalPrice">Total : {renderTotalPrice()}</h3>
			                                  <Billing totalPrice={renderTotalPrice()/2}/>
		                                  </div>
		                                  )
	                                  }
                                  }
);
export default connect(
(state) => {
	return state;
}
)(CheckOut);