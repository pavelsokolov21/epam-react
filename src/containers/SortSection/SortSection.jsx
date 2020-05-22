import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import Wrapper from "components/Wrapper";
import SortButtonsContainer from "components/SortButtonsContainer";
import FilmsContext from "../../context/FilmsContext";

const useStyles = createUseStyles({
  sortSection: {
    background: "rgb(219, 219, 219)",
  },
  sort: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const SortSection = () => {
  const classes = useStyles();
  const { foundFilms } = useContext(FilmsContext);

  if (foundFilms.length === 0) {
    return (
      <section className={classes.sortSection}>
        <Wrapper>
          <div />
        </Wrapper>
      </section>
    );
  }

  let textFoundMovies = "";
  if (foundFilms.length === 1) {
    textFoundMovies = `${foundFilms.length} movie found`;
  } else {
    textFoundMovies = `${foundFilms.length} movies found`;
  }

  return (
    <section className={classes.sortSection}>
      <Wrapper>
        <div className={classes.sort}>
          <p>{textFoundMovies}</p>
          <SortButtonsContainer />
        </div>
      </Wrapper>
    </section>
  );
};

export default SortSection;
