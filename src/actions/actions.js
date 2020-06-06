import {
  TOGGLE_SEARCH_BY,
  CHANGE_SEARCH_INPUT,
  SET_FOUND_FILMS,
  LOAD_FILMS_SUCCESS,
  SORT_BY_TYPE,
  SET_FILM,
  IS_LOADING,
} from "../constants";
import { getAllMovie, getMovieById } from "../services/services";
import {
  filterFilms,
  sortFilms,
  sortDescriptors,
} from "../utils";

export const isLoadingPage = (status) => ({
  type: IS_LOADING,
  payload: status,
});

export const toggleSearchBy = (type) => ({
  type: TOGGLE_SEARCH_BY,
  payload: type,
});

export const toggleSortBy = (sortedFoundFilms, type) => ({
  type: SORT_BY_TYPE,
  payload: { type, sortedFoundFilms },
});

export const onChangeSearchInput = (value) => ({
  type: CHANGE_SEARCH_INPUT,
  payload: value,
});

export const setFoundFilms = (foundFilms) => ({
  type: SET_FOUND_FILMS,
  payload: foundFilms,
});

export const submitFilmValue = (filmsData, sortBy, searchBy, searchInputValue) => (
  (dispatch) => {
    const sortedFilms = sortFilms(filmsData, sortDescriptors(sortBy));
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
  type: LOAD_FILMS_SUCCESS,
  payload: films,
});

export const fetchFilms = (sortBy) => (dispatch) => {
  getAllMovie().then((films) => {
    const sortedFilms = sortFilms(films.data, sortDescriptors(sortBy));
    dispatch(fetchFilmsDataSuccess(sortedFilms));
    dispatch(isLoadingPage(false));
  }).catch((e) => {
    dispatch(isLoadingPage(false));
    throw new Error(e.message);
  });
};

export const setCurrentFilm = (film) => ({
  type: SET_FILM,
  payload: film,
});

export const fetchFilm = (filmsData, id) => (dispatch) => {
  dispatch(isLoadingPage(true));
  getMovieById(id).then((filmById) => {
    let foundFilms = filterFilms(
      filmsData,
      "genres",
      filmById.genres[0],
    );
    foundFilms = foundFilms.filter(
      (film) => film.id !== filmById.id,
    );
    dispatch(setCurrentFilm(filmById));
    dispatch(setFoundFilms(foundFilms));
    dispatch(isLoadingPage(false));
  });
};

export const goToHome = (filmsData, sortBy) => (dispatch) => {
  const sortedFilms = sortFilms(filmsData, sortDescriptors(sortBy));
  dispatch(setFoundFilms(sortedFilms));
};
