import { CHANGE_AUTH } from 'actions/types'


// very simple state that hoding boolean whether user isLogin
export default function authReducer(state = false, action) {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload;
    default:
      return state;
  }
}