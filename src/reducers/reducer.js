import {
  TOGGLE_SEARCH_BY,
  CHANGE_SEARCH_INPUT,
  SET_FOUND_FILMS,
  LOAD_FILMS_SUCCESS,
  SORT_BY_TYPE,
  SET_FILM,
  IS_LOADING,
} from "../constants";

const initialState = {
  filmsData: [],
  foundFilms: [],
  searchBy: "title",
  sortBy: "release-date",
  searchInputValue: "",
  currentFilm: {},
  isLoading: true,
};

export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, isLoading: action.payload };
    case TOGGLE_SEARCH_BY:
      return { ...state, searchBy: action.payload };
    case SORT_BY_TYPE:
      return {
        ...state,
        sortBy: action.payload.type,
        foundFilms: action.payload.sortedFoundFilms,
      };
    case CHANGE_SEARCH_INPUT:
      return { ...state, searchInputValue: action.payload };
    case SET_FOUND_FILMS:
      return { ...state, foundFilms: action.payload };
    case LOAD_FILMS_SUCCESS:
      return {
        ...state,
        filmsData: action.payload,
        foundFilms: action.payload,
      };
    case SET_FILM:
      return { ...state, currentFilm: action.payload };
    default:
      return state;
  }
};
