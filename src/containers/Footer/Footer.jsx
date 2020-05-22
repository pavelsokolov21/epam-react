import React from "react";
import Wrapper from "components/Wrapper";
import Logo from "components/Logo";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  footer: {
    background: "rgb(77, 77, 77)",
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Wrapper padding={20}>
        <Logo />
      </Wrapper>
    </footer>
  );
};

export default Footer;
