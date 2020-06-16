import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import { Input } from "./Input";
import { Button } from "./Button";
import { Logo } from "./Logo";

const useStyles = createUseStyles({
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
    "& *": {
      textTransform: "uppercase",
    },
  },
  searchBy: {
    display: "flex",
    width: "327px",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "15px",
  },
  searchBySubtitle: {
    fontWeight: "700px",
    color: "white",
  },
});

export const Search = (props) => {
  const {
    searchBy, inputValue, onChangeInput, toggleSearchBy, submitValue,
  } = props;
  const classes = useStyles();

  return (
    <>
      <div className="row">
        <Logo />
      </div>
      <div className="row">
        <Input
          placeholder="Enter searching film"
          value={inputValue}
          onChange={onChangeInput}
          dataTestAttr="search-input"
        />
      </div>
      <div className="row">
        <div className={classes.buttonsContainer}>
          <div className={classes.searchBy}>
            <p className={classes.searchBySubtitle}>Search by</p>
            <Button
              type="primary"
              active={searchBy === "title"}
              onClick={() => toggleSearchBy("title")}
              dataTestAttr="search-by-title"
            >
              &nbsp;title
            </Button>
            <Button
              type="primary"
              active={searchBy === "genres"}
              onClick={() => toggleSearchBy("genres")}
              dataTestAttr="search-by-genre"
            >
              &nbsp;genre
            </Button>
          </div>
          <Button
            type="primary"
            onClick={submitValue}
            fontSize={15}
            width={200}
            background="rgb(255, 41, 41)"
            dataTestAttr="search"
          >
           &nbsp;search
          </Button>
        </div>
      </div>
    </>
  );
};

Search.propTypes = {
  searchBy: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  toggleSearchBy: PropTypes.func.isRequired,
  submitValue: PropTypes.func.isRequired,
};
