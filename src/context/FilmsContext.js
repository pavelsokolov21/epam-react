import { createContext } from "react";

const FilmsContext = createContext({
  filmsData: [],
  foundFilms: [],
  searchBy: "title",
  sortBy: "releaseDate",
  searchInputValue: "",
  switchSearchBy: (buttonType) => {},
  switchSortBy: (buttonType) => {},
  onChangeSearchInput: (value) => {},
  submitValueFromInput: (e) => {},
});

export default FilmsContext;
