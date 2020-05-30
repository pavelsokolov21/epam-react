import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
import Films from "../components/Films";
import Sort from "../components/Sort";
import SortButtons from "../components/SortButtons";
import { getAllMovie, getMovieById } from "../services/services";
import { sortFilms, countFilmsFound, filterFilms } from "../common";

const HomePage = (props) => {
  const {
    filmsData,
    foundFilms,
    searchBy,
    sortBy,
    searchInputValue,
    onChangeSearchInput,
    searchBySwitcher,
    sortBySwitcher,
    fetchFilmsDataSuccess,
    submitFilmValue,
    getCurrentFilm,
  } = props;

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getAllMovie().then((films) => {
      const sortedFilms = sortFilms(films.data, sortBy);
      fetchFilmsDataSuccess(sortedFilms);
      setIsLoaded(true);
    });
  }, []);

  return (
    <>
      <Header
        component={(
          <Search
            searchBySwitcher={searchBySwitcher}
            searchBy={searchBy}
            inputValue={searchInputValue}
            onChangeInput={onChangeSearchInput}
            submitValue={submitFilmValue.bind(this, filmsData, sortBy, searchBy, searchInputValue)}
          />
        )}
      />
      <Sort
        optionalComponent={foundFilms.length !== 0 && (
          <SortButtons
            sortBy={sortBy}
            onClick={sortBySwitcher.bind(this, filmsData)}
          />
        )}
        metaText={countFilmsFound(foundFilms)}
        sortBy={sortBy}
      />
      <Films getCurrentFilm={getCurrentFilm.bind(this, filmsData)} isLoaded={isLoaded} films={foundFilms} />
      <Footer />
    </>
  );
};

const mapStateToProps = ({
  foundFilms,
  searchInputValue,
  searchBy,
  sortBy,
  filmsData,
}) => ({
  searchInputValue,
  searchBy,
  foundFilms,
  sortBy,
  filmsData,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSearchInput: (value) => dispatch(actions.onChangeSearchInput(value)),
  searchBySwitcher: (typeButton) => dispatch(actions.searchBySwitcher(typeButton)),
  sortBySwitcher: (films, typeSort) => {
    const sortedFilms = sortFilms(films, typeSort);
    dispatch(actions.sortBySwitcher(sortedFilms, typeSort));
  },
  fetchFilmsDataSuccess: (filmsData) => dispatch(actions.fetchFilmsDataSuccess(filmsData)),
  submitFilmValue: (filmsData, sortBy, searchBy, searchInputValue) => (
    dispatch(actions.submitFilmValue(filmsData, sortBy, searchBy, searchInputValue))
  ),
  getCurrentFilm: (filmsData, id) => dispatch(actions.fetchFilm(filmsData, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
