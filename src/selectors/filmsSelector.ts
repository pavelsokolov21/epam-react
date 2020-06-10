import { createSelector } from "reselect";
import { sortFilms, sortDescriptors } from "../utils";
import {
  RootState, SearchType, SortType, Film,
} from "../types";

const filmsDataSelector = (state: RootState) => state.get("filmsData");
const searchBySelector = (state: RootState) => state.get("searchBy");
const isLoadingSelector = (state: RootState) => state.get("isLoading");
const searchInputValueSelector = (state: RootState) => state.get("searchInputValue");
const currentFilmSelector = (state: RootState) => state.get("currentFilm");
const sortBySelector = (state: RootState) => state.get("sortBy");

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
