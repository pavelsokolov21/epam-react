import { Map } from "immutable";

import {
  TOGGLE_SEARCH_BY,
  CHANGE_SEARCH_INPUT,
  SET_FOUND_FILMS,
  LOAD_FILMS_SUCCESS,
  SORT_BY_TYPE,
  SET_FILM,
  IS_LOADING,
} from "../constants";

export const initialState = Map({
  filmsData: [],
  searchBy: "title",
  sortBy: "release-date",
  searchInputValue: "",
  currentFilm: {},
  isLoading: true,
});

export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return state.update("isLoading", () => action.payload);
    case TOGGLE_SEARCH_BY:
      return state.update("searchBy", () => action.payload);
    case SORT_BY_TYPE:
      return state.update("sortBy", () => action.payload);
    case CHANGE_SEARCH_INPUT:
      return state.update("searchInputValue", () => action.payload);
    case SET_FOUND_FILMS:
      return state.update("filmsData", () => action.payload);
    case LOAD_FILMS_SUCCESS:
      return state.update("filmsData", () => action.payload);
    case SET_FILM:
      return state.update("currentFilm", () => action.payload);
    default:
      return state;
  }
};
