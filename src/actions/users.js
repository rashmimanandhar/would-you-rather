//action type
import {SAVE_ANSWER} from "./questions";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const UPDATE_USER_ANSWER = "UPDATE_USER_ANSWER";

//action creator
export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

export function updateUserAnswer(authedUser, qid, answer) {
  return {
    type: UPDATE_USER_ANSWER,
    authedUser,
    qid,
    answer
  };
}
