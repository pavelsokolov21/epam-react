import React from "react";
import { createUseStyles } from "react-jss";
import Wrapper from "components/Wrapper";
import PropTypes from "prop-types";
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

const Header = ({ ContentComponent }) => {
  const classes = useStyles();

  return (
    <header className={classes.headerBg}>
      <Wrapper padding={20}>
        <ContentComponent />
      </Wrapper>
    </header>
  );
};

Header.propTypes = {
  ContentComponent: PropTypes.func.isRequired,
};

export default Header;
