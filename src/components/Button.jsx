import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  btn: {
    width: ({ width }) => width || 100,
    background: ({ background }) => background || "rgb(37, 37, 37)",
    color: ({ color }) => color || "white",
    cursor: "pointer",
    padding: "5px 8px",
    border: "none",
    outline: "none",
    borderRadius: 4,
    fontSize: ({ fontSize }) => fontSize || 12,
    fontWeight: 700,
    textTransform: "uppercase",
  },
  active: {
    background: "rgb(255, 41, 41) !important",
  },
});

const Button = (props) => {
  const { onClick, text, isActive } = props;
  const classes = useStyles(props);
  const buttonClass = `${classes.btn} ${isActive ? classes.active : ""}`;

  return <button className={buttonClass} onClick={onClick}>{text}</button>;
};

export default Button;
