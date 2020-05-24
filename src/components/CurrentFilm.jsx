/* eslint-disable camelcase */
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import FilmsContext from "../context/FilmsContext";
import Logo from "./Logo";
import Button from "./Buttons/Button";
import Loading from "./Intermediate/Loading";

const useStyles = createUseStyles({
  currentFilm: {},
  navigation: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  aboutFilm: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 10,
  },
  aboutFilmImg: {
    height: 500,
  },
  aboutFilmText: {
    maxWidth: 820,
  },
  aboutFilmTextTitle: {
    color: "rgb(255, 41, 41)",
    fontSize: 30,
  },
  aboutFilmTextTagline: {
    fontSize: 18,
    fontWeight: 400,
    color: "white",
    marginTop: 8,
  },
  time: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 150,
    marginTop: 12,
  },
  timeItem: {
    display: "block",
    color: "white",
  },
  overview: {
    marginTop: 35,
    color: "white",
  },
});

const CurrentFilm = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { currentFilm } = useContext(FilmsContext);
  const {
    title,
    poster_path,
    tagline,
    release_date,
    runtime,
    overview,
  } = currentFilm;
  const classes = useStyles();

  useEffect(() => {
    if (Object.keys(currentFilm).length !== 0) {
      setIsLoaded(true);
    }
  }, [currentFilm]);

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <div className={classes.currentFilm}>
      <div className={classes.navigation}>
        <Logo />
        <Link to="/">
          <Button
            width={100}
            text="search"
            background="white"
            color="rgb(255, 41, 41)"
          />
        </Link>
      </div>
      <div className={classes.aboutFilm}>
        <img
          className={classes.aboutFilmImg}
          src={poster_path}
          alt={title + tagline}
        />
        <div className={classes.aboutFilmText}>
          <h2 className={classes.aboutFilmTextTitle}>{title}</h2>
          <h4 className={classes.aboutFilmTextTagline}>{tagline}</h4>
          <div className={classes.time}>
            <span className={classes.timeItem}>{release_date.slice(0, 4)}</span>
            <span className={classes.timeItem}>{`${runtime} min`}</span>
          </div>
          <p className={classes.overview}>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentFilm;
