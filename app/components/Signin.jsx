let React = require('react');
let { connect } = require('react-redux');
let createClass = require('create-react-class');
let actions = require('Actions');

export let Signin = createClass({
	                                setNewUser() {
		                                let user = {
			                                name    : this.refs.name.value,
			                                username: this.refs.username.value,
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
				                                <legend>Signin</legend>
				                                <input type="text" ref="name" placeholder="Name" value="Af12"/>
				                                <input type="text" ref="username" placeholder="Username" value="Asdl2"/>
				                                <input type="text" ref="email" placeholder="Email" value="Asdfsde2@gmail.com"/>
				                                <input type="text" ref="password" placeholder="password" value="Asdfsd5612"/>
				                                <button type="submit" className="button button-primary" onClick={() =>
				                                  dispatch(actions.addNewUser(this.setNewUser()))}
				                                >
					                                Send
				                                </button>
			                                </fieldset>
			                                <p>{userErrorText}</p>
		                                </div>
		                                )
	                                }
                                });
export default connect()(Signin);
