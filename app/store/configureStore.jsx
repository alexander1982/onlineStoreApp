import * as redux from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {
toggleAdminReducer,
toggleAddProductReducer,
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
		                                    allProductsInCart          : allProductsInCartReducer,
		                                    gOnly                      : gOnlyReducer,
		                                    login                      : toggleLoginReducer,
		                                    productInCart              : toggleCartReducer,
		                                    products                   : productsReducer,
		                                    productsOrProduct          : toggleProductsOrPruductReducer,
		                                    range                      : rangeReducer,
		                                    register                   : toggleRegisterReducer,
		                                    searchText                 : searchProductReducer,
		                                    signin                     : toggleSigninReducer,
		                                    singleProduct              : singleProductReducer,
		                                    toggleAddProduct           : toggleAddProductReducer,
		                                    toggleSingleProductCheckOut: toggleSingleProductCheckOutReducer,
		                                    toggleAdmin                : toggleAdminReducer,
		                                    users                      : userReducer,
		                                    userErrorText              : userErrorTextReducer
	                                    });

	let store = redux.createStore(reducer, initialState, redux.compose(
	redux.applyMiddleware(thunk, logger),
	window.devToolsExtension? window.devToolsExtension() : f => f
	));
	return store;
};
