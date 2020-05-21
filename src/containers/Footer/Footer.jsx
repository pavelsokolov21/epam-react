import React from "react";
import Container from "components/Container";
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
      <Container padding={20}>
        <Logo />
      </Container>
    </footer>
  );
};

export default Footer;
