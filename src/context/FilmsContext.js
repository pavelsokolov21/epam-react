import { createContext } from "react";

const FilmsContext = createContext({
  films: [],
  foundFilms: [],
  searchBy: "title",
  searchInputValue: "",
});

export default FilmsContext;
