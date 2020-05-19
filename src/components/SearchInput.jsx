import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  searchInput: {
    width: "100%",
    height: 35,
    padding: "0 10px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderBottom: "1px solid rgb(255, 41, 41)",
    borderRadius: 4,
    outline: "none",
    marginTop: 10,
  },
});

const SearchInput = () => {
  const classes = useStyles();

  return (
    <input
      className={classes.searchInput}
      placeholder="Enter searching film"
      type="text"
    />
  );
};

export default SearchInput;
