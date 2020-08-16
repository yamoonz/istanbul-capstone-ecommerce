import { combineReducers } from "redux";
import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  SUM_TOTAL_PRICE,
  ADD_PRICE_OF_ONE_ITEM,
  SUBTRACT_PRICE_OF_ONE_ITEM,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
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

const allReducers = combineReducers({
  productsData: addOrDeleteProductData,
  totalPrice: getTotalPrice,
  modifiedQuantity: getModifiedQuantity,
});

export default allReducers;
