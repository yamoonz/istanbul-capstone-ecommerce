import {
  ADD_TO_CART,
  PRODUCT_QUNATITY,
  DELETE_FROM_CART,
  MODIFY_QUANTITY,
} from "./actionsTypes";

export const addProductToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};

export const modifyProductQuantity = (data) => {
  return {
    type: MODIFY_QUANTITY,
    payload: data,
  };
};

export const deleteItemFromCartAction = (data) => {
  return {
    type: DELETE_FROM_CART,
    payload: data,
  };
};
export const addProductQunatity = (data) => {
  return {
    type: PRODUCT_QUNATITY,
    payload: data,
  };
};
