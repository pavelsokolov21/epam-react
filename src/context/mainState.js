/* eslint-disable comma-dangle */
import React, { useReducer } from "react";
import PropTypes from "prop-types";
import FilmsContext from "./FilmsContext";
import { filmsReducer, searchBySwitch, searchFilms } from "./reducers";

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
    dispatch(searchBySwitch(buttonType));
  };

  const { children } = props;
  return (
    <FilmsContext.Provider
      value={{
        searchBy: searchState.searchBy,
        searchInputValue: searchState.searchInputValue,
        searchBySwitch: switchSearchByBtn,
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
