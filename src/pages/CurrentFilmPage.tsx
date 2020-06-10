import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { Film, RootState } from "../types";
import { fetchFilm, isLoadingPage } from "../actions";
import {
  Header,
  Sort,
  Films,
  Loading,
  FilmInfo,
  Footer,
} from "../components";
import {
  getSortedFilms,
  getCurrentFilm,
  getIsLoading,
} from "../selectors";

interface Props {
  filmsData: Film[] | [];
  currentFilm: Film;
  isLoading: boolean;
  fetchFilm: (id: number) => void;
  isLoadingPage: (status: boolean) => void;
}

const CurrentFilmPage: React.FC<Props> = (props) => {
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

const mapStateToProps = (state: RootState) => ({
  filmsData: getSortedFilms(state),
  currentFilm: getCurrentFilm(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  fetchFilm: (id: number) => dispatch(fetchFilm(id)),
  isLoadingPage: (status: boolean) => dispatch(isLoadingPage(status)),
});

export const ConnectedCurrentFilmPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrentFilmPage);
