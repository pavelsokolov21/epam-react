import React from "react";
import { createUseStyles } from "react-jss";
import Search from "./Search/Search";
import bg from "../../img/header_background.jpg";
// import Container from "../../components/Container";

const useStyles = createUseStyles({
  container: {
    position: "relative",
    zIndex: 5,
    maxWidth: "1200px",
    padding: (padding) => padding,
    margin: "0 auto",
  },
  headerBg: {
    position: "relative",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      background: "black",
      opacity: ".4",
      zIndex: 0,
    },
  },
  title: {
    fontSize: 18,
    color: "rgb(250, 19, 19)",
  },
});

const Header = () => {
  const classes = useStyles(20);

  return (
    <header className={classes.headerBg}>
      <div className={classes.container}>
        <h1 className={classes.title}>netflixroulette</h1>
        <Search />
      </div>
    </header>
  );
};

export default Header;
