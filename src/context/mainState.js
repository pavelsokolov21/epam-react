/* eslint-disable comma-dangle */
import React, { useReducer } from "react";
import PropTypes from "prop-types";
import FilmsContext from "./FilmsContext";
import {
  filmsReducer,
  searchBySwitcher,
  onChangeSearchInput,
  submitValueFromInput,
} from "./reducers";

const MainState = (props) => {
  const initialStateForSearch = {
    searchBy: "title",
    searchInputValue: "",
  };
  const [searchState, dispatch] = useReducer(
    filmsReducer,
    initialStateForSearch
  );

  const switchSearchByBtn = (buttonType) => {
    dispatch(searchBySwitcher(buttonType));
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
        searchBy: searchState.searchBy,
        searchInputValue: searchState.searchInputValue,
        searchBySwitch: switchSearchByBtn,
        onChangeSearchInput: handleChangeInput,
        submitValueFromInput: submitFilmValue,
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
