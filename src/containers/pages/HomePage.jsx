import React, { useContext } from "react";
import Header from "containers/Header";
import SortSection from "containers/SortSection";
import Films from "containers/Films";
import SearchWrapper from "components/Search/SearchWrapper";
import SortButtonsContainer from "components/SortButtonsContainer";
import FilmsContext from "context/FilmsContext";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import { filterFilms, sortFilms } from "../../common";

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

const mapStateToProps = (state) => {
  const {
    foundFilms, searchBy, sortBy, searchInputValue,
  } = state;

  return {
    foundFilms,
    searchBy,
    sortBy,
    searchInputValue,
  };
};

const mapDispatchToProps = (dispatch) => ({
  switchSearchBy: (buttonType) => dispatch(actions.searchBySwitcher(buttonType)),
  switchSortBy: (foundFilms, buttonType) => {
    const sortedFilms = sortFilms(foundFilms, buttonType);
    dispatch(actions.sortBySwitcher(sortedFilms, buttonType));
  },
  handleChangeInput: (value) => dispatch(actions.onChangeSearchInput(value)),
  submitFilmValue: () => {

  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
