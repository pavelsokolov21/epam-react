import { createContext } from "react";

const FilmsContext = createContext({
  movies: [],
  foundFilms: [],
  searchBy: "title",
  searchInputValue: "",
  isLoadedFilms: false,
  searchBySwitcher: (buttonType) => {},
  onChangeSearchInput: (value) => {},
  submitValueFromInput: (e) => {},
});

export default FilmsContext;
