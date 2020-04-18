import { _getUsers, _getQuestions } from "../utils/_DATA.js";
import { receiveUsers } from "../actions/users";
import { receiveQuestions } from "../actions/questions";
import { saveAnswer } from "../actions/questions";
import { setAuthedUser } from "../actions/authedUser";
import { showLoading, hideLoading } from "react-redux-loading";
import {_saveQuestionAnswer} from "../utils/_DATA";
import {updateUserAnswer} from "./users";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return _getUsers().then(users => {
      dispatch(receiveUsers(users));
      dispatch(hideLoading());
    });
  };
}

export function getQuestions() {
  return dispatch => {
    dispatch(showLoading());
    return _getQuestions().then(questions => {
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}

export function answerQuestion(answer, questionId) {
  return (dispatch, getState) => {
    const {authedUser} = getState();
    dispatch(showLoading());
    return _saveQuestionAnswer({
      authedUser,
      qid: questionId,
      answer
    })
      .then(() =>
        dispatch(saveAnswer(authedUser,questionId,answer)),
        dispatch(updateUserAnswer(authedUser,questionId,answer))
      )
      .then(() => dispatch(hideLoading()));
  };
}

