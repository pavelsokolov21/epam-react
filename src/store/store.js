import { createStore } from "redux";
import filmsReducer from "../reducers/reducer";

const store = createStore(filmsReducer);

export default store;
