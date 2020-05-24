import React, { useState, useEffect, useContext } from "react";
import Header from "containers/Header";
import CurrentFilm from "components/CurrentFilm";
import SortSection from "containers/SortSection";
import FilmsContainer from "containers/FilmsContainer";
import FilmsContext from "context/FilmsContext";

const CurrentFilmPage = () => {
  const { foundFilms, currentFilm } = useContext(FilmsContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (Object.keys(currentFilm).length !== 0) {
      setIsLoaded(true);
    }
  }, [currentFilm]);

  let textFoundMovies;
  if (isLoaded) {
    textFoundMovies = `Films by ${currentFilm.genres[0]} genre`;
  } else {
    textFoundMovies = "Loading...";
  }
  return (
    <>
      <Header ContentComponent={CurrentFilm} />
      <SortSection films={foundFilms} text={textFoundMovies} />
      <FilmsContainer films={foundFilms} />
    </>
  );
};

export default CurrentFilmPage;
