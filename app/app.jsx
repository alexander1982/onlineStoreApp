let React = require('react');
let ReactDOM = require('react-dom');
import { Provider } from 'react-redux';
let $ = require('jquery');
let StoreApp = require('StoreApp');
let actions = require('Actions');
let store = require('ConfigureStore').configure();
let api = require('API');
let authStuff = require('AuthStuff');

window.jQuery = $;
let slick = require('slick-carousel');

store.dispatch(actions.startAddProducts());

if(authStuff.getCookie('auth').length > 0) {
	let token = {
		token: authStuff.getCookie('auth')
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