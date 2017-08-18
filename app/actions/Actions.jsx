let api = require('API');

export let addUser = (user) => {
	return {
		type: 'ADD_USER',
		user
	}
};

export let addProducts = (products) => {
	return {
		type: 'ADD_PRODUCTS',
		products
	}
};

export let startAddProducts = () => {
	return (dispatch, getState) => {
		api.getProducts().then((response) => {
			if(response.status === 200) {
				dispatch(addProducts(response.data));
			}
		});
	};
};
