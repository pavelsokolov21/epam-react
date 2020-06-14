import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  film: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "334px",
  },
  filmImg: {
    maxWidth: "334px",
    height: "480px",
  },
  filmDescription: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "0 5px",
    margin: "7px",
  },
  dateRelease: {
    display: "flex",
    width: "35px",
    height: "20px",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid rgb(122, 122, 122)",
    borderRadius: "4px",
    fontSize: "12px",
    color: "rgb(138, 138, 138)",
  },
  title: {
    fontSize: "16px",
    color: "rgb(97, 97, 97)",
  },
  genre: {
    fontSize: "12px",
    color: "rgb(143, 143, 143)",
    marginTop: "8px",
  },
});

export const FilmCard = (props) => {
  const classes = useStyles();
  const {
    title, img, genres, dateRelease,
  } = props;
  const [firstGenre = "", secondGenre = ""] = genres;

  const genre = genres.length === 1
    ? firstGenre
    : `${secondGenre} & ${secondGenre}`;

  return (
    <div className={classes.film}>
      <figure>
        <img className={classes.filmImg} src={img} alt={title + dateRelease} />
        <figcaption className={classes.filmDescription}>
          <div>
            <h4 className={classes.title}>{title}</h4>
            <p className={classes.genre}>{genre}</p>
          </div>
          <div className={classes.dateRelease}>{dateRelease}</div>
        </figcaption>
      </figure>
    </div>
  );
};

FilmCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  dateRelease: PropTypes.string.isRequired,
};
