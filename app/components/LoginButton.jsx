let React = require('react');
let { connect } = require('react-redux');
let createClass = require('create-react-class');
let actions = require('Actions');

export let LoginButton = createClass({
	                                        render() {
		                                        let { dispatch } = this.props;
		                                        return (
		                                        <div>
			                                        <button className="button" onClick={() => {
									                               dispatch(actions.toggleLogin());
									                              
									                               }}
			                                        >Login
			                                        </button>
		                                        </div>
		                                        )
	                                        }
                                        });
export default connect((state) => {
	return state;
})(LoginButton);