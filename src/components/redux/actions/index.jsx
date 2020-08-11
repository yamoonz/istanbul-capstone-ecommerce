import { ADD_TO_CART } from "./actionsTypes";

export const addProductToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};
