import React from "react";
import { createUseStyles } from "react-jss";
import ButtonWithoutBg from "./ButtonWithoutBg";

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

const SortButtons = (props) => {
  const classes = useStyles();
  const { onClick, sortBy } = props;

  return (
    <div className={classes.sortButtonsContainer}>
      <p className={classes.sortButtonsTitle}>Sort by</p>
      <ButtonWithoutBg onClick={onClick.bind(this, "releaseDate")} isActive={sortBy === "releaseDate"} text="release date" />
      <ButtonWithoutBg onClick={onClick.bind(this, "rating")} isActive={sortBy === "rating"} text="rating" />
    </div>
  );
};

export default SortButtons;
