let React = require('react');
let { connect } = require('react-redux');
let createClass = require('create-react-class');

let api = require('API');
import ProductInCart from "ProductInCart";
let actions = ('Actions');
let store = require('ConfigureStore').configure();

export let Cart = createClass({
	                                      render() {
		                                      let { products, searchText, gOnly, range, users, productsOrProduct, dispatch} = this.props;
		                                      let renderProducts = () => {
			                                      return users.cart.map((product) => {
				                                      return (
				                                      <ProductInCart key={product._id} {...product}/>
				                                      )
			                                      });
		                                      };
		                                      return (
		                                      <div>
			                                      {renderProducts()}
		                                      </div>
		                                      )
	                                      }
                                      }
);
export default connect(
(state) => {
	return state;
}
)(Cart);