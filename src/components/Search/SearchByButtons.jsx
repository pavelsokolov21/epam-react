import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import Button from "../Button";
import FilmsContext from "../../context/FilmsContext";

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
  const { searchBy, searchBySwitch } = useContext(FilmsContext);
  const classes = useStyles();

  return (
    <div className={classes.searchBy}>
      <p className={classes.searchBySubtitle}>search by</p>
      <Button
        text="title"
        fontSize={12}
        width={100}
        isActive={searchBy === "title"}
        onClick={(e) => searchBySwitch(e, "title")}
      />
      <Button
        text="genre"
        fontSize={12}
        width={100}
        isActive={searchBy === "genre"}
        onClick={(e) => searchBySwitch(e, "genre")}
      />
    </div>
  );
};

export default SearchByButtons;
