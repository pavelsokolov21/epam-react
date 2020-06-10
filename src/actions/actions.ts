import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
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
import {
  Film, SearchType, SortType, RootState,
} from "../types";

export const isLoadingPage = (status: boolean) => ({
  type: IS_LOADING,
  payload: status,
});

export const setSearchBy = (type: SearchType) => ({
  type: TOGGLE_SEARCH_BY,
  payload: type,
});

export const setSortBy = (type: SortType) => ({
  type: SORT_BY_TYPE,
  payload: type,
});

export const onChangeSearchInput = (value: string) => ({
  type: CHANGE_SEARCH_INPUT,
  payload: value,
});

export const setFoundFilms = (foundFilms: Film[]) => ({
  type: SET_FOUND_FILMS,
  payload: foundFilms,
});

export const submitFilmValue = (
  sortBy: SortType,
  searchBy: SearchType,
  searchInputValue: string,
): ThunkAction<void, RootState, unknown, Action<string>> => (
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

export const fetchFilmsDataSuccess = (films: Film[]) => ({
  type: LOAD_FILMS_SUCCESS,
  payload: films,
});

export const fetchFilms = (sortBy: SortType): ThunkAction<void, RootState, unknown, Action<string>> => (
  (dispatch) => {
    const params = `sortBy=${sortBy}`;
    getMovieByParams(params).then(({ data }) => {
      dispatch(fetchFilmsDataSuccess(data));
      dispatch(isLoadingPage(false));
    }).catch((e) => {
      dispatch(isLoadingPage(false));
      throw new Error(e.message);
    });
  }
);

export const setCurrentFilm = (film: Film) => ({
  type: SET_FILM,
  payload: film,
});

export const fetchFilm = (id: number): ThunkAction<void, RootState, unknown, Action<string>> => (
  (dispatch) => {
    getMovieById(id).then((filmById) => {
      const params = "searchBy=genres";
      getMovieByParams(params).then(({ data }) => {
        interface Id {
          id: number
        }
        const dataWithoutCurrentFilm = data.filter(({ id }: Id) => id !== filmById.id);
        dispatch(setFoundFilms(dataWithoutCurrentFilm));
      });
      dispatch(setCurrentFilm(filmById));
      dispatch(isLoadingPage(false));
    });
  }
);
