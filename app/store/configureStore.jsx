import * as redux from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import { productsReducer, userReducer } from 'Reducers';

export let configure = (initialState = {}) => {

	let reducer = redux.combineReducers({
		                                    products: productsReducer,
		                                    users   : userReducer
	                                    });

	let store = redux.createStore(reducer, initialState, redux.compose(
	                              redux.applyMiddleware(thunk, logger, promise),
	                              window.devToolsExtension? window.devToolsExtension() : f => f
	                              ));
	return store;
};
