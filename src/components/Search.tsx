import React from "react";
import { createUseStyles } from "react-jss";
import { Input } from "./Input";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { SearchType, SortType } from "../types";

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

interface Props {
  searchBy: SearchType;
  inputValue: string;
  onChangeInput: (value: string) => void;
  toggleSearchBy: (type: string) => void;
  submitValue: (sortBy: SortType, searchBy: SearchType, searchInputValue: string) => void;
}

export const Search: React.FC<Props> = (props) => {
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
            >
              &nbsp;title
            </Button>
            <Button
              type="primary"
              active={searchBy === "genres"}
              onClick={() => toggleSearchBy("genres")}
            >
              &nbsp;genre
            </Button>
          </div>
          <Button
            type="primary"
            onClick={submitValue}
            fontSize="15px"
            width="200px"
            background="rgb(255, 41, 41)"
          >
            &nbsp;search
          </Button>
        </div>
      </div>
    </>
  );
};
