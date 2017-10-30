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
		case 'UNSET_PRODUCTS':
			return [];
		default:
			return state;
	}
};

export let userReducer = (state = [], action) => {
	switch(action.type){
		case 'SET_USER':
			return action.user;
		case 'UNSET_USER':
			return [];
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

export let toggleProductsOrPruductReducer = (state = false, action) => {
	switch(action.type){
		case 'TOGGLE_PRODUCT':
			return !state;
		default:
			return state;
	}
};

export let singleProductReducer = (state = [], action) => {
	switch(action.type){
		case 'SET_SINGLE_PRODUCT':
			return [
				action.singleProduct
			];
		case 'UNSET_SINGLE_PRODUCT':
			return [];
		default:
			return state;
	}
};

export let toggleCartReducer = (state = false, action) => {
	switch(action.type){
		case 'TOGGLE_CART':
			return !state;
		default:
			return state;
	}
};

export let toggleSingleProductCheckOutReducer = (state = false, action) => {
	switch(action.type) {
		case 'TOGGLE_SINGLE_PRODUCT_CHECKOUT':
			return !state;
		default:
			return state;
	}
};

export let allProductsInCartReducer = (state = [], action) => {
	switch(action.type) {
		case 'SET_ALL_PRODUCTS_IN_CART':
			return [
				...state,
			  ...action.products
			];
		default:
			return state;
	}
};