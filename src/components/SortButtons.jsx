import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import { Button } from "./Button";

const useStyles = createUseStyles({
  sortButtonsContainer: {
    display: "flex",
  },
  sortButtons: {
    width: "165px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sortButtonsTitle: {
    marginRight: "10px",
  },
});

export const SortButtons = (props) => {
  const classes = useStyles();
  const { onClick, sortBy } = props;

  return (
    <div className={classes.sortButtonsContainer}>
      <p className={classes.sortButtonsTitle}>Sort by</p>
      <Button
        type="secondary"
        onClick={() => onClick("release-date")}
        active={sortBy === "release-date"}
        fontSize="15px"
      >
        {" "}
        release date

      </Button>
      <Button
        type="secondary"
        onClick={() => onClick("rating")}
        active={sortBy === "rating"}
        fontSize="15px"
      >
        {" "}
        rating

      </Button>
    </div>
  );
};

SortButtons.propTypes = {
  onClick: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
};
