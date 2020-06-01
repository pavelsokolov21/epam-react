import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import Button from "./Button";
import Logo from "./Logo";

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
    maxWidth: 740,
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

const AboutFilm = ({ aboutFilm, onClick }) => {
  const {
    title,
    poster_path,
    tagline,
    release_date,
    runtime,
    overview,
    setDefaultFilms,
  } = aboutFilm;

  const classes = useStyles();

  return (
    <div className={classes.currentFilm}>
      <div className={classes.navigation}>
        <Logo />
        <Link to="/">
          <Button
            onClick={onClick}
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

AboutFilm.propTypes = {
  aboutFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AboutFilm;
