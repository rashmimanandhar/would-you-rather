import { _getUsers } from "../utils/_DATA.js";
import { receiveUsers } from "../actions/users";
import { setAuthedUser } from "../actions/authedUser";
import { showLoading, hideLoading } from "react-redux-loading";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return _getUsers().then(users => {
      dispatch(receiveUsers(users));
      dispatch(hideLoading());
    });
  };
}
