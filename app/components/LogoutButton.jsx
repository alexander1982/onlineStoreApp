let React = require('react');
let { connect } = require('react-redux');
let createClass = require('create-react-class');
let actions = require('Actions');

export let LogoutButton = createClass({
	                                     render() {
		                                     let { dispatch } = this.props;
		                                     return (
		                                     <div>
			                                     <button className="button" onClick={() => {
									                               dispatch(actions.logOut());
									                               }}
			                                     >Logout
			                                     </button>
		                                     </div>
		                                     )
	                                     }
                                     });
export default connect((state) => {
	return state;
})(LogoutButton);