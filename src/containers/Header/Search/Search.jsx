import React from "react";
import { createUseStyles } from "react-jss";
import SearchButtonsContainer from "components/SearchButtonsContainer";
import SearchInput from "components/SearchInput";

const useStyles = createUseStyles({
  searchField: {
    marginTop: 50,
  },
  searchTitle: {
    fontSize: 14,
    color: "white",
    textTransform: "uppercase",
  },
});

const Search = () => {
  const classes = useStyles();

  return (
    <div className={classes.searchField}>
      <h2 className={classes.searchTitle}>find your movie</h2>
      <SearchInput />
      <SearchButtonsContainer />
    </div>
  );
};

export default Search;
