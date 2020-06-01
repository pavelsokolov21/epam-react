import React, { useContext } from "react";
import FilmsContext from "../context/FilmsContext";
import Loading from "../components/Loading";
import AboutFilm from "../components/AboutFilm";
import Header from "../components/Header";
import Sort from "../components/Sort";
import Films from "../components/Films";
import Footer from "../components/Footer";

const CurrentFilmPage = () => {
  const {
    foundFilms,
    currentFilm,
    goToHome,
    isLoadedPage,
    fetchFilm,
  } = useContext(FilmsContext);

  if (!isLoadedPage) {
    return <Loading />;
  }

  const sortByText = `Sorted by ${currentFilm.genres[0]} genre`;
  return (
    <>
      <Header
        component={(
          <AboutFilm
            onClick={goToHome}
            aboutFilm={currentFilm}
          />
        )}
      />
      <Sort metaText={sortByText} />
      <Films
        getCurrentFilm={fetchFilm}
        isLoaded={isLoadedPage}
        films={foundFilms}
      />
      <Footer />
    </>
  );
};

export default CurrentFilmPage;
