let redux = require('redux');
import {firstButtonReducer, secondButtonReducer} from 'Reducers';

export let configure = (initialState = {}) => {
	
	let reducer = redux.combineReducers({
		firstButton: firstButtonReducer, 
		secondButton: secondButtonReducer
	                                    });
	
	let store = redux.createStore(reducer, initialState, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
	));
	
	return store;
}; 