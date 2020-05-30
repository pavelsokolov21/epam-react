import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  sortSection: {
    background: "rgb(219, 219, 219)",
  },
  sort: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const Sort = (props) => {
  const {
    metaText, optionalComponent,
  } = props;
  const classes = useStyles();

  return (
    <section className={classes.sortSection}>
      <div className="container">
        <div className="row">
          <div className={classes.sort}>
            <div>
              <p>{metaText}</p>
            </div>
            {optionalComponent}
          </div>
        </div>
      </div>
    </section>
  );
};

Sort.defaultProps = {
  metaText: "",
  optionalComponent: <></>,
};

Sort.propTypes = {
  metaText: PropTypes.string,
  optionalComponent: PropTypes.node,
};

export default Sort;
