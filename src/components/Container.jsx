import React from "react";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";

const useStyles = createUseStyles({
  container: {
    position: "relative",
    zIndex: 5,
    maxWidth: "1200px",
    padding: (padding) => padding,
    margin: "0 auto",
  },
});

const Container = (props) => {
  const { padding, children } = props;

  const classes = useStyles(padding);
  return <div className={classes.container}>{children}</div>;
};

Container.defaultProps = {
  padding: 20,
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.number,
};

export default Container;
