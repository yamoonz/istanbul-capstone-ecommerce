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
} from "./actionsTypes";

export const addProductToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};

export const logIn = (user, admin) => {
  return { type: LOG_IN, user, admin };
};

export const logOut = () => {
  return { type: LOG_OUT };
};

export const logInError = (isFailed, isSucceeded = null) => {
  return { type: LOGIN_ERROR, isFailed, isSucceeded };
};

export const popUpStatus = (payload) => {
  return { type: SHOULD_POP_UP_CLOSE, payload };
};
const handleQuantitySubtraction = (data) => {
  const copyOfData = data.slice();
  for (let i = 0; i < copyOfData.length; i++) {
    const currentItemId = data[i].id;
    if (copyOfData[i].id === currentItemId) {
      copyOfData[i].quantity--;
    }
  }
  return copyOfData;
};

const handleQuantityAddition = (data) => {
  const copyOfData = data.slice();
  for (let i = 0; i < copyOfData.length; i++) {
    const currentItemId = data[i].id;
    if (copyOfData[i].id === currentItemId) {
      copyOfData[i].quantity++;
    }
  }
  return copyOfData;
};

export const increaseProductQuantity = (data) => {
  return {
    type: INCREASE_MODIFY_QUANTITY,
    payload: () => handleQuantityAddition(data),
  };
};

export const decreaseProductQuantity = (data) => {
  return {
    type: DECREASE_MODIFY_QUANTITY,
    payload: () => handleQuantitySubtraction(data),
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

export const sumTotalPrice = (productPrice, productQuantity) => {
  return {
    type: SUM_TOTAL_PRICE,
    payload: productPrice * productQuantity,
  };
};

export const addOneMoreItem = (allItemsTotalPrice, itemTotal) => {
  return {
    type: ADD_ONE_MORE_ITEM,
    payload: allItemsTotalPrice + itemTotal,
  };
};

export const removeOneMoreItem = (allItemsTotalPrice, itemTotal) => {
  return {
    type: REMOVE_ITEM,
    payload: allItemsTotalPrice - itemTotal,
  };
};
