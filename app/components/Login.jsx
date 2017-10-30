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
		                               let { dispatch, userErrorText } = this.props;
		                               return (
		                               <div>
			                               <fieldset>
				                               <legend>Login</legend>
				                               <input type="text" ref="email" placeholder="Email" value="gorelikov.alex@gmail.com"/>
				                               <input type="text" ref="password" placeholder="Password" value="Asdfsd561244"/>
				                               <button type="submit" className="button button-primary" onClick={() => {
				                                   dispatch(actions.getUser(this.setUser()));
				                               }}
				                               >Send
				                               </button>
			                               </fieldset>
			                               <p>{userErrorText}</p>
		                               </div>
		                               )
	                               }
                               });
export default connect((state) => {
	return state;
})(Login);