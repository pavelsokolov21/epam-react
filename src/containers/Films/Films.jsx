import React, { useContext, useState, useEffect } from "react";
import Container from "components/container";
import { createUseStyles } from "react-jss";
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
  const { movies, isLoadedFilms } = useContext(FilmsContext);

  useEffect(() => {
    getAllMovie().then((films) => {
      isLoadedFilms(films.data);
      setIsLoaded(true);
    });
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <Container padding={20}>
        <div className={classes.films}>
          {movies.map((film) => (
            <Film />
          ))}
        </div>
      </Container>
    </main>
  );
};

export default Films;
