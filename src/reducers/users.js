import { RECEIVE_USERS } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state, //everything that was on it
        ...action.users //users that we are grabbing from actions
      };
    default:
      return state;
  }
}
