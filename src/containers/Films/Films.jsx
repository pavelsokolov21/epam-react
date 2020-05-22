import React, { useContext, useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import Container from "components/container";
import Film from "components/Film";
import FilmsContext from "../../context/FilmsContext";
import { getAllMovie } from "../../services/instaservices";

const useStyles = createUseStyles({
  films: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
});

const Films = () => {
  const classes = useStyles();
  const [isLoaded, setIsLoaded] = useState(false);
  const { foundFilms, isLoadedFilms } = useContext(FilmsContext);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
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

  return (
    <main>
      <Container padding={20}>
        <div className={classes.films}>{filmsData}</div>
      </Container>
    </main>
  );
};

export default Films;
