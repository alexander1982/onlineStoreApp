let React = require('react');
let { connect } = require('react-redux');
let createClass = require('create-react-class');

let api = require('API');
import Product from "Product";

export let ProductsList = createClass({
	                                      render() {
		                                      let {products} = this.props;
		                                      let renderProducts = () => {
				                                      products.map((product) => {
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