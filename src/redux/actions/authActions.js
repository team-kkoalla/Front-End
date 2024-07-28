import { SET_LOGGED_IN } from '../actionTypes/authTypes';

export const setLoggedIn = (isLoggedIn) => ({
  type: SET_LOGGED_IN,
  payload: isLoggedIn
});
