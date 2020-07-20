import { combineReducers } from "redux";
import { GET_ALL_PRODUCTS } from "../types";

const getAllProductsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};

const allReducers = combineReducers({
  getAllProductsReducer,
});

export default allReducers;
