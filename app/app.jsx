let React = require('react');
let ReactDOM = require('react-dom');
import { Provider } from 'react-redux';
let $ = require('jquery');
let StoreApp = require('StoreApp');
let store = require('ConfigureStore').configure();
window.jQuery = $;
let slick = require('slick-carousel');

$(document).foundation();

$(document).ready(() => {

	$(".slider").slick({
		                   // normal options..
		                   arrows        : false,
		                   dots          : false,
		                   infinite      : true,
		                   speed         : 400,
		                   autoplay      : true,
		                   slidesToShow  : 1,
		                   slidesToScroll: 1,
		                   cssEase       : 'linear'
	                   });
});

require('style-loader!css-loader!sass-loader!ApplicationStyles');


ReactDOM.render(
<Provider store={store}>
	<StoreApp/>
</Provider>,
document.getElementById('app')
);