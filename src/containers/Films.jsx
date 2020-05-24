import React, { useState, useEffect, useContext } from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import Wrapper from "components/Wrapper";
import Film from "components/Film";
import NoFound from "components/Intermediate/NoFound";
import Loading from "components/Intermediate/Loading";
import PropTypes from "prop-types";
import FilmsContext from "../context/FilmsContext";

const useStyles = createUseStyles({
  allFilms: {
    marginTop: 50,
  },
  films: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "100px",
  },
  waitingOrLoaded: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  filmsNotFoundTitle: {
    fontSize: 50,
    color: "rgb(128, 128, 128)",
  },
});

const Films = ({ films }) => {
  const classes = useStyles();
  const [isLoaded, setIsLoaded] = useState(false);
  const { sortFilmsByGenre } = useContext(FilmsContext);

  useEffect(() => {
    if (films.length !== 0) {
      setIsLoaded(true);
    }
  }, [films]);

  let content;
  if (!isLoaded) {
    content = (
      <div className={classes.waitingOrLoaded}>
        <Loading />
      </div>
    );
  } else if (films.length === 0) {
    content = (
      <div className={classes.waitingOrLoaded}>
        <NoFound text="No film found" />
      </div>
    );
  } else {
    const filmsData = films.map((film) => {
      let genre = "";
      if (film.genres.length > 1) {
        genre = `${film.genres[0]} & ${film.genres[1]}`;
      } else {
        genre = `${film.genres[0]}`;
      }

      const dataRelease = film.release_date.slice(0, 4);
      return (
        <Link
          onClick={sortFilmsByGenre.bind(this, film.id)}
          key={film.id}
          to={`/movies/${film.id}`}
        >
          <Film
            img={film.poster_path}
            title={film.title}
            genre={genre}
            dateRelease={dataRelease}
          />
        </Link>
      );
    });

    content = <div className={classes.films}>{filmsData}</div>;
  }
  return (
    <main className={classes.allFilms}>
      <Wrapper padding={20}>{content}</Wrapper>
    </main>
  );
};

Films.defaultProps = {
  films: [],
};

Films.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
};

export default Films;
