import React, { ReactNode } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
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

interface Props {
  children: ReactNode
}

export const Header: React.FC<Props> = ({ children }) => {
  const classes = useStyles();

  return (
    <header className={classes.headerBg}>
      <div className="container">
        {children}
      </div>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
