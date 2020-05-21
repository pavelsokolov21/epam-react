import React from "react";
import { createUseStyles } from "react-jss";
import Container from "components/container";
import ButtonWithoutBg from "components/ButtonWithoutBg";
import SortButtonsContainer from "components/SortButtonsContainer";

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

  return (
    <section className={classes.sortSection}>
      <Container>
        <div className={classes.sort}>
          <p>7 movies found</p>
          <SortButtonsContainer />
        </div>
      </Container>
    </section>
  );
};

export default SortSection;
