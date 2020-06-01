import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
import Films from "../components/Films";
import Sort from "../components/Sort";
import SortButtons from "../components/SortButtons";
import { getAllMovie } from "../services/services";
import { sortFilms, countFilmsFound } from "../common";
import FilmsContext from "../context/FilmsContext";

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const {
    foundFilms,
    searchBy,
    sortBy,
    searchInputValue,
    onChangeSearchInput,
    switchSearchBy,
    switchSortBy,
    fetchFilmsData,
    submitFilmValue,
    fetchFilm,
  } = useContext(FilmsContext);

  useEffect(() => {
    getAllMovie().then((films) => {
      const sortedFilms = sortFilms(films.data, sortBy);
      fetchFilmsData(sortedFilms);
      setIsLoaded(true);
    });
  }, []);

  return (
    <>
      <Header
        component={(
          <Search
            searchBySwitcher={switchSearchBy}
            searchBy={searchBy}
            inputValue={searchInputValue}
            onChangeInput={onChangeSearchInput}
            submitValue={submitFilmValue}
          />
        )}
      />
      <Sort
        optionalComponent={
          foundFilms.length !== 0 && (
            <SortButtons
              sortBy={sortBy}
              onClick={switchSortBy}
            />
          )
        }
        metaText={countFilmsFound(foundFilms)}
        sortBy={sortBy}
      />
      <Films
        getCurrentFilm={fetchFilm}
        isLoaded={isLoaded}
        films={foundFilms}
      />
      <Footer />
    </>
  );
};

export default HomePage;
