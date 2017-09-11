let React = require('react');
let { connect } = require('react-redux');
let createClass = require('create-react-class');
let actions = require('Actions');

export let RegisterButton = createClass({
	                                        render() {
		                                        let { dispatch } = this.props;
		                                        return (
		                                        <div>
			                                        <button className="button" onClick={() => {
									                               dispatch(actions.toggleSignin());
									                               }}
			                                        >Signin
			                                        </button>
		                                        </div>
		                                        )
	                                        }
                                        });
export default connect((state) => {
	return state;
})(RegisterButton);