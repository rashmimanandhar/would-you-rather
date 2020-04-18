import { showLoading, hideLoading } from "react-redux-loading";
import {_saveQuestionAnswer} from "../utils/_DATA";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_ANSWER = "SAVE_ANSWER"

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

function saveAnswer(tweet) {
  return {
    type: SAVE_ANSWER,
    tweet
  };
}

export function answerQuestion(answer, questionId) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return _saveQuestionAnswer({
      authedUser,
      qid: questionId,
      answer
    })
      .then(() => dispatch(saveAnswer()))
      .then(() => dispatch(hideLoading()));
  };
}
