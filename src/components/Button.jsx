import React from "react";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";

const useStyles = createUseStyles({
  btn: {
    width: ({ width }) => width,
    background: ({ background }) => background || "rgb(37, 37, 37)",
    color: "white",
    cursor: "pointer",
    padding: "5px 8px",
    border: "none",
    outline: "none",
    borderRadius: 4,
    fontSize: ({ fontSize }) => fontSize || 12,
    fontWeight: 700,
  },
  active: {
    background: "rgb(255, 41, 41)",
  },
});

const Button = ({ text, isActive, ...props }) => {
  const classes = useStyles(props);
  const buttonClass = `${classes.btn} ${isActive ? classes.active : ""}`;

  return <button className={buttonClass}>{text}</button>;
};

Button.defaultProps = {
  isActive: false,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

export default Button;
