import * as constants from "../constants/constants";

export const searchBySwitcher = (typeSearch) => ({
  type: constants.SEARCH_BY_SWITCH,
  payload: typeSearch,
});

export const sortBySwitcher = (sortedFoundFilms, typeSort) => ({
  type: constants.SORT_BY_SWITCH,
  payload: { typeSort, sortedFoundFilms },
});

export const onChangeSearchInput = (value) => ({
  type: constants.CHANGE_SEARCH_INPUT,
  payload: value,
});

export const setFoundFilms = (foundFilms) => ({
  type: constants.SET_FOUND_FILMS,
  payload: foundFilms,
});

export const isLoadedFilms = (films) => ({
  type: constants.LOADED_FILMS,
  payload: films,
});

export const setCurrentFilm = (film) => ({
  type: constants.SET_FILM,
  payload: film,
});
