import { combineReducers } from "redux";
import {
  LOG_IN,
  LOG_OUT,
  LOGIN_ERROR,
  SHOULD_POP_UP_CLOSE,
  CURRENT_BOARD_ID,
} from "../actions/actionsTypes";

const currentBoardIDReducer = (state = [], action) => {
  switch (action.type) {
    case CURRENT_BOARD_ID:
      return action.payload;
    default:
      return state;
  }
};

const authenticationReducer = (state = {}, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        userName: action.user,
        isLoggedIn: true,
        isAdmin: action.admin,
        authError: false,
      };
    case LOG_OUT:
      return {
        ...state,
        userName: {},
        isLoggedIn: false,
        isAdmin: false,
        authError: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        authError: true,
        errorDetail: action.payload,
      };
    default:
      return state;
  }
};

const modalReducer = (state = {}, action) => {
  switch (action.type) {
    case SHOULD_POP_UP_CLOSE:
      return {
        isPopUpClosed: action.payload,
      };
    default:
      return state;
  }
};

const allReducers = combineReducers({
  currentBoardIDReducer,
  authentication: authenticationReducer,
  modal: modalReducer,
});

export default allReducers;
