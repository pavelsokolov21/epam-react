import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { createUseStyles } from "react-jss";
import FilmsContext from "../context/FilmsContext";

const useStyles = createUseStyles({});

const CurrentFilm = () => {
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {}, [id]);

  return <div>fake:{id}</div>;
};

export default CurrentFilm;
