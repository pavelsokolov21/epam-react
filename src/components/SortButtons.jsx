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
  const { onClick, sortBy, films } = props;

  return (
    <div className={classes.sortButtonsContainer}>
      <p className={classes.sortButtonsTitle}>Sort by</p>
      <Button
        type="secondary"
        onClick={() => onClick(films, "release-date")}
        active={sortBy === "release-date"}
        fontSize="15px"
      >
        {" "}
        release date

      </Button>
      <Button
        type="secondary"
        onClick={() => onClick(films, "rating")}
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
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    budget: PropTypes.number.isRequired,
    revenue: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    runtime: PropTypes.number.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
};
