import React from "react";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";

const useStyles = createUseStyles({
  filmsNotFoundTitle: {
    fontSize: 50,
    color: "rgb(128, 128, 128)",
  },
});

const NoFound = ({ text }) => {
  const classes = useStyles();

  return <h2 className={classes.filmsNotFoundTitle}>{text}</h2>;
};

NoFound.defaultProps = {
  text: "No Found",
};

NoFound.propTypes = {
  text: PropTypes.string,
};

export default NoFound;
