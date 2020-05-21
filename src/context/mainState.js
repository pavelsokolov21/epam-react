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

const MainState = (props) => {
  const initialState = {
    movies: [],
    searchBy: "title",
    searchInputValue: "",
  };
  const [state, dispatch] = useReducer(filmsReducer, initialState);

  const switchSearchByBtn = (e, buttonType) => {
    e.preventDefault();
    dispatch(searchBySwitcher(buttonType));
  };

  const filmsIsLoaded = (films) => {
    dispatch(isLoadedFilms(films));
  };

  const handleChangeInput = (value) => {
    dispatch(onChangeSearchInput(value));
  };

  const submitFilmValue = (e) => {
    e.preventDefault();
    dispatch(submitValueFromInput());
  };

  const { children } = props;
  return (
    <FilmsContext.Provider
      value={{
        movies: state.movies,
        searchBy: state.searchBy,
        searchInputValue: state.searchInputValue,
        searchBySwitch: switchSearchByBtn,
        onChangeSearchInput: handleChangeInput,
        submitValueFromInput: submitFilmValue,
        isLoadedFilms: filmsIsLoaded,
      }}
    >
      {children}
    </FilmsContext.Provider>
  );
};

MainState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainState;
