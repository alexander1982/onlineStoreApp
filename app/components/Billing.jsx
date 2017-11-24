let React = require('react');
let { connect } = require('react-redux');
let createClass = require('create-react-class');
let api = require('API');
import ProductInCart from "ProductInCart";
import authStuff from 'AuthStuff';
let actions = require('Actions');
let store = require('ConfigureStore').configure();

export let Billing = createClass({
	                                 collectData(username, email) {
		                                 let billingData = {
			                                 cardNumber: this.refs.cardNumber.value,
			                                 expDate   : this.refs.expDate.value,
			                                 ccv       : this.refs.ccv.value,
			                                 name      : this.refs.name.value,
			                                 lastName  : this.refs.lastName.value,
			                                 address   : this.refs.address.value,
			                                 country   : this.refs.country.value,
			                                 index     : this.refs.index.value,
			                                 username  : username,
			                                 email     : email
		                                 };
		                                 return billingData;
	                                 },
	                                 render() {
		                                 let { totalPrice, users, dispatch } = this.props;
		                                 return (
		                                 <div>
			                                 <fieldset>
				                                 <button className="button" onClick={() => {
				                                    let data = this.collectData(users.username, users.email);
				                                    api.addBillingData(data).then((response) => {
			                                        dispatch(actions.setUser(response.data));
				                                    });
				                                  }}>Charge
				                                 </button>
				                                 <button className="button" onClick={() => {
				                                    let data = this.collectData(users.username, users.email);
				                                    api.removeBillingData(data).then((response) => {
				                                      if(response.data.ok === 1) {
				                                        let medal = {
				                                          token: authStuff.getCookie('auth')
				                                        };
				                                        api.getUserByToken(medal).then((foundUser) => {
				                                          dispatch(actions.setUser(foundUser));
				                                        });
				                                      }
				                                    });
				                                  }}>Remove billing data
				                                 </button>
				                                 <legend>Billing stuff</legend>
				                                 <input type="number" ref="total" value={totalPrice} placeholder={totalPrice}/>
				                                 <input type="number" ref="cardNumber" name="cardNumber"
				                                        placeholder="Enter card number" value="1223344" required/>
				                                 <input type="number" ref="expDate" name="cardNumber" placeholder="Exp Date"
				                                        value="0220" required/>
				                                 <input type="number" ref="ccv" name="CCV" placeholder="CCV" value="006"
				                                        required/>
				                                 <input type="text" ref="name" name="name" placeholder="Enter your name"
				                                        value="Mongo" required/>
				                                 <input type="text" ref="lastName" name="lastName"
				                                        placeholder="Enter your last name" value="Db" required/>
				                                 <input type="text" ref="address" name="address" placeholder="Enter your adress"
				                                        value="singon 23/30" required/>
				                                 <input type="text" ref="country" name="country"
				                                        placeholder="Enter your country" value="Singalor" required/>
				                                 <input type="text" ref="index" name="index" placeholder="Enter your index"
				                                        value="02400" required/>
			                                 </fieldset>
		                                 </div>
		                                 )
	                                 }
                                 }
);
export default connect(
(state) => {
	return state;
}
)(Billing);