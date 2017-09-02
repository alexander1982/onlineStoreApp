import * as redux from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {
productsReducer,
userReducer,
searchProductReducer,
gOnlyReducer,
rangeReducer,
userErrorTextReducer
} from 'Reducers';

export let configure = (initialState = {}) => {

	let reducer = redux.combineReducers({
		                                    products: productsReducer,
		                                    users: userReducer,
		                                    userErrorText: userErrorTextReducer,
		                                    searchText: searchProductReducer,
		                                    gOnly: gOnlyReducer,
		                                    range: rangeReducer
	                                    });

	let store = redux.createStore(reducer, initialState, redux.compose(
	redux.applyMiddleware(thunk, logger),
	window.devToolsExtension? window.devToolsExtension() : f => f
	));
	return store;
};
