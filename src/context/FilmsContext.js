import { createContext } from "react";

const FilmsContext = createContext({
  filmsData: [],
  foundFilms: [],
  searchBy: "title",
  sortBy: "releaseDate",
  searchInputValue: "",
  currentFilm: {},
  isLoadedPage: false,
  searchBySwitcher: () => {},
  sortBySwitcher: () => {},
  fetchFilm: () => {},
  goToHome: () => {},
  fetchFilmsData: () => {},
  onChangeSearchInput: () => {},
  submitValueFromInput: () => {},
});

export default FilmsContext;
