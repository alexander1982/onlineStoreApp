let React = require('react');
let { connect } = require('react-redux');
let createClass = require('create-react-class');
let actions = require('Actions');
let authStuff = require('AuthStuff');
let api = require('API');
let store = require('ConfigureStore').configure();

export let addProduct = createClass({
	                                    validateUrl(url) {
		                                    let pattern = new RegExp('^https?://(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:/[^/#?]+)+\.(?:jpg|gif|png)$');
		                                    let res = pattern.test(url);
		                                    return res;
	                                    },
	                                    collectFields() {
		                                    let product = {
			                                    name       : this.refs.productName.value,
			                                    describtion: this.refs.productDescribtion.value,
			                                    quantity   : this.refs.productQuantity.value,
			                                    price      : this.refs.productPrice.value,
			                                    picture    : this.refs.productPicture.value
		                                    };
		                                    return product;
	                                    },
	                                    render() {
		                                    let { dispatch } = this.props;
		                                    return (
		                                    <div>
			                                    <fieldset>
				                                    <label for="productName">Product name</label>
				                                    <input type="text" ref="productName" name="productName" required/>
				                                    <label for="productDescribtion">Product describtion</label>
				                                    <input type="text" ref="productDescribtion" name="productDescribtion"
				                                           required/>
				                                    <label for="productQuantity">Product quantity</label>
				                                    <input type="text" ref="productQuantity" name="productQuantity" required/>
				                                    <label for="productPrice">Product price</label>
				                                    <input type="text" ref="productPrice" name="productPrice" required/>
				                                    <label for="productPicture">Product picture</label>
				                                    <input type="text" ref="productPicture" name="productPicture" required/>
				                                    <button type="submit" className="button" onClick={() => {
				                                      let obj = this.collectFields();
				                                      let validate = this.validateUrl(obj.picture);
				                                      if(validate) {
				                                      api.addProduct(obj).then((response) => {
						                                    if(response.status === 200) {
						                                      store.dispatch(actions.startAddProducts());
						                                      dispatch(actions.setProduct(response.data));
						                                    }
				                                      });
				                                        } else {
				                                         alert('dfsdf');
				                                        }
				                                 }}>Add Product
				                                    </button>
			                                    </fieldset>
		                                    </div>
		                                    )
	                                    }
                                    });
export default connect((state) => {
	return state;
})(addProduct);