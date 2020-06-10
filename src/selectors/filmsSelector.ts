import { createSelector } from "reselect";
import { sortFilms, sortDescriptors } from "../utils";
import {
  SearchType, SortType, Film,
} from "../types";
import { FilmsReducerType } from "../reducers";

const filmsDataSelector = (state: FilmsReducerType) => state.get("filmsData");
const searchBySelector = (state: FilmsReducerType) => state.get("searchBy");
const isLoadingSelector = (state: FilmsReducerType) => state.get("isLoading");
const searchInputValueSelector = (state: FilmsReducerType) => state.get("searchInputValue");
const currentFilmSelector = (state: FilmsReducerType) => state.get("currentFilm");
const sortBySelector = (state: FilmsReducerType) => state.get("sortBy");

export const getSortedFilms = createSelector(
  [sortBySelector, filmsDataSelector],
  (sortBy: SortType, foundFilms: Film[]) => sortFilms(foundFilms, sortDescriptors(sortBy)),
);

export const getSearchBy = createSelector(
  searchBySelector,
  (searchBy: SearchType) => searchBy,
);

export const getSortBy = createSelector(
  sortBySelector,
  (sortBy: SortType) => sortBy,
);

export const getIsLoading = createSelector(
  isLoadingSelector,
  (isLoading: boolean) => isLoading,
);

export const getSearchInputValue = createSelector(
  searchInputValueSelector,
  (searchInputValue: string) => searchInputValue,
);

export const getCurrentFilm = createSelector(
  currentFilmSelector,
  (currentFilm: Film) => currentFilm,
);
