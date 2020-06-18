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
import {
  Film, SearchType, SortType, State,
} from "../types";
import { fetchFilmsFromDataBase } from "../services/services";

interface Id {
  id: number;
}

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
): ThunkAction<void, State, unknown, Action<string>> => (
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

export const fetchFilmsDataSuccess = (films: Film[]) => ({
  type: LOAD_FILMS_SUCCESS,
  payload: films,
});

export const fetchFilms = (sortBy: SortType): ThunkAction<void, State, unknown, Action<string>> => (
  async (dispatch) => {
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
  }
);

export const setCurrentFilm = (film: Film) => ({
  type: SET_FILM,
  payload: film,
});

export const fetchFilm = (id: number): ThunkAction<void, State, unknown, Action<string>> => (
  async (dispatch) => {
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

      const dataWithoutCurrentFilm = getFilmsByFilter.filter(({ id }: Id) => id !== getFilm.id);
      dispatch(setCurrentFilm(getFilm));
      dispatch(setFoundFilms(dataWithoutCurrentFilm));
      dispatch(isLoadingPage(false));
    } catch (e) {
      dispatch(isLoadingPage(false));
      throw new Error(e.message);
    }
  }
);

export type Actions = ReturnType<typeof isLoadingPage>
  | ReturnType<typeof setSearchBy>
  | ReturnType<typeof setSortBy>
  | ReturnType<typeof onChangeSearchInput>
  | ReturnType<typeof setFoundFilms>
  | ReturnType<typeof fetchFilmsDataSuccess>
  | ReturnType<typeof setCurrentFilm>;
