import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  btn: {
    cursor: "pointer",
    border: "none",
    outline: "none",
    fontSize: ({ fontSize }) => fontSize || "12px",
  },
  btn_primary: {
    width: ({ width }) => width || "100px",
    background: ({ background }) => background || "rgb(37, 37, 37)",
    color: ({ color }) => color || "white",
    padding: "5px 8px",
    borderRadius: "4px",
    fontWeight: "700px",
    textTransform: "uppercase",
    "&.active": {
      background: "rgb(255, 41, 41) !important",
    },
  },
  btn_secondary: {
    color: "rgb(77, 77, 77)",
    background: "none",
    "&.active": {
      color: "rgb(255, 41, 41) !important",
    },
  },
});

export const Button = (props) => {
  const {
    onClick, children, active, type,
  } = props;

  const classes = useStyles(props);
  const classsByType = type !== "secondary" ? classes.btn_primary : classes.btn_secondary;
  const buttonClass = `${classes.btn} ${classsByType} ${active ? "active" : ""}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: "DefaultText",
  active: false,
  type: "primary",
  onClick: () => {},
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  active: PropTypes.bool,
  type: PropTypes.string,
};
