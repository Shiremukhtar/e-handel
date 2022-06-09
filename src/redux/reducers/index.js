import { combineReducers } from "redux";
import handleCart from "./handleCart";
import { productReducer, selectedProductsReducer } from "./productReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["handleCart", "productReducer", "selectedProductsReducer"]
}

const rootReducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductsReducer,
  // cartItem: cartReducer,
  handleCart

});

export default persistReducer(persistConfig, rootReducers);