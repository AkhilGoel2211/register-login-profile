import {createStore, applyMiddleware} from "redux";

// TODO: Check if configureStore works in place of createStore and what changes would be required for implementation

import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
