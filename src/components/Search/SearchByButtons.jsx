import React from "react";
import { createUseStyles } from "react-jss";
import Button from "../Button";

const useStyles = createUseStyles({
  searchBy: {
    display: "flex",
    width: 327,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  searchBySubtitle: {
    fontWeight: 700,
    color: "white",
  },
});

const SearchByButtons = () => {
  const classes = useStyles();

  return (
    <div className={classes.searchBy}>
      <p className={classes.searchBySubtitle}>search by</p>
      <Button
        text="title"
        fontSize={12}
        width={100}
        background="rgb(255, 41, 41)"
      />
      <Button
        text="genre"
        fontSize={12}
        width={100}
        background="rgb(37, 37, 37)"
      />
    </div>
  );
};

export default SearchByButtons;
