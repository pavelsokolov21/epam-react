import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import ButtonWithoutBg from "components/Buttons/ButtonWithoutBg";
import FilmsContext from "../context/FilmsContext";

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
  const { sortBy, switchSortBy } = useContext(FilmsContext);

  return (
    <div className={classes.sortButtonsContainer}>
      <p className={classes.sortButtonsTitle}>Sort by</p>
      <div className={classes.sortButtons}>
        <ButtonWithoutBg
          onClick={switchSortBy.bind(this, "releaseDate")}
          isActive={sortBy === "releaseDate"}
          text="release date"
        />
        <ButtonWithoutBg
          onClick={switchSortBy.bind(this, "rating")}
          isActive={sortBy === "rating"}
          text="rating"
        />
      </div>
    </div>
  );
};

export default SortButtonsContainer;
