import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import Loading from "../components/Loading";
import AboutFilm from "../components/AboutFilm";
import Header from "../components/Header";
import Sort from "../components/Sort";
import Films from "../components/Films";
import Footer from "../components/Footer";

const CurrentFilmPage = (props) => {
  const {
    filmsData,
    foundFilms,
    currentFilm,
    sortBy,
    goToHome,
    isLoadedPage,
    getCurrentFilm,
  } = props;

  if (!isLoadedPage) {
    return <Loading />;
  }

  const sortByText = `Sorted by ${currentFilm.genres[0]} genre`;
  return (
    <>
      <Header component={(
        <AboutFilm
          onClick={goToHome.bind(this, filmsData, sortBy)}
          aboutFilm={currentFilm}
        />
        )}
      />
      <Sort metaText={sortByText} />
      <Films getCurrentFilm={getCurrentFilm.bind(this, filmsData)} isLoaded={isLoadedPage} films={foundFilms} />
      <Footer />
    </>
  );
};

const mapStateToProps = ({
  filmsData, foundFilms, currentFilm, sortBy, isLoadedPage,
}) => ({
  filmsData,
  foundFilms,
  currentFilm,
  sortBy,
  isLoadedPage,
});

const mapDispatchToProps = (dispatch) => ({
  goToHome: (filmsData, sortBy) => dispatch(actions.goToHome(filmsData, sortBy)),
  getCurrentFilm: (filmsData, id) => dispatch(actions.fetchFilm(filmsData, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentFilmPage);
