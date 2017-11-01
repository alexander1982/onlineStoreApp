let api = require('API');
import authStuff from 'AuthStuff';

export let setUser = (user) => {
	return {
		type: 'SET_USER',
		user
	}
};

export let unsetUser = () => {
	return {
		type: 'UNSET_USER'
	}
};

export let logOut = () => {
	return (dispatch, getState) => {
		document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		dispatch(unsetUser());
	}
};

export let setUserErrorText = (userErrorText) => {
	return {
		type: 'SET_USER_ERROR_TEXT',
		userErrorText
	}
};

export let getExistUser = (user) => {
	return (dispatch, getState) => {
		api.getUser(user).then((response) => {
			if(response.data){
				dispatch(setUserErrorText(response.data));
			} else {
				dispatch(setUser(response));
				dispatch(toggleLogin());
			}
		});
	}
};

export let addNewUser = (user) => {
	return (dispatch, getState) => {
		api.addUser(user).then((response) => {
			if(!response.data){
				dispatch(setUser(response));
				dispatch(toggleSignin());
			} else {
				dispatch(setUserErrorText(response.data));
			}
		});
	}
};

export let getUser = (user) => {
	return (dispatch, getState) => {
		api.getUser(user).then((response) => {
			if(response.data){
				dispatch(setUserErrorText(response.data));
			} else {
				dispatch(setUser(response));
				dispatch(toggleLogin());
			}
		})
	}
};

export let setSearchText = (searchText) => {
	return {
		type: 'SET_SEARCH_TEXT',
		searchText
	}
};

export let addProducts = (products) => {
	return {
		type: 'ADD_PRODUCTS',
		products
	}
};

export let unsetProducts = () => {
	return {
		type: 'UNSET_PRODUCTS'
	}
};

export let startAddProducts = () => {
	return (dispatch, getState) => {
		api.getProducts().then((response) => {
			if(response.status === 200){
				dispatch(addProducts(response.data));
			}
		});
	};
};

export let toggleG = () => {
	return {
		type: 'TOGGLE_G_ONLY'
	}
};

export let setRange = (range) => {
	return {
		type: 'SET_RANGE',
		range
	}
};

export let toggleRegister = () => {
	return {
		type: 'TOGGLE_REGISTER'
	}
};

export let toggleLogin = () => {
	return {
		type: 'TOGGLE_LOGIN'
	}
};

export let toggleSignin = () => {
	return {
		type: 'TOGGLE_SIGNIN'
	}
};

export let toggleProductsOrPruduct = () => {
	return {
		type: 'TOGGLE_PRODUCT'
	}
};

export let setSingleProduct = (singleProduct) => {
	return {
		type: 'SET_SINGLE_PRODUCT',
		singleProduct
	}
};

export let usetSingleProduct = () => {
	return {
		type: 'UNSET_SINGLE_PRODUCT'
	}
};

export let toggleCart = () => {
	return {
		type: 'TOGGLE_CART'
	}
};

export let toggleSingleProductCheckOut = () => {
	return {
		type: 'TOGGLE_SINGLE_PRODUCT_CHECKOUT'
	}
};

export let startAddProductsToCart = (userInfo) => {
	return (dispatch, getState) => {
		api.getProductsFromCart(userInfo).then((response) => {
				dispatch(setProductsInCart(response));
		});
	};
};

export let setProductsInCart = (products) => {
	return {
		type: 'SET_ALL_PRODUCTS_IN_CART',
		products
	}
};
console.log('config/production.env');
console.log('config/production.env');
console.log('config/production.env');
console.log('config/production.env');
