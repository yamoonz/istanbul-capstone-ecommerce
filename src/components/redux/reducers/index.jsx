import { combineReducers } from "redux";
import { LOG_IN, LOG_OUT, CURRENT_BOARD_ID } from "../actions/actionsTypes";

const currentBoardIDReducer = (state = [], action) => {
  switch (action.type) {
    case CURRENT_BOARD_ID:
      return action.payload;
    default:
      return state;
  }
};

const handleLogin = (state = {}, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        userName: action.user,
        loggedIn: true,
        isAdmin: action.admin,
      };
    case LOG_OUT:
      return {
        ...state,
        userName: {},
        loggedIn: false,
      };
    default:
      return state;
  }
};

const allReducers = combineReducers({
  currentBoardIDReducer,
  handleLogin,
});

export default allReducers;
