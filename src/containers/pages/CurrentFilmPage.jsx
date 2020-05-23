import React, { useContext } from "react";
import Header from "containers/Header";
import CurrentFilm from "components/CurrentFilm";
import SortSection from "containers/SortSection";
import FilmsContainer from "containers/FilmsContainer";
import FilmsContext from "context/FilmsContext";

const CurrentFilmPage = () => {
  const { foundFilms } = useContext(FilmsContext);

  const textFoundMovies = "default";
  return (
    <>
      <Header ContentComponent={CurrentFilm} />
      <SortSection films={foundFilms} text={textFoundMovies} />
      <FilmsContainer films={foundFilms} />
    </>
  );
};

export default CurrentFilmPage;
