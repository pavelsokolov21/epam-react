import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  logo: {
    fontSize: 18,
    color: "rgb(250, 19, 19)",
  },
});

const Logo = () => {
  const classes = useStyles();

  return <h1 className={classes.logo}>netflixroulette</h1>;
};

export default Logo;
