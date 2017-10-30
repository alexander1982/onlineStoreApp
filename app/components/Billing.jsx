let React = require('react');
let { connect } = require('react-redux');
let createClass = require('create-react-class');
let api = require('API');
import ProductInCart from "ProductInCart";
let actions = ('Actions');
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
		                                 let { totalPrice, users } = this.props;
		                                 return (
		                                 <div>
			                                 <fieldset>
				                                 <legend>Billing stuff</legend>
				                                 <input type="number" ref="total" placeholder={totalPrice} value={totalPrice}/>
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
				                                        placeholder="Enter your country" value="Singapur" required/>
				                                 <input type="text" ref="index" name="index" placeholder="Enter your index"
				                                        value="02400" required/>
				                                 <button className="button" onClick={() => {
				                                    let data = this.collectData(users.username, users.email);
				                                    console.log('From billing', data);
				                                    api.addBillingData(data).then((response) => {
				                                      console.log('From billing/addBillingData',response);
				                                    });
				                                  }}>Charge
				                                 </button>
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