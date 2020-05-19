import React from "react";
import { createUseStyles } from "react-jss";
import Button from "../Button";
import SearchByButtons from "./SearchByButtons";

const useStyles = createUseStyles({
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    "& *": {
      textTransform: "uppercase",
    },
  },
});

const SearchButtonsContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.buttonsContainer}>
      <SearchByButtons />
      <>
        <Button
          text="search"
          fontSize={16}
          width={200}
          background="rgb(255, 41, 41)"
        />
      </>
    </div>
  );
};

export default SearchButtonsContainer;
