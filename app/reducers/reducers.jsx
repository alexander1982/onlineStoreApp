

export let productsReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_PRODUCTS':
			console.log('test');
			return [
				...state,
				action.products
			];
		default:
			return state;
	}
};

export let userReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_USERS':
			return action.users;
		default:
			return state;
	}
};