let React = require('react');
let { connect } = require('react-redux');
let createClass = require('create-react-class');
let actions = require('Actions');

export let ProductSearch = createClass({
	                                       render() {
		                                       let { dispatch, searchText } = this.props;
		                                       return (
		                                        <div className="input-group">
			                                        <input type="text" className="input-group-field" ref="searchText" placeholder="Search product by name"/>
			                                        <div className="input-group-button">
				                                        <button className="button button-primary button-height" onClick={() => {
			                                            let searchText = this.refs.searchText.value;
			                                            dispatch(actions.setSearchText(searchText))
			                                          }}>Hello</button>
			                                        </div>
		                                        </div>
		                                       )
	                                       }
                                       });
export default connect(
(state) => {
	return {
		searchText: state.searchText
	}
}
)(ProductSearch)