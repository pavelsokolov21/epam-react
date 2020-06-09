import { createSelector } from "reselect";
import { sortFilms, sortDescriptors } from "../utils";

const filmsDataSelector = ({ filmsData }) => filmsData;
const foundFilmsSelector = ({ foundFilms }) => foundFilms;
const sortBySelector = ({ sortBy }) => sortBy;
const searchBySelector = ({ searchBy }) => searchBy;
const isLoadingSelector = ({ isLoading }) => isLoading;
const searchInputValueSelector = ({ searchInputValue }) => searchInputValue;
const currentFilmSelector = ({ currentFilm }) => currentFilm;

export const getSortBy = ({ sortBy }) => sortBy;

export const getFilmsData = createSelector(
  filmsDataSelector,
  (filmsData) => filmsData,
);

export const getSortedFilms = createSelector(
  [sortBySelector, foundFilmsSelector],
  (sortBy, foundFilms) => sortFilms(foundFilms, sortDescriptors(sortBy)),
);

export const getSearchBy = createSelector(
  searchBySelector,
  (searchBy) => searchBy,
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
