/* eslint-disable comma-dangle */
import React, { useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import FilmsContext from "./FilmsContext";
import {
  filmsReducer,
  searchBySwitcher,
  sortBySwitcher,
  onChangeSearchInput,
  submitValueFromInput,
  isLoadedFilms,
} from "./reducers";
import { getAllMovie } from "../services/instaservices";
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

  const submitFilmValue = (e) => {
    e.preventDefault();
    const lowerCaseInputValue = parceToLineStr(state.searchInputValue);
    const sortedFilms = sortFilms(state.filmsData, state.sortBy);
    let foundFilms = [];

    if (state.searchBy === "title") {
      foundFilms = filterFilms(sortedFilms, "title", lowerCaseInputValue);
    } else {
      foundFilms = filterFilms(sortedFilms, "genres", lowerCaseInputValue);
    }

    if (state.searchInputValue.length === 0) {
      dispatch(submitValueFromInput(sortedFilms));
    } else {
      dispatch(submitValueFromInput(foundFilms));
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
