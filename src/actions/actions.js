import * as constants from "../constants/constants";
import { getMovieById } from "../services/services";
import { filterFilms, sortFilms } from "../common";

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

export const submitFilmValue = (filmsData, sortBy, searchBy, searchInputValue) => (
  (dispatch) => {
    const sortedFilms = sortFilms(filmsData, sortBy);
    const foundFilms = filterFilms(
      sortedFilms,
      searchBy,
      searchInputValue,
    );

    if (searchInputValue.length === 0) {
      dispatch(setFoundFilms(sortedFilms));
    } else {
      dispatch(setFoundFilms(foundFilms));
    }
  }
);

export const fetchFilmsDataSuccess = (films) => ({
  type: constants.LOADED_FILMS,
  payload: films,
});

export const setCurrentFilm = (film) => ({
  type: constants.SET_FILM,
  payload: film,
});

export const isLoadedPage = (status) => ({
  type: constants.IS_LOADED_PAGE,
  payload: status,
});

export const fetchFilm = (filmsData, id) => (dispatch) => {
  dispatch(isLoadedPage(false));
  getMovieById(id).then((filmById) => {
    let foundFilms = filterFilms(
      filmsData,
      "genres",
      filmById.genres[0],
    );
    foundFilms = foundFilms.filter(
      (film) => JSON.stringify(film) !== JSON.stringify(filmById),
    );
    dispatch(setCurrentFilm(filmById));
    dispatch(setFoundFilms(foundFilms));
    dispatch(isLoadedPage(true));
  });
};

export const goToHome = (filmsData, sortBy) => (dispatch) => {
  const sortedFilms = sortFilms(filmsData, sortBy);
  dispatch(setFoundFilms(sortedFilms));
};
