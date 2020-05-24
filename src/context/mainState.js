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
  setCurrentFilm,
} from "./reducers";
import { getAllMovie, getMovieById } from "../services/instaservices";
import { filterFilms, sortFilms } from "../common";

const MainState = (props) => {
  const initialState = {
    filmsData: [],
    foundFilms: [],
    searchBy: "title",
    sortBy: "releaseDate",
    searchInputValue: "",
    currentFilm: {},
  };
  const [state, dispatch] = useReducer(filmsReducer, initialState);

  useEffect(() => {
    getAllMovie().then((films) => {
      const sortedFilms = sortFilms(films.data, state.sortBy);
      dispatch(isLoadedFilms(sortedFilms));
    });
  }, []);

  const switchSearchBy = (buttonType) => {
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
    getMovieById(id).then((filmById) => {
      let foundFilms = filterFilms(
        state.filmsData,
        "genres",
        filmById.genres[0]
      );
      foundFilms = foundFilms.filter(
        (film) => JSON.stringify(film) !== JSON.stringify(filmById)
      );
      dispatch(setCurrentFilm(filmById));
      dispatch(setFoundFilms(foundFilms));
    });
  };

  const submitFilmValue = () => {
    const sortedFilms = sortFilms(state.filmsData, state.sortBy);
    const foundFilms = filterFilms(
      sortedFilms,
      state.searchBy,
      state.searchInputValue
    );

    if (state.searchInputValue.length === 0) {
      dispatch(setFoundFilms(sortedFilms));
    } else {
      dispatch(setFoundFilms(foundFilms));
    }
  };

  const setDefaultFilms = () => {
    const sortedFilms = sortFilms(state.filmsData, state.sortBy);
    dispatch(setFoundFilms(sortedFilms));
  };

  const { children } = props;
  const globalStateValue = {
    foundFilms: state.foundFilms,
    searchBy: state.searchBy,
    sortBy: state.sortBy,
    searchInputValue: state.searchInputValue,
    currentFilm: state.currentFilm,
    switchSearchBy,
    switchSortBy,
    sortFilmsByGenre,
    setDefaultFilms,
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
