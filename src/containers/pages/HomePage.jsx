import React, { useContext } from "react";
import Header from "containers/Header";
import SortSection from "containers/SortSection";
import Films from "containers/Films";
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
      <Films films={foundFilms} />
    </>
  );
};

export default HomePage;
