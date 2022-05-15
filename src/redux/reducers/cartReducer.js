import { ActionTypes } from "../constants/action-types";

const initialState = [];

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CART:
      return { ...state, cartItems: payload };
    case ActionTypes.CLEAR_CART:
      return { ...state, cartItems: [] };
    default:
      return state;
  }
};
