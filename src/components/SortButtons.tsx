import React from "react";
import { createUseStyles } from "react-jss";
import { Button } from "./Button";
import { SortType } from "../types";

const useStyles = createUseStyles({
  sortButtonsContainer: {
    display: "flex",
  },
  sortButtons: {
    width: "165px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sortButtonsTitle: {
    marginRight: "10px",
  },
});

interface Props {
  onClick: (sortBy: SortType) => void;
  sortBy: SortType;
}

export const SortButtons: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const { onClick, sortBy } = props;

  return (
    <div className={classes.sortButtonsContainer}>
      <p className={classes.sortButtonsTitle}>Sort by</p>
      <Button
        type="secondary"
        onClick={() => onClick("release-date")}
        active={sortBy === "release-date"}
        fontSize="15px"
      >
        &nbsp;release date
      </Button>
      <Button
        type="secondary"
        onClick={() => onClick("rating")}
        active={sortBy === "rating"}
        fontSize="15px"
      >
        &nbsp;rating
      </Button>
    </div>
  );
};
