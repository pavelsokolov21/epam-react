import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import FilmCard from "./FilmCard";
import Loading from "./Loading";

const useStyles = createUseStyles({
  films: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "100px",
    marginTop: 50,
  },
  default: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  filmsNotFoundTitle: {
    fontSize: 50,
    color: "rgb(128, 128, 128)",
  },
});

const Films = ({ films, isLoaded, getCurrentFilm }) => {
  const classes = useStyles();

  const content = films.map((film) => {
    const genres = film.genres.length === 1
      ? film.genres[0]
      : `${film.genres[0]} & ${film.genres[1]}`;
    return (
      <Link onClick={getCurrentFilm.bind(this, film.id)} to={`/movies/${film.id}`} key={film.id}>
        <FilmCard
          title={film.title}
          img={film.poster_path}
          genre={genres}
          dateRelease={film.release_date.slice(0, 4)}
        />
      </Link>
    );
  });
  const notFound = <p className={classes.filmsNotFoundTitle}>Films not found</p>;

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className={(isLoaded && films.length !== 0) ? classes.films : classes.default}>
            {isLoaded ? content : <Loading />}
            {films.length === 0 && isLoaded && notFound}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Films;
