import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
import Films from "../components/Films";
import Sort from "../components/Sort";
import SortButtons from "../components/SortButtons";
import { getAllMovie } from "../services/services";
import { sortFilms, countFilmsFound } from "../common";

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
  } = props;

  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setError] = useState(null);

  useEffect(() => {
    getAllMovie().then((films) => {
      const sortedFilms = sortFilms(films.data, sortBy);
      fetchFilmsDataSuccess(sortedFilms);
      setIsLoaded(true);
    }, (error) => {
      setIsLoaded(true);
      setError(error);
    });
  }, []);

  if (isError) {
    return (
      <div>
        Error:
        {" "}
        {isError.message}
      </div>
    );
  }

  return (
    <>
      <Header
        component={(
          <Search
            searchBySwitcher={searchBySwitcher}
            searchBy={searchBy}
            inputValue={searchInputValue}
            onChangeInput={onChangeSearchInput}
            submitValue={submitFilmValue.bind(
              this,
              filmsData,
              sortBy,
              searchBy,
              searchInputValue,
            )}
          />
        )}
      />
      <Sort
        optionalComponent={
          foundFilms.length !== 0 && (
            <SortButtons
              sortBy={sortBy}
              onClick={sortBySwitcher.bind(this, filmsData)}
            />
          )
        }
        metaText={countFilmsFound(foundFilms)}
        sortBy={sortBy}
      />
      <Films
        isLoaded={isLoaded}
        films={foundFilms}
      />
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
  submitFilmValue: (filmsData, sortBy, searchBy, searchInputValue) => dispatch(
    actions.submitFilmValue(filmsData, sortBy, searchBy, searchInputValue),
  ),
  getCurrentFilm: (filmsData, id) => dispatch(actions.fetchFilm(filmsData, id)),
});

HomePage.propTypes = {
  filmsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  foundFilms: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchBy: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
  searchInputValue: PropTypes.string.isRequired,
  onChangeSearchInput: PropTypes.func.isRequired,
  searchBySwitcher: PropTypes.func.isRequired,
  sortBySwitcher: PropTypes.func.isRequired,
  fetchFilmsDataSuccess: PropTypes.func.isRequired,
  submitFilmValue: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
