import {
  ADD_TO_CART,
  PRODUCT_QUNATITY,
  DELETE_FROM_CART,
  MODIFY_QUANTITY,
  SUM_TOTAL_PRICE,
  ADD_ONE_MORE_ITEM,
  REMOVE_ONE_MORE_ITEM,
  QUANTITY_IN_SINGLE_PRODUCT,
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

export const setQuantityInSingleProduct = (data) => {
  return {
    type: QUANTITY_IN_SINGLE_PRODUCT,
    payload: data,
  };
};

export const deleteItemFromCartAction = (data) => {
  return {
    type: DELETE_FROM_CART,
    payload: data,
  };
};

export const sumTotalPrice = (data) => {
  return {
    type: SUM_TOTAL_PRICE,
    payload: data,
  };
};

export const addOneMoreItem = (data) => {
  return {
    type: ADD_ONE_MORE_ITEM,
    payload: data,
  };
};

export const removeOneMoreItem = (data) => {
  return {
    type: REMOVE_ONE_MORE_ITEM,
    payload: data,
  };
};

export const addProductQunatity = (data) => {
  return {
    type: PRODUCT_QUNATITY,
    payload: data,
  };
};
