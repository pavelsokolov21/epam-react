import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchFilm, isLoadingPage } from "../actions";
import {
  Header,
  Sort,
  Films,
  Loading,
  FilmInfo,
  Footer,
} from "../components";
import {
  getSortedFilms,
  getCurrentFilm,
  getIsLoading,
} from "../selectors";

const CurrentFilmPage = (props) => {
  const {
    filmsData,
    currentFilm,
    isLoading,
    fetchFilm,
    isLoadingPage,
  } = props;

  const { id } = useParams();
  useEffect(() => {
    fetchFilm(id);
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  const sortByText = `Sorted by ${currentFilm.genres[0]} genre`;
  return (
    <>
      <Header>
        <FilmInfo
          aboutFilm={currentFilm}
        />
      </Header>
      <Sort metaText={sortByText} />
      <Films
        onClick={() => isLoadingPage(true)}
        films={filmsData}
      />
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  filmsData: getSortedFilms(state),
  currentFilm: getCurrentFilm(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchFilm: (id) => dispatch(fetchFilm(id)),
  isLoadingPage: (status) => dispatch(isLoadingPage(status)),
});

CurrentFilmPage.propTypes = {
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
  currentFilm: PropTypes.shape({
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
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchFilm: PropTypes.func.isRequired,
  isLoadingPage: PropTypes.func.isRequired,
};

export const ConnectedCurrentFilmPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrentFilmPage);
