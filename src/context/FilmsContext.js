import { createContext } from "react";

const FilmsContext = createContext({
  filmsData: [],
  foundFilms: [],
  searchBy: "title",
  sortBy: "releaseDate",
  searchInputValue: "",
  currentFilm: {},
  switchSearchBy: (buttonType) => {},
  switchSortBy: (buttonType) => {},
  onChangeSearchInput: (value) => {},
  submitValueFromInput: () => {},
  setDefaultFilms: () => {},
  sortFilmsByGenre: () => {},
});

export default FilmsContext;
