let React = require('react');
let ReactDOM = require('react-dom');
import { Provider } from 'react-redux';
let $ = require('jquery');
let StoreApp = require('StoreApp');
let actions = require('Actions');
let store = require('ConfigureStore').configure();
let api = require('API');

window.jQuery = $;
let slick = require('slick-carousel');

store.dispatch(actions.startAddProducts());

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

if(getCookie('auth').length > 0) {
	let token = {
		token: getCookie('auth')
	};
	api.getUserByToken(token).then((data) => {
		store.dispatch(actions.setUser(data));
	});
}

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
	$('#play-video').on('click', function(ev) {

		$("#video")[0].src += "&autoplay=1";
		ev.preventDefault();

	});
});

require('style-loader!css-loader!sass-loader!ApplicationStyles');

ReactDOM.render(
<Provider store={store}>
	<StoreApp/>
</Provider>,
document.getElementById('app')
);