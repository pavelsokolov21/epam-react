import React, { useContext, useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import Wrapper from "components/Wrapper";
import Film from "components/Film";
import NoFound from "components/NoFound";
import Loading from "components/Loading";
import FilmsContext from "../../context/FilmsContext";

const useStyles = createUseStyles({
  films: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
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

const Films = () => {
  const classes = useStyles();
  const [isLoaded, setIsLoaded] = useState(false);
  const { foundFilms } = useContext(FilmsContext);

  useEffect(() => {
    if (foundFilms.length !== 0) {
      setIsLoaded(true);
    }
  }, [foundFilms]);

  let content;
  if (!isLoaded) {
    content = (
      <div className={classes.waitingOrLoaded}>
        <Loading />
      </div>
    );
  } else if (foundFilms.length === 0) {
    content = (
      <div className={classes.waitingOrLoaded}>
        <NoFound text="No film found" />
      </div>
    );
  } else {
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

    content = <div className={classes.films}>{filmsData}</div>;
  }
  return (
    <main>
      <Wrapper padding={20}>{content}</Wrapper>
    </main>
  );
};

export default Films;
