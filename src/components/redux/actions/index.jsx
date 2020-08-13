import { LOG_IN, LOG_OUT, CURRENT_BOARD_ID } from "./actionsTypes";

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
