import { ActionTypes } from "../constants/action-types";

export const setCart = (cartItems) => {
  return {
    type: ActionTypes.SET_CART,
    payload: cartItems,
  };
};

export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
