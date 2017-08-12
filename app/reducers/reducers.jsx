export var firstButtonReducer = (state = '', action) => {
	switch(action.type){
		case 'FIRST_BUTTON':
			return action.text1;
		default:
			return state;
	}
};

export var secondButtonReduser = (state = '', action) => {
	switch(action.type){
		case 'SECOND_BUTTON':
			return action.text2;
		default:
			return state;
	}
};