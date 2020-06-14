import {
  TOGGLE_SEARCH_BY,
  CHANGE_SEARCH_INPUT,
  SET_FOUND_FILMS,
  LOAD_FILMS_SUCCESS,
  SORT_BY_TYPE,
  SET_FILM,
  IS_LOADING,
} from "../constants";
import { fetchFilmsFromDataBase } from "../services/services";

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
  async (dispatch) => {
    try {
      const query = `
        query GetFilms(
          $searchBy: String,
          $sortBy: String,
          $search: String
          ) {
          getFilms(
            searchBy: $searchBy,
            sortBy: $sortBy,
            search: $search
          ) {
            id title release_date poster_path genres vote_average
          }
        }
      `;
      const variables = {
        searchBy,
        sortBy,
        search: searchInputValue,
      };
      const { data: { getFilms } } = await fetchFilmsFromDataBase(query, variables);
      dispatch(setFoundFilms(getFilms));
    } catch (e) {
      dispatch(isLoadingPage(false));
      throw new Error(e.message);
    }
  }
);

export const fetchFilmsDataSuccess = (films) => ({
  type: LOAD_FILMS_SUCCESS,
  payload: films,
});

export const fetchFilms = (sortBy) => async (dispatch) => {
  try {
    const query = `
      query GetFilms($sortBy: String) {
        getFilms(sortBy: $sortBy) {
          id title release_date poster_path genres vote_average
        }
      }
    `;
    const variables = {
      sortBy,
    };
    const { data: { getFilms } } = await fetchFilmsFromDataBase(query, variables);
    dispatch(fetchFilmsDataSuccess(getFilms));
    dispatch(isLoadingPage(false));
  } catch (e) {
    dispatch(isLoadingPage(false));
    throw new Error(e.message);
  }
};

export const setCurrentFilm = (film) => ({
  type: SET_FILM,
  payload: film,
});

export const fetchFilm = (id) => async (dispatch) => {
  try {
    const query = `
      query {
        getFilm(id: "${id}") {
          id title release_date poster_path tagline runtime overview genres
        }
      }
    `;
    const queryForAllFilm = `
      query GetFilmsByFilter($filter: String) {
        getFilmsByFilter(filter: $filter) {
          id title release_date poster_path genres vote_average
        }
      }
    `;
    const { data: { getFilm } } = await fetchFilmsFromDataBase(query, {});

    const [genre = ""] = getFilm.genres;
    const variable = {
      filter: genre,
    };
    const { data: { getFilmsByFilter } } = await fetchFilmsFromDataBase(queryForAllFilm, variable);

    const dataWithoutCurrentFilm = getFilmsByFilter.filter(({ id }) => id !== getFilm.id);
    dispatch(setCurrentFilm(getFilm));
    dispatch(setFoundFilms(dataWithoutCurrentFilm));
    dispatch(isLoadingPage(false));
  } catch (e) {
    dispatch(isLoadingPage(false));
    throw new Error(e.message);
  }
};
