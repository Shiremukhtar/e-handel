import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "./reducers/index";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

 export const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);
