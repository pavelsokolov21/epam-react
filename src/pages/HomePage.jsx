import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  onChangeSearchInput,
  toggleSearchBy,
  toggleSortBy,
  submitFilmValue,
  fetchFilms,
  isLoadingPage,
} from "../actions";
import {
  Header, Footer, Search, Films, Sort, SortButtons, Loading,
} from "../components";
import { countFilmsFound } from "../utils";
import {
  getFilmsData,
  getSortedFilms,
  getSearchInputValue,
  getSearchBy,
  getSortBy,
  getIsLoading,
} from "../selectors";

const HomePage = (props) => {
  const {
    isLoading,
    filmsData,
    foundFilms,
    searchBy,
    sortBy,
    searchInputValue,
    onChangeSearchInput,
    toggleSearchBy,
    toggleSortBy,
    fetchFilms,
    submitFilmValue,
    isLoadingPage,
  } = props;

  useEffect(() => {
    fetchFilms(sortBy);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header>
        <Search
          searchBySwitcher={toggleSearchBy}
          searchBy={searchBy}
          inputValue={searchInputValue}
          onChangeInput={onChangeSearchInput}
          submitValue={() => submitFilmValue(
            filmsData,
            sortBy,
            searchBy,
            searchInputValue,
          )}
        />
      </Header>
      <Sort
        metaText={countFilmsFound(foundFilms)}
      >
        {foundFilms.length !== 0 && (
        <SortButtons
          sortBy={sortBy}
          onClick={toggleSortBy}
        />
        )}
      </Sort>
      <Films
        films={foundFilms}
        onClick={() => isLoadingPage(true)}
      />
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  foundFilms: getSortedFilms(state),
  filmsData: getFilmsData(state),
  searchInputValue: getSearchInputValue(state),
  searchBy: getSearchBy(state),
  sortBy: getSortBy(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSearchInput: (value) => dispatch(onChangeSearchInput(value)),
  toggleSearchBy: (type) => dispatch(toggleSearchBy(type)),
  toggleSortBy: (type) => {
    dispatch(toggleSortBy(type));
  },
  fetchFilms: (sortBy) => dispatch(fetchFilms(sortBy)),
  submitFilmValue: (filmsData, sortBy, searchBy, searchInputValue) => dispatch(
    submitFilmValue(filmsData, sortBy, searchBy, searchInputValue),
  ),
  isLoadingPage: (status) => dispatch(isLoadingPage(status)),
});

HomePage.propTypes = {
  filmsData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    budget: PropTypes.number.isRequired,
    revenue: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    runtime: PropTypes.number.isRequired,
  })).isRequired,
  foundFilms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    budget: PropTypes.number.isRequired,
    revenue: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    runtime: PropTypes.number.isRequired,
  })).isRequired,
  searchBy: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
  searchInputValue: PropTypes.string.isRequired,
  onChangeSearchInput: PropTypes.func.isRequired,
  toggleSearchBy: PropTypes.func.isRequired,
  toggleSortBy: PropTypes.func.isRequired,
  fetchFilms: PropTypes.func.isRequired,
  submitFilmValue: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isLoadingPage: PropTypes.func.isRequired,
};

export const ConnectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);
