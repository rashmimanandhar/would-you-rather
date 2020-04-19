import {hideLoading, showLoading} from "react-redux-loading";
import {_saveQuestion} from "../utils/_DATA";
import {updateUserQuestion} from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_ANSWER = "SAVE_ANSWER"
export const SAVE_QUESTION = "SAVE_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

export function saveAnswer(authedUser, qid, answer) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    qid,
    answer
  };
}

export function handleNewQuestion(optionOne, optionTwo) {
  return (dispatch, getState) => {
    const {authedUser} = getState();
    dispatch(showLoading());
    return _saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser
    }).then(question => dispatch(saveQuestion(question)))
      .then(response =>
        dispatch(updateUserQuestion(authedUser, response.question.id))
      )
      .then(() => dispatch(hideLoading()));
  }
}

export function saveQuestion(question) {
  console.log(question);
  return {
    type: SAVE_QUESTION,
    question
  }
}
