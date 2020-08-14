import { combineReducers } from "redux";
import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  MODIFY_QUANTITY,
  SUM_TOTAL_PRICE,
  ADD_ONE_MORE_ITEM,
  REMOVE_ONE_MORE_ITEM,
  QUANTITY_IN_SINGLE_PRODUCT,
} from "../actions/actionsTypes";

const addOrDeleteProductData = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case DELETE_FROM_CART:
      return action.payload;
    case MODIFY_QUANTITY:
      return action.payload;
    default:
      return state;
  }
};

const getTotalPrice = (state = [], action) => {
  switch (action.type) {
    case SUM_TOTAL_PRICE:
      return [...state, action.payload];
    case ADD_ONE_MORE_ITEM:
      return action.payload;
    case REMOVE_ONE_MORE_ITEM:
      return action.payload;
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

const allReducers = combineReducers({
  addOrDeleteProductData,
  getProductQunatity,
  getTotalPrice,
});

export default allReducers;
