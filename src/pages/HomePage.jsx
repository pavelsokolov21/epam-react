import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  onChangeSearchInput,
  setSearchBy,
  setSortBy,
  submitFilmValue,
  fetchFilms,
  isLoadingPage,
} from "../actions";
import {
  Header,
  Footer,
  Search,
  Films,
  Sort,
  SortButtons,
  Loading,
} from "../components";
import { countFilmsFound } from "../utils";
import {
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
            sortBy,
            searchBy,
            searchInputValue,
          )}
        />
      </Header>
      <Sort
        metaText={countFilmsFound(filmsData)}
      >
        {filmsData.length !== 0 && (
        <SortButtons
          sortBy={sortBy}
          onClick={toggleSortBy}
        />
        )}
      </Sort>
      <Films
        films={filmsData}
        onClick={() => isLoadingPage(true)}
      />
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  filmsData: getSortedFilms(state),
  searchInputValue: getSearchInputValue(state),
  searchBy: getSearchBy(state),
  sortBy: getSortBy(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSearchInput: (value) => dispatch(onChangeSearchInput(value)),
  toggleSearchBy: (type) => dispatch(setSearchBy(type)),
  toggleSortBy: (type) => dispatch(setSortBy(type)),
  fetchFilms: (sortBy) => dispatch(fetchFilms(sortBy)),
  submitFilmValue: (sortBy, searchBy, searchInputValue) => dispatch(
    submitFilmValue(sortBy, searchBy, searchInputValue),
  ),
  isLoadingPage: (status) => dispatch(isLoadingPage(status)),
});

HomePage.propTypes = {
  filmsData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    tagline: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    runtime: PropTypes.number,
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
