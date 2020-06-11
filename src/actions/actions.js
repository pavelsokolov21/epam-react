import {
  TOGGLE_SEARCH_BY,
  CHANGE_SEARCH_INPUT,
  SET_FOUND_FILMS,
  LOAD_FILMS_SUCCESS,
  SORT_BY_TYPE,
  SET_FILM,
  IS_LOADING,
} from "../constants";
// import { getMovieById, getMovieByParams } from "../services/services";
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
  (dispatch) => {
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
    if (searchInputValue.length === 0) {
      fetchFilmsFromDataBase(query, variables).then(({ data: { getFilms } }) => {
        dispatch(setFoundFilms(getFilms));
      });
    } else {
      fetchFilmsFromDataBase(query, variables).then(({ data: { getFilms } }) => {
        dispatch(setFoundFilms(getFilms));
      });
    }
  }
);

export const fetchFilmsDataSuccess = (films) => ({
  type: LOAD_FILMS_SUCCESS,
  payload: films,
});

export const fetchFilms = (sortBy) => (dispatch) => {
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
  fetchFilmsFromDataBase(query, variables).then(({ data: { getFilms } }) => {
    dispatch(fetchFilmsDataSuccess(getFilms));
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
  const query = `
    query {
      getFilm(id: ${id}) {
        id title release_date poster_path tagline runtime overview genres
      }
    }
  `;
  fetchFilmsFromDataBase(query, {}).then(({ data: { getFilm } }) => {
    const queryForAllFilm = `
      query GetFilms($filter: String) {
        getFilms(filter: $filter) {
          id title release_date poster_path genres
        }
      }
    `;
    const variable = {
      filter: getFilm.genres[0],
    };
    fetchFilmsFromDataBase(queryForAllFilm, variable).then(({ data: { getFilms } }) => {
      const dataWithoutCurrentFilm = getFilms.filter(({ id }) => id !== getFilm.id);
      dispatch(setFoundFilms(dataWithoutCurrentFilm));
    });
    dispatch(setCurrentFilm(getFilm));
    dispatch(isLoadingPage(false));
  });
};
