import { combineReducers } from "redux";

import productsReducer from "./products";
import tokenReducer from "./token";
import userReducer from "./user";
import linksReducer from "./links";
import linksectionsReducer from "./linksections";

export default combineReducers({
  products: productsReducer,
  user: userReducer,
  token: tokenReducer,
  links: linksReducer,
  linksections: linksectionsReducer,
});
