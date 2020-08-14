import { combineReducers } from "redux";
import {
  LOG_IN,
  LOG_OUT,
  CURRENT_BOARD_ID,
  POP_UP_CLOSED,
} from "../actions/actionsTypes";

const currentBoardIDReducer = (state = [], action) => {
  switch (action.type) {
    case CURRENT_BOARD_ID:
      return action.payload;
    default:
      return state;
  }
};

const initialState = {
  userName: null,
  loggedIn: null,
  isAdmin: false,
  isPopUpClosed: false,
};

const handleLogin = (state = initialState, action) => {
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
        isAdmin: false,
      };
    case POP_UP_CLOSED:
      return {
        ...state,
        isPopUpClosed: true,
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
