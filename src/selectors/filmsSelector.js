import { createSelector } from "reselect";
import { sortFilms, sortDescriptors } from "../utils";

const filmsDataSelector = (state) => state.get("filmsData");
const searchBySelector = (state) => state.get("searchBy");
const isLoadingSelector = (state) => state.get("isLoading");
const searchInputValueSelector = (state) => state.get("searchInputValue");
const currentFilmSelector = (state) => state.get("currentFilm");
const sortBySelector = (state) => state.get("sortBy");

export const getSortedFilms = createSelector(
  [sortBySelector, filmsDataSelector],
  (sortBy, foundFilms) => sortFilms(foundFilms, sortDescriptors(sortBy)),
);

export const getSearchBy = createSelector(
  searchBySelector,
  (searchBy) => searchBy,
);

export const getSortBy = createSelector(
  sortBySelector,
  (sortBy) => sortBy,
);

export const getIsLoading = createSelector(
  isLoadingSelector,
  (isLoading) => isLoading,
);

export const getSearchInputValue = createSelector(
  searchInputValueSelector,
  (searchInputValue) => searchInputValue,
);

export const getCurrentFilm = createSelector(
  currentFilmSelector,
  (currentFilm) => currentFilm,
);
