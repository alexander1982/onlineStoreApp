let redux = require('redux');
import {showCompletedReducer, showTextReducer} from 'Reducers';

export let configure = (initialState = {}) => {
	
	let reducer = redux.combineReducers({
		showCompleted: showCompletedReducer,
		showText: showCompletedReducer
	                                    });
	
	let store = redux.createStore(reducer, initialState, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
	));
	
	return store;
}; 