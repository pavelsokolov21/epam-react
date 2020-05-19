import React from "react";
import { createUseStyles } from "react-jss";
import Search from "./Search/Search";
// import Container from "../../components/Container";

const useStyles = createUseStyles({
  container: {
    maxWidth: "1200px",
    padding: (padding) => padding,
    margin: "0 auto",
  },
});

const Header = () => {
  const classes = useStyles(20);

  return (
    <header>
      <div className={classes.container}>
        <h1>netflixroulette</h1>
        <Search />
      </div>
    </header>
  );
};

export default Header;
