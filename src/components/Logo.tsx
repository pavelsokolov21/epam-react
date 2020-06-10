import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  logo: {
    fontSize: "18px",
    color: "rgb(250, 19, 19)",
  },
});

export const Logo: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <Link to="/">
        <h1 className={classes.logo}>netflixroulette</h1>
      </Link>
    </div>
  );
};
