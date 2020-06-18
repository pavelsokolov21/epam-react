import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { AnyAction } from "redux";
import { Film } from "../types";
import {
  Header,
  Sort,
  Films,
  Loading,
  FilmInfo,
  Footer,
} from "../components";

interface Props {
  filmsData: Film[];
  currentFilm: Film;
  isLoading: boolean;
  fetchFilm: (id: number) => void;
  isLoadingPage: (status: boolean) => void;
}

export const CurrentFilmPage: React.FC<Props> = (props) => {
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
          filmInfo={currentFilm}
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
