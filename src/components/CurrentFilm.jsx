import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { createUseStyles } from "react-jss";
import FilmsContext from "../context/FilmsContext";

const useStyles = createUseStyles({});

const CurrentFilm = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { getMovie } = useContext(FilmsContext);

  useEffect(() => {}, [id]);

  return <div />;
};

export default CurrentFilm;
