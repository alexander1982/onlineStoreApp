import * as redux from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {
cartReducer,
productsReducer,
userReducer,
searchProductReducer,
gOnlyReducer,
rangeReducer,
userErrorTextReducer,
toggleRegisterReducer,
toggleLoginReducer,
toggleSigninReducer
} from 'Reducers';

export let configure = (initialState = {}) => {

	let reducer = redux.combineReducers({
		                                    cart         : cartReducer,
		                                    products     : productsReducer,
		                                    users        : userReducer,
		                                    userErrorText: userErrorTextReducer,
		                                    searchText   : searchProductReducer,
		                                    gOnly        : gOnlyReducer,
		                                    range        : rangeReducer,
		                                    register     : toggleRegisterReducer,
		                                    login        : toggleLoginReducer,
		                                    signin       : toggleSigninReducer
	                                    });

	let store = redux.createStore(reducer, initialState, redux.compose(
	redux.applyMiddleware(thunk, logger),
	window.devToolsExtension? window.devToolsExtension() : f => f
	));
	return store;
};
