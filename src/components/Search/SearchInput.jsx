import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import FilmsContext from "../../context/FilmsContext";

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
  const { onChangeSearchInput, searchInputValue } = useContext(FilmsContext);

  return (
    <input
      className={classes.searchInput}
      placeholder="Enter searching film"
      type="text"
      value={searchInputValue}
      onChange={({ target: { value } }) => onChangeSearchInput(value)}
    />
  );
};

export default SearchInput;
