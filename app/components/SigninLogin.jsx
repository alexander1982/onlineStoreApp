let React = require('react');
let { connect } = require('react-redux');
let createClass = require('create-react-class');
let actions = require('Actions');
import ProductsList from "ProductsList";
import ProductSearch from "ProductSearch";
import Filters from "Filters";
import Signin from 'Signin';
import Login from 'Login';

export let SigninLogin = createClass({
	                                     render() {
		                                     let { dispatch, signin, login } = this.props;
		                                     let renderRegister = () => {
			                                     if(signin){
				                                     return (
				                                     <div>
					                                     <Signin onSubmit={this.handleUser} userErrorText={this.props.userErrorText}/>
				                                     </div>
				                                     )
			                                     } else if(login){
				                                     return (
				                                     <div>
					                                     <Login onSubmit={this.handleUser} userErrorText={this.props.userErrorText}/>
				                                     </div>
				                                     )
			                                     } else {
				                                     return(
				                                      <div>
					                                      <ProductSearch onSearch={this.handleSearch}/>
					                                      <ProductsList/>
					                                      <Filters onFilter={this.handleFilter}/>
				                                      </div>
				                                     )
			                                     }
		                                     };
		                                     return (
		                                     <div>
			                                     {renderRegister()}
		                                     </div>
		                                     )
	                                     }
                                     });
export default connect((state) => {
	return state;
})(SigninLogin);