import React, { useContext, useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import Container from "components/container";
import Film from "components/Film";
import FilmsContext from "../../context/FilmsContext";

const useStyles = createUseStyles({
  films: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  filmsNotFound: {
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

const Films = () => {
  const classes = useStyles();
  const [isLoaded, setIsLoaded] = useState(false);
  const { foundFilms } = useContext(FilmsContext);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (foundFilms.length === 0) {
    return (
      <main className={classes.filmsNotFoundContainer}>
        <Container padding={20}>
          <div className={classes.filmsNotFound}>
            <h2 className={classes.filmsNotFoundTitle}>No films found</h2>
          </div>
        </Container>
      </main>
    );
  }

  const filmsData = foundFilms.map((film) => {
    let genre = "";
    if (film.genres.length > 1) {
      genre = `${film.genres[0]} & ${film.genres[1]}`;
    } else {
      genre = `${film.genres[0]}`;
    }

    const dataRelease = film.release_date.slice(0, 4);
    return (
      <Film
        key={film.id}
        img={film.poster_path}
        title={film.title}
        genre={genre}
        dateRelease={dataRelease}
      />
    );
  });

  let content;
  if (foundFilms.length === 0) {
    content = (
      <div className={classes.filmsNotFound}>
        <h2 className={classes.filmsNotFoundTitle}>No films found</h2>
      </div>
    );
  } else {
    content = <div className={classes.films}>{filmsData}</div>;
  }
  return (
    <main>
      <Container padding={20}>{content}</Container>
    </main>
  );
};

export default Films;
