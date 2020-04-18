import {RECEIVE_USERS, UPDATE_USER_ANSWER} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state, //everything that was on it
        ...action.users //users that we are grabbing from actions
      };
    case UPDATE_USER_ANSWER:
      return {
        ...state, //everything that was on
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser][action.answers],
            [action.qid]: action.answer
          }
        }
      }
    default:
      return state;
  }
}
