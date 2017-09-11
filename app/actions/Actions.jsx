let api = require('API');

export let setUser = (user) => {
	return {
		type: 'SET_USER',
		user
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
			if(response.data){
				dispatch(setUserErrorText(response.data));
			} else {
				dispatch(setUser(response));
				dispatch(toggleSignin());
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
