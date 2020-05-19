import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    maxWidth: "1200px",
    padding: (padding) => padding,
    margin: "0 auto",
  },
});

const Container = (props) => {
  const { padding } = props;

  const classes = useStyles(padding);
  return <div className={classes.container} />;
};

export default Container;
