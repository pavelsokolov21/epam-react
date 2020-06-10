import React, { useEffect } from "react";
import { connect } from "react-redux";

import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import {
  Film, SearchType, SortType, RootState,
} from "../types";
import {
  onChangeSearchInput, setSearchBy, setSortBy, submitFilmValue, fetchFilms, isLoadingPage,
} from "../actions";
import {
  Header, Footer, Search, Films, Sort, SortButtons, Loading,
} from "../components";
import { countFilmsFound } from "../utils";
import {
  getSortedFilms, getSearchInputValue, getSearchBy, getSortBy, getIsLoading,
} from "../selectors";

interface Props {
  isLoading: boolean;
  filmsData: Film[];
  searchBy: SearchType;
  sortBy: SortType;
  searchInputValue: string;
  onChangeSearchInput: (value: string) => void;
  toggleSearchBy: (type: string) => void;
  toggleSortBy: (type: string) => void;
  fetchFilms: (sortBy: SortType) => void;
  submitFilmValue: (sortBy: SortType, searchBy: SearchType, searchInputValue: string) => void;
  isLoadingPage: (status: boolean) => void;
}

const HomePage: React.FC<Props> = (props) => {
  const {
    isLoading,
    filmsData,
    searchBy,
    sortBy,
    searchInputValue,
    onChangeSearchInput,
    toggleSearchBy,
    toggleSortBy,
    fetchFilms,
    submitFilmValue,
    isLoadingPage,
  } = props;

  useEffect(() => {
    fetchFilms(sortBy);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header>
        <Search
          toggleSearchBy={toggleSearchBy}
          searchBy={searchBy}
          inputValue={searchInputValue}
          onChangeInput={onChangeSearchInput}
          submitValue={() => submitFilmValue(sortBy, searchBy, searchInputValue)}
        />
      </Header>
      <Sort metaText={countFilmsFound(filmsData)}>
        {filmsData.length !== 0 && <SortButtons sortBy={sortBy} onClick={toggleSortBy} />}
      </Sort>
      <Films films={filmsData} onClick={() => isLoadingPage(true)} />
      <Footer />
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  filmsData: getSortedFilms(state),
  searchInputValue: getSearchInputValue(state),
  searchBy: getSearchBy(state),
  sortBy: getSortBy(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  onChangeSearchInput: (value: string) => dispatch(onChangeSearchInput(value)),
  toggleSearchBy: (type: SearchType) => dispatch(setSearchBy(type)),
  toggleSortBy: (type: SortType) => dispatch(setSortBy(type)),
  fetchFilms: (sortBy: SortType) => dispatch(fetchFilms(sortBy)),
  submitFilmValue: (sortBy: SortType, searchBy: SearchType, searchInputValue: string) => (
    dispatch(submitFilmValue(sortBy, searchBy, searchInputValue))
  ),
  isLoadingPage: (status: boolean) => dispatch(isLoadingPage(status)),
});

export const ConnectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);
