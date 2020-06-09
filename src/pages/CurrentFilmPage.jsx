import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { goToHome, fetchFilm } from "../actions";
import {
  Header, Sort, Films, Loading, FilmInfo, Footer,
} from "../components";
import {
  getFilmsData,
  getSortedFilms,
  getCurrentFilm,
  getSortBy,

  getIsLoading,
} from "../selectors";

const CurrentFilmPage = (props) => {
  const {
    filmsData,
    foundFilms,
    currentFilm,
    sortBy,
    goToHome,
    isLoading,
    fetchFilm,
  } = props;

  const { id } = useParams();
  useEffect(() => {
    fetchFilm(filmsData, id);
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  const sortByText = `Sorted by ${currentFilm.genres[0]} genre`;
  return (
    <>
      <Header>
        <FilmInfo
          onClick={() => goToHome(filmsData, sortBy)}
          aboutFilm={currentFilm}
        />
      </Header>
      <Sort metaText={sortByText} />
      <Films films={foundFilms} />
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  filmsData: getFilmsData(state),
  foundFilms: getSortedFilms(state),
  currentFilm: getCurrentFilm(state),
  sortBy: getSortBy(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  goToHome: (filmsData, sortBy) => dispatch(goToHome(filmsData, sortBy)),
  fetchFilm: (filmsData, id) => dispatch(fetchFilm(filmsData, id)),
});

CurrentFilmPage.propTypes = {
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
  currentFilm: PropTypes.shape({
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
  }).isRequired,
  sortBy: PropTypes.string.isRequired,
  goToHome: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchFilm: PropTypes.func.isRequired,
};

export const ConnectedCurrentFilmPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrentFilmPage);
