import { combineReducers } from "redux";
import handleCart from "./handleCart";
import { productReducer, selectedProductsReducer } from "./productReducer";
import { cartReducer } from './cartReducer'

const rootReducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductsReducer,
  cartItem: cartReducer,
  handleCart

});

export default rootReducers;