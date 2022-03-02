import { ActionTypes } from "../constants/action-types";

export const setCart = (cartItems) => {
  return {
    type: ActionTypes.SET_CART,
    payload: cartItems,
  };
};
