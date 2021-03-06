let React = require('react');
let { connect } = require('react-redux');
let createClass = require('create-react-class');

let api = require('API');
import Product from "Product";
let actions = ('Actions');

export let ProductsList = createClass({
	                                      render() {
		                                      let { products, searchText, gOnly, range, productsOrProduct, dispatch} = this.props;
		                                      let renderProducts = () => {
			                                      return api.filterProducts(products, searchText, gOnly, range).map((product) => {
				                                      return (
				                                      <Product key={product._id} {...product}/>
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
)(ProductsList);