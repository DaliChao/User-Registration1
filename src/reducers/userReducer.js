import constants from '../constants'

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is a sample reducer or user management. If you remove
	and use your own reducers, remember to update the store
	file (../stores/index.js) with your reducers.
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/



var initialState = {
	all: [],
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state)

	switch (action.type) {

		case constants.USER_CREATED:
		  console.log('USER_CREATED:'+JSON.stringify(action.data));
			let all=Object.assign([],newState.all);
			all.push(action.data);
			newState['all']=all;
      return newState;

		default:
			return state
	}
}
