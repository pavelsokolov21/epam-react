import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

import { Film } from "../types";
import {
  Header,
  Sort,
  Films,
  Loading,
  FilmInfo,
  Footer,
} from "../components";
import { GET_FILM, GET_FILMS_BY_FILTER } from "../queries";

export const CurrentFilmPage: React.FC = (props) => {
  const { id } = useParams();
  const [filter, setFilter] = useState<string>("ac");
  const { loading, error, data } = useQuery<{film: Film}>(
    GET_FILM, 
    { variables: { id } }
  );
  const sortedFilms = useQuery(
    GET_FILMS_BY_FILTER,
    { variables: { filter } }
  );

  if (loading || sortedFilms.loading) {
    return <Loading />;
  }

  if (error) {
    throw new Error("Fetched a film error");
  }

  const { film } = data;
  const { filmsByFilter } = sortedFilms.data;
  const [genre = ""] = film.genres;
  const sortByText = `Sorted by ${genre} genre`;
  return (
    <>
      <Header>
        <FilmInfo
          filmInfo={film}
        />
      </Header>
      <Sort metaText={sortByText} />
      <Films
        onClick={() => {}}
        films={filmsByFilter}
      />
      <Footer />
    </>
  );
};
