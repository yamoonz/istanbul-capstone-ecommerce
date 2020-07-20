import { GET_ALL_PRODUCTS } from "../types";

export const getAllProducts = (data) => {
  return {
    type: GET_ALL_PRODUCTS,
    payload: data,
  };
};
