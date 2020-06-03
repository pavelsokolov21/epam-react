import React from "react";
import PropTypes from "prop-types";
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
      <ButtonWithoutBg onClick={onClick.bind(this, "release-date")} isActive={sortBy === "release-date"} text="release date" />
      <ButtonWithoutBg onClick={onClick.bind(this, "rating")} isActive={sortBy === "rating"} text="rating" />
    </div>
  );
};

SortButtons.propTypes = {
  onClick: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
};

export default SortButtons;
