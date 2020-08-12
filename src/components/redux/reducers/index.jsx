import { combineReducers } from "redux";
import {
  ADD_TO_CART,
  PRODUCT_QUNATITY,
  DELETE_FROM_CART,
} from "../actions/actionsTypes";

const getProductData = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    default:
      return state;
  }
};

const deleteItemFromCart = (state = [], action) => {
  switch (action.type) {
    case DELETE_FROM_CART:
      return action.payload;
    default:
      return state;
  }
};

const getProductQunatity = (state = [], action) => {
  switch (action.type) {
    case PRODUCT_QUNATITY:
      return action.payload;
    default:
      return state;
  }
};

const allReducers = combineReducers({
  getProductData,
  getProductQunatity,
  deleteItemFromCart,
});

export default allReducers;
