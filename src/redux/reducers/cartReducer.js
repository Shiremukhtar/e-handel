import { ActionTypes } from "../constants/action-types";

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CART:
      return { ...state, cartItems: payload };
    default:
      return state;
  }
};