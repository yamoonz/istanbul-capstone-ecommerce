import { LOG_IN, LOG_OUT, CURRENT_BOARD_ID } from "./actionsTypes";

export const currentBoardIDAction = (data) => {
  return {
    type: CURRENT_BOARD_ID,
    payload: data,
  };
};

export const logIn = (user) => {
  return { type: LOG_IN, payload: user };
};

export const logOut = (user) => {
  return { type: LOG_OUT, payload: user };
};
