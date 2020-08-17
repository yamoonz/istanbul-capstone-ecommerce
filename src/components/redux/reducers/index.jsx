import { combineReducers } from "redux";
import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  SUM_TOTAL_PRICE,
  ADD_PRICE_OF_ONE_ITEM,
  SUBTRACT_PRICE_OF_ONE_ITEM,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  LOG_IN,
  LOG_OUT,
  LOGIN_ERROR,
  SHOULD_POP_UP_CLOSE,
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
    case INCREASE_QUANTITY:
      return action.payload();
    case DECREASE_QUANTITY:
      return action.payload();
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

// Getting an array of prices , and enabling adding and removing items from the shopping cart.
const getTotalPrice = (state = [], action) => {
  switch (action.type) {
    case SUM_TOTAL_PRICE:
      return [...state, action.payload];
    case ADD_PRICE_OF_ONE_ITEM:
      return [action.payload];
    case SUBTRACT_PRICE_OF_ONE_ITEM:
      return [action.payload];
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
  productsData: addOrDeleteProductData,
  totalPrice: getTotalPrice,
  modifiedQuantity: getModifiedQuantity,
  authentication: authenticationReducer,
  modal: modalReducer,
});

export default allReducers;
