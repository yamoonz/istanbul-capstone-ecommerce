import { combineReducers } from "redux";
import {
  LOG_IN,
  LOG_OUT,
  LOGIN_ERROR,
  SHOULD_POP_UP_CLOSE,
  ADD_TO_CART,
  DELETE_FROM_CART,
  SUM_TOTAL_PRICE,
  ADD_ONE_MORE_ITEM,
  REMOVE_ITEM,
  QUANTITY_IN_SINGLE_PRODUCT,
  INCREASE_MODIFY_QUANTITY,
  DECREASE_MODIFY_QUANTITY,
} from "../actions/actionsTypes";

const addOrDeleteProductData = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case DELETE_FROM_CART:
      return action.payload;
    default:
      return state;
  }
};

const getModifiedQuantity = (state = [], action) => {
  switch (action.type) {
    case INCREASE_MODIFY_QUANTITY:
      return action.payload();
    case DECREASE_MODIFY_QUANTITY:
      return action.payload();
    default:
      return state;
  }
};

// Getting an array of prices , and enabling adding and removing items from the shopping cart.
const getTotalPrice = (state = [], action) => {
  switch (action.type) {
    case SUM_TOTAL_PRICE:
      return [...state, action.payload];
    case ADD_ONE_MORE_ITEM:
      return [action.payload];
    case REMOVE_ITEM:
      return [action.payload];
    default:
      return state;
  }
};

const getProductQunatity = (state = [], action) => {
  switch (action.type) {
    case QUANTITY_IN_SINGLE_PRODUCT:
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
        isAuthFailed: false,
        isAuthSucceeded: true,
      };
    case LOG_OUT:
      return {
        ...state,
        userName: {},
        isLoggedIn: false,
        isAdmin: false,
        isAuthFailed: false,
        isAuthSucceeded: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isAuthFailed: action.isFailed,
        isAuthSucceeded: action.isAuthSucceeded,
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
  authentication: authenticationReducer,
  modal: modalReducer,
  addOrDeleteProductData,
  getProductQunatity,
  getTotalPrice,
  getModifiedQuantity,
});

export default allReducers;
