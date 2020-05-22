import React from "react";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";

const useStyles = createUseStyles({
  wrapper: {
    position: "relative",
    zIndex: 5,
    maxWidth: "1200px",
    padding: (padding) => padding,
    margin: "0 auto",
  },
});

const Wrapper = (props) => {
  const { padding, children } = props;

  const classes = useStyles(padding);
  return <div className={classes.wrapper}>{children}</div>;
};

Wrapper.defaultProps = {
  padding: 20,
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.number,
};

export default Wrapper;
