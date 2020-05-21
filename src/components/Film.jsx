import React from "react";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";
import defaultImg from "../img/not-found.png";

const useStyles = createUseStyles({
  film: {},
  filmImg: {
    width: "100%",
    height: 450,
  },
  filmDescription: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "0 5px",
    margin: 7,
  },
  dateRelease: {
    display: "flex",
    width: 35,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid rgb(122, 122, 122)",
    borderRadius: 4,
    fontSize: 12,
    color: "rgb(138, 138, 138)",
  },
  title: {
    fontSize: 16,
    color: "rgb(97, 97, 97)",
  },
  genre: {
    fontSize: 12,
    color: "rgb(143, 143, 143)",
    marginTop: 8,
  },
});

const Film = (props) => {
  const classes = useStyles();
  const {
 title, img, genre, dateRelease, } = props;

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

Film.defaultProps = {
  img: defaultImg,
};

Film.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
  genre: PropTypes.string.isRequired,
  dateRelease: PropTypes.string.isRequired,
};

export default Film;
