import {
  TOGGLE_SEARCH_BY,
  CHANGE_SEARCH_INPUT,
  SET_FOUND_FILMS,
  LOAD_FILMS_SUCCESS,
  SORT_BY_TYPE,
  SET_FILM,
  IS_LOADING,
} from "../constants";
import { getMovieById, getMovieByParams } from "../services/services";

export const isLoadingPage = (status) => ({
  type: IS_LOADING,
  payload: status,
});

export const setSearchBy = (type) => ({
  type: TOGGLE_SEARCH_BY,
  payload: type,
});

export const setSortBy = (type) => ({
  type: SORT_BY_TYPE,
  payload: type,
});

export const onChangeSearchInput = (value) => ({
  type: CHANGE_SEARCH_INPUT,
  payload: value,
});

export const setFoundFilms = (foundFilms) => ({
  type: SET_FOUND_FILMS,
  payload: foundFilms,
});

export const submitFilmValue = (sortBy, searchBy, searchInputValue) => (
  (dispatch) => {
    if (searchInputValue.length === 0) {
      const params = `searchBy=${searchBy}&sortBy=${sortBy}`;
      getMovieByParams(params).then(({ data }) => {
        dispatch(setFoundFilms(data));
      });
    } else {
      const params = `searchBy=${searchBy}&sortBy=${sortBy}&search=${searchInputValue}`;
      getMovieByParams(params).then(({ data }) => {
        dispatch(setFoundFilms(data));
      });
    }
  }
);

export const fetchFilmsDataSuccess = (films) => ({
  type: LOAD_FILMS_SUCCESS,
  payload: films,
});

export const fetchFilms = (sortBy) => (dispatch) => {
  const params = `sortBy=${sortBy}`;
  getMovieByParams(params).then(({ data }) => {
    dispatch(fetchFilmsDataSuccess(data));
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

export const fetchFilm = (id) => (dispatch) => {
  getMovieById(id).then((filmById) => {
    const params = "searchBy=genres";
    getMovieByParams(params).then(({ data }) => {
      const dataWithoutCurrentFilm = data.filter(({ id }) => id !== filmById.id);
      dispatch(setFoundFilms(dataWithoutCurrentFilm));
    });
    dispatch(setCurrentFilm(filmById));
    dispatch(isLoadingPage(false));
  });
};
