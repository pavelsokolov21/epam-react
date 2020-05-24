/* eslint-disable comma-dangle */
import React, { useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import FilmsContext from "./FilmsContext";
import {
  filmsReducer,
  searchBySwitcher,
  sortBySwitcher,
  onChangeSearchInput,
  setFoundFilms,
  isLoadedFilms,
} from "./reducers";
import { getAllMovie, getMovieById } from "../services/instaservices";
import { parceToLineStr, filterFilms, sortFilms } from "../common";

const MainState = (props) => {
  const initialState = {
    filmsData: [],
    foundFilms: [],
    searchBy: "title",
    sortBy: "releaseDate",
    searchInputValue: "",
  };
  const [state, dispatch] = useReducer(filmsReducer, initialState);

  useEffect(() => {
    getAllMovie().then((films) => {
      const sortedFilms = sortFilms(films.data, state.sortBy);
      dispatch(isLoadedFilms(sortedFilms));
    });
  }, []);

  const switchSearchBy = (e, buttonType) => {
    e.preventDefault();
    dispatch(searchBySwitcher(buttonType));
  };

  const switchSortBy = (buttonType) => {
    const sortedFilms = sortFilms(state.foundFilms, buttonType);
    dispatch(sortBySwitcher(sortedFilms, buttonType));
  };

  const handleChangeInput = (value) => {
    dispatch(onChangeSearchInput(value));
  };

  const sortFilmsByGenre = (id) => {
    const currentFilm = getMovieById(id);
    const sortedFilms = filterFilms(state.filmsData, "genres");
  };

  const submitFilmValue = (e) => {
    e.preventDefault();
    const lowerCaseInputValue = parceToLineStr(state.searchInputValue);
    const sortedFilms = sortFilms(state.filmsData, state.sortBy);
    const foundFilms = filterFilms(
      sortedFilms,
      state.searchBy,
      lowerCaseInputValue
    );

    if (state.searchInputValue.length === 0) {
      dispatch(setFoundFilms(sortedFilms));
    } else {
      dispatch(setFoundFilms(foundFilms));
    }
  };

  const { children } = props;
  const globalStateValue = {
    foundFilms: state.foundFilms,
    searchBy: state.searchBy,
    sortBy: state.sortBy,
    searchInputValue: state.searchInputValue,
    switchSearchBy,
    switchSortBy,
    sortFilmsByGenre,
    onChangeSearchInput: handleChangeInput,
    submitValueFromInput: submitFilmValue,
  };
  return (
    <FilmsContext.Provider value={globalStateValue}>
      {children}
    </FilmsContext.Provider>
  );
};

MainState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainState;
