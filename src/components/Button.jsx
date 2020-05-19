import React from "react";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";

const useStyles = createUseStyles({
  btn: {
    width: ({ width }) => width,
    background: ({ background }) => background || "gray",
    color: "white",
    cursor: "pointer",
    padding: "5px 8px",
    border: "none",
    outline: "none",
    borderRadius: 4,
    fontSize: ({ fontSize }) => fontSize || 12,
    fontWeight: 700,
  },
});

const Button = ({ text, ...props }) => {
  const classes = useStyles(props);
  return <button className={classes.btn}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
