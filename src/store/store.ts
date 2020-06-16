import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { filmsReducer } from "../reducers";

export const store = createStore(
  filmsReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);