import { combineReducers } from "redux";
import {ADD_TO_CART} from '../actions/actionsTypes';

const getProductData = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state , action.payload];
    default:
      return state;
  }
};

const allReducers = combineReducers({
  getProductData,
});

export default allReducers;
