let React = require('react');
let { connect } = require('react-redux');
let createClass = require('create-react-class');
let api = require('API');
let actions = require('Actions');

export let Filters = createClass({
	                                 getRange() {
		                                 let range = {
			                                 from: this.refs.from.value,
			                                 to  : this.refs.to.value
		                                 };
		                                 return range;
	                                 },
	                                 render() {
		                                 let { gOnly, range, dispatch } = this.props;
		                                 return (
		                                 <div>
			                                 <fieldset>
				                                 <legend>Filters
				                                 </legend>
				                                 <input type="checkbox" checked={gOnly}
				                                        onChange={() => {dispatch(actions.toggleG())}} name="g"
				                                        id="onlyG"/><label for="g">G only</label>
			                                 </fieldset>
			                                 <fieldset>
				                                 <label for="from">From</label>
				                                 <input type="number" name="from" id="from" ref="from"/>
				                                 <label for="to">To</label>
				                                 <input type="number" name="to" id="from" ref="to"/>
				                                 <button type="submit" className="button medium button-primary" onClick={() => {
																						dispatch(actions.setRange(this.getRange()))
																					}}>Push
				                                 </button>
			                                 </fieldset>
		                                 </div>
		                                 )
	                                 }
                                 });
export default connect()(Filters);