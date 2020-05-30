import React from "react";
import { createUseStyles } from "react-jss";
import spinner from "../img/Spinner.gif";

const useStyles = createUseStyles({
  loading: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Loading = () => {
  const classes = useStyles();

  return <div className={classes.loading}><img src={spinner} alt="Loading..." /></div>;
};

export default Loading;
