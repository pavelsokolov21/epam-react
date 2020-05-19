import React from "react";
import { createUseStyles } from "react-jss";
import Container from "components/Container";
import Search from "./Search/Search";
import bg from "../../img/header_background.jpg";

const useStyles = createUseStyles({
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
  const classes = useStyles();

  return (
    <header className={classes.headerBg}>
      <Container padding={20}>
        <h1 className={classes.title}>netflixroulette</h1>
        <Search />
      </Container>
    </header>
  );
};

export default Header;
