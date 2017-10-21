import constants from '../constants';

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Here are a few sample actions for User managment.
	Feel free to remove and replace with your own actions
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

export default {

  createUser:(user)=>{
		return {
			type:constants.USER_CREATED,
			data:user
		}
	},

  fetchUser:(params)=>{
    return dispatch=>{
      return dispatch(TurboClient.postRequest('user',params,constants.USER_RECEIVED))
    }
  },

}
