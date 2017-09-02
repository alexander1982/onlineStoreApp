let React = require('react');
let { connect } = require('react-redux');
let createClass = require('create-react-class');
let actions = require('Actions');

export let Login = createClass({
	                               setUser() {
		                               let user = {
			                               email   : this.refs.email.value,
			                               password: this.refs.password.value
		                               };
		                               return user;
	                               },
	                               render() {
		                               let { dispatch } = this.props;
		                               return (
		                               <div>
			                               <fieldset>
				                               <legend>Login</legend>
				                               <input type="text" ref="email" placeholder="Email" value="email"/>
				                               <input type="text" ref="password" placeholder="Password" value="password"/>
				                               <button type="submit" className="button button-primary" onClick={() => {
				                                   dispatch(actions.getUser(this.setUser()));
				                               }}
				                               >Send
				                               </button>
			                               </fieldset>
		                               </div>
		                               )
	                               }
                               });
export default connect()(Login);