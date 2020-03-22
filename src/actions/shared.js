import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from "../utils/_DATA";
import { receiveUsers } from "../actions/users";
import { receiveQuestions } from "../actions/questions";
import { setAuthedUser } from "../actions/authedUser";

export function handleInitialData() {
  return dispatch => {
    return _getUsers().then(({ users }) => {
      console.log(users);
      dispatch(receiveUsers(users));
    });
  };
}
