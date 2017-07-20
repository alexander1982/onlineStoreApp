let React = require('react');
let ReactDOM = require('react-dom');
import {Provider} from 'react-redux';
let $ = require('jquery');
let StoreApp = require('StoreApp');
let store = require('ConfigureStore').configure();
window.jQuery = $;

$(document).foundation();

require('style-loader!css-loader!sass-loader!ApplicationStyles');

ReactDOM.render(
	<Provider store={store}>
		<StoreApp/>
	</Provider>,
document.getElementById('app')
);