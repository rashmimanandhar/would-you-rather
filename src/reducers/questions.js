import {RECEIVE_QUESTIONS, SAVE_ANSWER, SAVE_QUESTION} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state, //everything that was on it
        ...action.questions //questions that we are grabbing from actions
      };
    case SAVE_ANSWER:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat(action.authedUser)
          }
        }
      }
    case SAVE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      }
    default:
      return state;
  }
}

