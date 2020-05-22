/* eslint-disable comma-dangle */
import React, { useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import FilmsContext from "./FilmsContext";
import {
  filmsReducer,
  searchBySwitcher,
  onChangeSearchInput,
  submitValueFromInput,
  isLoadedFilms,
} from "./reducers";
import { getAllMovie } from "../services/instaservices";
import { parceToLineStr, filterFilms } from "../common";

const MainState = (props) => {
  const initialState = {
    filmsData: [],
    foundFilms: [],
    searchBy: "title",
    searchInputValue: "",
  };
  const [state, dispatch] = useReducer(filmsReducer, initialState);

  useEffect(() => {
    getAllMovie().then((films) => {
      dispatch(isLoadedFilms(films.data));
    });
  }, []);

  const switchSearchByBtn = (e, buttonType) => {
    e.preventDefault();
    dispatch(searchBySwitcher(buttonType));
  };

  const handleChangeInput = (value) => {
    dispatch(onChangeSearchInput(value));
  };

  const submitFilmValue = (e) => {
    e.preventDefault();
    const lowerCaseInputValue = parceToLineStr(state.searchInputValue);
    let foundFilms = [];

    if (state.searchBy === "title") {
      foundFilms = filterFilms(state.filmsData, "title", lowerCaseInputValue);
    } else {
      foundFilms = filterFilms(state.filmsData, "genres", lowerCaseInputValue);
    }

    if (state.searchInputValue.length === 0) {
      dispatch(submitValueFromInput(state.filmsData));
    } else {
      dispatch(submitValueFromInput(foundFilms));
    }
  };

  const { children } = props;
  const globalStateValue = {
    foundFilms: state.foundFilms,
    searchBy: state.searchBy,
    searchInputValue: state.searchInputValue,
    searchBySwitch: switchSearchByBtn,
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
