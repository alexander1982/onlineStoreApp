export let searchProductReducer = (state = '', action) => {
	switch(action.type){
		case 'SET_SEARCH_TEXT':
			return action.searchText;
		default:
			return state;
	}
};

export let gOnlyReducer = (state = false, action) => {
	switch(action.type){
		case 'TOGGLE_G_ONLY':
			return !state;
		default:
			return state;
	}
};

export let rangeReducer = (state = [], action) => {
	switch(action.type){
		case 'SET_RANGE':
			return [
				action.range
			];
		default:
			return state;
	}
};

export let productsReducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_PRODUCTS':
			return [
				...state,
				...action.products
			];
		default:
			return state;
	}
};

export let userReducer = (state = [], action) => {
	switch(action.type){
		case 'SET_USER':
			return [
				action.user
			];
		default:
			return state;
	}
};

export let userErrorTextReducer = (state = [], action) => {
	switch(action.type){
		case 'SET_USER_ERROR_TEXT':
			return action.userErrorText;
		default:
			return state;
	}
};

export let toggleRegisterReducer = (state = false, action) => {
	switch(action.type){
		case 'TOGGLE_REGISTER':
			return !state;
		default:
			return state;
	}
};

export let toggleLoginReducer = (state = false, action) => {
	switch(action.type){
		case 'TOGGLE_LOGIN':
			return !state;
		default:
			return state;
	}
};

export let toggleSigninReducer = (state = false, action) => {
	switch(action.type){
		case 'TOGGLE_SIGNIN':
			return !state;
		default:
			return state;
	}
};