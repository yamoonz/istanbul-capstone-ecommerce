import {
  LOG_IN,
  LOG_OUT,
  LOGIN_ERROR,
  SHOULD_POP_UP_CLOSE,
  CURRENT_BOARD_ID,
} from "./actionsTypes";

export const currentBoardIDAction = (data) => {
  return {
    type: CURRENT_BOARD_ID,
    payload: data,
  };
};

export const logIn = (user, admin) => {
  return { type: LOG_IN, user, admin };
};

export const logOut = () => {
  return { type: LOG_OUT };
};

export const logInError = (payload) => {
  return { type: LOGIN_ERROR, payload };
};

export const popUpStatus = (payload) => {
  return { type: SHOULD_POP_UP_CLOSE, payload };
};
