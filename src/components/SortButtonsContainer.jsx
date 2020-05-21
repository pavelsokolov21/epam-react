import React from "react";
import { createUseStyles } from "react-jss";
import ButtonWithoutBg from "components/ButtonWithoutBg";

const useStyles = createUseStyles({
  sortButtonsContainer: {
    display: "flex",
  },
  sortButtons: {
    width: 165,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sortButtonsTitle: {
    marginRight: 10,
  },
});

const SortButtonsContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.sortButtonsContainer}>
      <p className={classes.sortButtonsTitle}>Sort by</p>
      <div className={classes.sortButtons}>
        <ButtonWithoutBg isActive text="release date" />
        <ButtonWithoutBg text="rating" />
      </div>
    </div>
  );
};

export default SortButtonsContainer;
