export const SEARCH_BY_SWITCH = "SEARCH_BY_SWITCH";
export const CHANGE_SEARCH_INPUT = "CHANGE_SEARCH_INPUT";
export const SET_FOUND_FILMS = "SET_FOUND_FILMS";
export const LOADED_FILMS = "LOADED_FILMS";
export const SORT_BY_SWITCH = "SORT_BY_SWITCH";
export const SET_FILM = "SET_FILM";

export const searchBySwitcher = (typeSearch) => ({
  type: SEARCH_BY_SWITCH,
  payload: typeSearch,
});

export const sortBySwitcher = (sortedFoundFilms, typeSort) => ({
  type: SORT_BY_SWITCH,
  payload: { typeSort, sortedFoundFilms },
});

export const onChangeSearchInput = (value) => ({
  type: CHANGE_SEARCH_INPUT,
  payload: value,
});

export const setFoundFilms = (foundFilms) => ({
  type: SET_FOUND_FILMS,
  payload: foundFilms,
});

export const isLoadedFilms = (films) => ({
  type: LOADED_FILMS,
  payload: films,
});

export const setCurrentFilm = (film) => ({
  type: SET_FILM,
  payload: film,
});

export const filmsReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_BY_SWITCH:
      return { ...state, searchBy: action.payload };
    case SORT_BY_SWITCH:
      return {
        ...state,
        sortBy: action.payload.typeSort,
        foundFilms: action.payload.sortedFoundFilms,
      };
    case CHANGE_SEARCH_INPUT:
      return { ...state, searchInputValue: action.payload };
    case SET_FOUND_FILMS:
      return { ...state, foundFilms: action.payload };
    case LOADED_FILMS:
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
