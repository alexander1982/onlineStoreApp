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
toggleSigninReducer,
toggleProductsOrPruductReducer,
singleProductReducer,
toggleCartReducer,
toggleSingleProductCheckOutReducer,
allProductsInCartReducer
} from 'Reducers';

export let configure = (initialState = {}) => {

	let reducer = redux.combineReducers({
		                                    productInCart              : toggleCartReducer,
		                                    products                   : productsReducer,
		                                    users                      : userReducer,
		                                    userErrorText              : userErrorTextReducer,
		                                    searchText                 : searchProductReducer,
		                                    gOnly                      : gOnlyReducer,
		                                    range                      : rangeReducer,
		                                    register                   : toggleRegisterReducer,
		                                    login                      : toggleLoginReducer,
		                                    signin                     : toggleSigninReducer,
		                                    productsOrProduct          : toggleProductsOrPruductReducer,
		                                    singleProduct              : singleProductReducer,
		                                    toggleSingleProductCheckOut: toggleSingleProductCheckOutReducer,
		                                    allProductsInCart          : allProductsInCartReducer
	                                    });

	let store = redux.createStore(reducer, initialState, redux.compose(
	redux.applyMiddleware(thunk, logger),
	window.devToolsExtension? window.devToolsExtension() : f => f
	));
	return store;
};
