import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  film: {
    width: 100,
    height: 200,
    background: "black",
  },
});

const Film = () => {
  const classes = useStyles();
  return <div className={classes.film}>fake</div>;
};

export default Film;
