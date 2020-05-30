import React from "react";
import { createUseStyles } from "react-jss";
import Input from "./Input";
import Button from "./Button";
import Logo from "./Logo";

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

const Search = (props) => {
  const {
    searchBy, inputValue, onChangeInput, searchBySwitcher, submitValue,
  } = props;
  const classes = useStyles();

  return (
    <>
      <div className="row">
        <Logo />
      </div>
      <div className="row">
        <Input placeholder="Enter searching film" value={inputValue} onChange={onChangeInput} />
      </div>
      <div className="row">
        <div className={classes.buttonsContainer}>
          <div className={classes.searchBy}>
            <p className={classes.searchBySubtitle}>Search by</p>
            <Button text="title" isActive={searchBy === "title"} onClick={searchBySwitcher.bind(this, "title")} />
            <Button text="genre" isActive={searchBy === "genres"} onClick={searchBySwitcher.bind(this, "genres")} />
          </div>
          <Button onClick={submitValue} text="search" fontSize={15} width={200} background="rgb(255, 41, 41)" />
        </div>
      </div>
    </>
  );
};

export default Search;
