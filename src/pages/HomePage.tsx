import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";

import {
  Header, Footer, Search, Films, Sort, SortButtons, Loading,
} from "../components";
import { countFilmsFound } from "../utils";
import { SearchType, SortType, Film } from "../types";
import { GET_ALL_FILMS } from "../queries";

export const HomePage: React.FC = () => {
  const [searchBy, setSearchBy] = useState<SearchType>("title");
  const [sortBy, setSortBy] = useState<SortType>("rating");
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const [variablesOfFetch, setVariablesOfFetch] = useState({
    searchBy,
    sortBy,
    search: searchInputValue
  });

  const { loading, error, data } = useQuery<{films: Film[]}>(
    GET_ALL_FILMS, 
    { variables: variablesOfFetch }
  );

  if (loading) {
    return <Loading />;
  }

  if(error) {
    throw new Error("Failed fetch data");
  }

  const submitFilmValue = () => {
    setVariablesOfFetch({
      searchBy,
      sortBy: "rating",
      search: searchInputValue
    });
  }

  const sortAllfilms = (type: SortType) => {
    setVariablesOfFetch({
      searchBy,
      sortBy: type,
      search: searchInputValue
    });
    setSortBy(type);
  }

  const { films } = data;
  return (
    <>
      <Header>
        <Search
          toggleSearchBy={setSearchBy}
          searchBy={searchBy}
          value={searchInputValue}
          onChange={setSearchInputValue}
          submitValue={submitFilmValue}
        />
      </Header>
      <Sort metaText={countFilmsFound(films)}>
        {films.length !== 0 && <SortButtons sortBy={sortBy} onClick={sortAllfilms} />}
      </Sort>
      <Films films={films} />
      <Footer />
    </>
  );
};
