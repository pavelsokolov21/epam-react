import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { FilmCard } from "./FilmCard";
import { Film } from "../types";

const useStyles = createUseStyles({
  films: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "100px",
    marginTop: "50px",
  },
  default: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  filmsNotFoundTitle: {
    fontSize: "50px",
    color: "rgb(128, 128, 128)",
  },
});

interface Props {
  films: Film[];
}

export const Films: React.FC<Props> = ({ films }) => {
  const classes = useStyles();

  const notFound = <p className={classes.filmsNotFoundTitle} data-test-notfound="not-found">Films not found</p>;
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className={(films.length !== 0) ? classes.films : classes.default}>
            {films.map((film) => (
              <Link
                to={`/movies/${film.id}`}
                key={film.id}
                data-test-card={`film-${film.id}`}
              >
                <FilmCard
                  title={film.title}
                  imgUrl={film.poster_path}
                  genres={film.genres}
                  dateRelease={film.release_date.slice(0, 4)}
                />
              </Link>
            ))}
            {films.length === 0 && notFound}
          </div>
        </div>
      </div>
    </main>
  );
};
