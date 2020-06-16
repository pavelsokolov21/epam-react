import React from "react";
import { createUseStyles } from "react-jss";
import { Logo } from "./Logo";

const useStyles = createUseStyles({
  footer: {
    background: "rgb(77, 77, 77)",
  },
});

export const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className="row">
          <div className="footer-container">
            <Logo />
          </div>
        </div>
      </div>
    </footer>
  );
};
