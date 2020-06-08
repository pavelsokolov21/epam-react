import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  onChangeSearchInput,
  toggleSearchBy,
  toggleSortBy,
  submitFilmValue,
  fetchFilms,
} from "../actions";
import {
  Header, Footer, Search, Films, Sort, SortButtons, Loading,
} from "../components";
import { sortFilms, countFilmsFound, sortDescriptors } from "../utils";

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
          films={filmsData}
          sortBy={sortBy}
          onClick={toggleSortBy}
        />
        )}
      </Sort>
      <Films
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
  isLoading,
}) => ({
  searchInputValue,
  searchBy,
  foundFilms,
  sortBy,
  filmsData,
  isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSearchInput: (value) => dispatch(onChangeSearchInput(value)),
  toggleSearchBy: (type) => dispatch(toggleSearchBy(type)),
  toggleSortBy: (films, type) => {
    const sortedFilms = sortFilms(films, sortDescriptors(type));
    dispatch(toggleSortBy(sortedFilms, type));
  },
  fetchFilms: (sortBy) => dispatch(fetchFilms(sortBy)),
  submitFilmValue: (filmsData, sortBy, searchBy, searchInputValue) => dispatch(
    submitFilmValue(filmsData, sortBy, searchBy, searchInputValue),
  ),
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
};

export const ConnectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);
