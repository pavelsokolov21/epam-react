import * as constants from "../constants/constants";

export const initialState = {
  filmsData: [],
  foundFilms: [],
  searchBy: "title",
  sortBy: "releaseDate",
  searchInputValue: "",
  currentFilm: {},
  isLoadedPage: false,
};

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.IS_LOADED_PAGE:
      return { ...state, isLoadedPage: action.payload };
    case constants.SEARCH_BY_SWITCH:
      return { ...state, searchBy: action.payload };
    case constants.SORT_BY_SWITCH:
      return {
        ...state,
        sortBy: action.payload.typeSort,
        foundFilms: action.payload.sortedFoundFilms,
      };
    case constants.CHANGE_SEARCH_INPUT:
      return { ...state, searchInputValue: action.payload };
    case constants.SET_FOUND_FILMS:
      return { ...state, foundFilms: action.payload };
    case constants.LOADED_FILMS:
      return {
        ...state,
        filmsData: action.payload,
        foundFilms: action.payload,
      };
    case constants.SET_FILM:
      return { ...state, currentFilm: action.payload };
    default:
      return state;
  }
};

export default filmsReducer;
