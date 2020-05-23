import React from "react";
import { Switch, Route } from "react-router-dom";
import { createUseStyles } from "react-jss";
import Wrapper from "components/Wrapper";
import SearchWrapper from "components/Search/SearchWrapper";
import CurrentFilm from "components/CurrentFilm";
import bg from "../img/header_background.jpg";

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
});

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.headerBg}>
      <Wrapper padding={20}>
        <Switch>
          <Route path="/" component={SearchWrapper} />
          <Route path="/movies/:id" component={CurrentFilm} />
        </Switch>
      </Wrapper>
    </header>
  );
};

export default Header;
