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
} from "./actionsTypes";

// Adding items to the shopping cart with the selected quantity
export const addProductToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};

// This function subtract one from the quantity which the user added to the shopping cart.
const handleQuantitySubtraction = (data) => {
  const copyOfData = data.slice();
  for (let i = 0; i < copyOfData.length; i++) {
    const currentItemId = data[i].id;
    if (copyOfData[i].id === currentItemId) {
      if (copyOfData[i].quantity >= 1) {
        copyOfData[i].quantity--;
      }
    }
  }
  return copyOfData;
};

// This function add one to the quantity which the user added to the shopping cart.
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

// This action for handleQuantityAddition function
export const increaseProductQuantity = (data) => {
  return {
    type: INCREASE_QUANTITY,
    payload: () => handleQuantityAddition(data),
  };
};

// This action for handleQuantitySubtraction function
export const decreaseProductQuantity = (data) => {
  return {
    type: DECREASE_QUANTITY,
    payload: () => handleQuantitySubtraction(data),
  };
};

// Deleting the whole item with its quantity from the shopping cart
export const deleteItemFromCart = (data) => {
  return {
    type: DELETE_FROM_CART,
    payload: data,
  };
};

// Calculating the total price of all items in the shopping cart
export const sumTotalPrice = (productPrice, productQuantity) => {
  return {
    type: SUM_TOTAL_PRICE,
    payload: productPrice * productQuantity,
  };
};

// Adding the price of one item to the total price
export const addPriceOfOneItem = (allItemsTotalPrice, itemTotalPrice) => {
  return {
    type: ADD_PRICE_OF_ONE_ITEM,
    payload: allItemsTotalPrice + itemTotalPrice,
  };
};

// Subtract the price of one item to the total price
export const subtractPriceOfOneItem = (allItemsTotalPrice, itemTotalPrice) => {
  return {
    type: SUBTRACT_PRICE_OF_ONE_ITEM,
    payload: allItemsTotalPrice - itemTotalPrice,
  };
};
export const logIn = (user, admin) => {
  return { type: LOG_IN, user, admin };
};

export const logOut = () => {
  return { type: LOG_OUT };
};

export const logInError = (payload) => {
  return { type: LOGIN_ERROR, payload };
};

export const popUpStatus = (payload) => {
  return { type: SHOULD_POP_UP_CLOSE, payload };
};
