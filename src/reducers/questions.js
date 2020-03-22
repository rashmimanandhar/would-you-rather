import { RECEIVE_QUESTIONS } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state, //everything that was on it
        ...action.questions //questions that we are grabbing from actions
      };
    default:
      return state;
  }
}
