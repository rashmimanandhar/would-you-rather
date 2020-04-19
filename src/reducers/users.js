import {RECEIVE_USERS, UPDATE_USER_ANSWER, UPDATE_USER_QUESTION} from "../actions/users";

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
            ...state[action.authedUser].answers,
            [action.qid]: action.answer
          }
        }
      }
    case UPDATE_USER_QUESTION:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: [
            ...state[action.authedUser].questions,
            action.qid
          ]
        }
      }
    default:
      return state;
  }
}
