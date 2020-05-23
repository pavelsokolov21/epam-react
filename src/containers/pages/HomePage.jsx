import React, { useContext } from "react";
import Header from "containers/Header";
import SortSection from "containers/SortSection";
import FilmsContainer from "containers/FilmsContainer";
import SearchWrapper from "components/Search/SearchWrapper";
import SortButtonsContainer from "components/SortButtonsContainer";
import FilmsContext from "context/FilmsContext";

const HomePage = () => {
  const { foundFilms } = useContext(FilmsContext);

  let textFoundMovies = "";
  if (foundFilms.length === 1) {
    textFoundMovies = `${foundFilms.length} movie found`;
  } else {
    textFoundMovies = `${foundFilms.length} movies found`;
  }

  return (
    <>
      <Header ContentComponent={SearchWrapper} />
      <SortSection
        films={foundFilms}
        SortButtons={SortButtonsContainer}
        text={textFoundMovies}
      />
      <FilmsContainer films={foundFilms} />
    </>
  );
};

export default HomePage;
