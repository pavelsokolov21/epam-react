import { createContext } from "react";

const FilmsContext = createContext({
  films: [],
  foundFilms: [],
  searchBy: "title",
  searchInputValue: "",
  searchBySwitcher: (buttonType) => {},
  onChangeSearchInput: (value) => {},
  submitValueFromInput: (e) => {},
});

export default FilmsContext;
