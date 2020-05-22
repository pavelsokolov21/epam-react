import React from "react";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";

const useStyles = createUseStyles({
  buttonWithoutBg: {
    fontSize: 15,
    color: "rgb(77, 77, 77)",
    outline: "none",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  active: {
    color: "rgb(255, 41, 41) !important",
  },
});

const ButtonWithoutBg = (props) => {
  const classes = useStyles();
  const { text, isActive, onClick } = props;
  const className = `${classes.buttonWithoutBg} ${
    isActive ? classes.active : ""
  }`;

  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};

ButtonWithoutBg.defaultProps = {
  isActive: false,
};

ButtonWithoutBg.propTypes = {
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default ButtonWithoutBg;
