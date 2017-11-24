let React = require('react');
let { connect } = require('react-redux');
let createClass = require('create-react-class');
let actions = require('Actions');
let authStuff = require('AuthStuff');
let api = require('API');
let store = require('ConfigureStore').configure();

export let SingleProduct = createClass({
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
	                                       render() {
		                                       let { singleProduct, dispatch } = this.props;
		                                       let collected = this.collectFieldsForCart(singleProduct._id, singleProduct.name, singleProduct.describtion, singleProduct.quantity, singleProduct.price, singleProduct.picture);
		                                       console.log(singleProduct);
		                                       return (
		                                       <div>
			                                       <span>{singleProduct.name}</span>
			                                       <span>{singleProduct.describtion}</span>
			                                       <span>------></span>
			                                       <span>{singleProduct.quantity}</span>
			                                       <span>------></span>
			                                       <span>{singleProduct.price}</span>
			                                       <button className="button" onClick={() => {
			                                    {
			                                     if(this.refs.pick.value > singleProduct.quantity || this.refs.pick.value < 0) {
			                                      console.log('Not enough');
			                                     } else {
			                                      let collectedFields = this.collectFieldsForCart(singleProduct._id, singleProduct.name, singleProduct.describtion, this.refs.pick.value, singleProduct.price, singleProduct.picture);
			                                      api.addProductToCart(collectedFields).then((user) => {
			                                        dispatch(actions.unsetUser());
			                                        dispatch(actions.setUser(user));
			                                        api.decrementProductInStore(collectedFields).then((response) => {
			                                        if(response.data.ok === 1){
			                                          store.dispatch(actions.startAddProducts());
			                                          api.getProducts().then((products) => {
			                                          dispatch(actions.unsetProducts());
			                                          dispatch(actions.addProducts(products.data));
                                                api.getProduct(singleProduct._id).then((response) => {
			                                                let updatedProduct = {
			                                                _id: response.data._id,
			                                                name:  response.data.name,
			                                                describtion: response.data.describtion,
			                                                quantity: response.data.quantity,
			                                                price: response.data.price,
			                                                picture: response.data.picture
			                                              };
			                                              store.dispatch(actions.startAddProductsToCart(collected));
			                                              dispatch(actions.setSingleProduct(updatedProduct));
			                                              this.refs.pick.value = '';
			                                              });
			                                          });
			                                        }
			                                       });
			                                      });
			                                     }
			                                    }
			                                  }}>Add to cart
			                                       </button>
			                                       <button className="button" onClick={() => {
			                                    {
			                                      api.getProductFromCart(collected).then((response) => {       
			                                      let newQuantity = collected.quantity + response.data[0].cart[0].quantity;
			                                      let updated = {
			                                        _id: collected._id,
			                                        name: collected.name,
			                                        describtion: collected.describtion,
			                                        quantity: newQuantity,
			                                        token: collected.token
			                                      };
			                                      api.removeProductFromCart(collected).then((response) => {
				                                      api.addProductToCart(updated);
			                                      });
			                                      });
			                                    }
			                                  }}>Update product in cart
			                                       </button>
			                                       <button className="button" onClick={() => {
			                                    {
			                                      api.removeProductFromCart(collected);
			                                    }
			                                  }}>Delete product from cart
			                                       </button>
			                                       <button className="button primary" onClick={() => {
				                                        dispatch(actions.toggleProductsOrPruduct());
				                                        api.getProduct(singleProduct._id).then((response) => {
			                                             if(response.data.quantity === 0) {
			                                             let collectedFields = this.collectFieldsForCart(singleProduct._id, singleProduct.name, singleProduct.describtion, singleProduct.quantity);
			                                              api.incrementProductInStore(collectedFields).then((response) => {
						                                        if(response.data.ok === 1){
						                                          store.dispatch(actions.startAddProducts());
						                                          api.getProducts().then((products) => {
						                                          dispatch(actions.unsetProducts());
						                                            dispatch(actions.addProducts(products.data));
						                                          });
			                                              }
			                                              });
			                                             }

			                                            });
				                                      }}>Back to main
			                                       </button>
			                                       <input type="number" min="0" ref="pick"/>
		                                       </div>
		                                       )
	                                       }
                                       });
export default connect()(SingleProduct);