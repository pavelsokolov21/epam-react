import React from "react";
import { createUseStyles } from "react-jss";
import Wrapper from "components/Wrapper";
import Default from "components/Intermediate/Default";
import PropTypes from "prop-types";

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

const SortSection = ({ films, text, SortButtons }) => {
  const classes = useStyles();

  let content;
  if (films.length === 0) {
    content = <></>;
  } else {
    content = (
      <div className={classes.sort}>
        <p>{text}</p>
        <SortButtons />
      </div>
    );
  }
  return (
    <section className={classes.sortSection}>
      <Wrapper>{content}</Wrapper>
    </section>
  );
};

SortSection.defaultProps = {
  films: [],
  text: "Nothing found",
  SortButtons: Default,
};

SortSection.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
  text: PropTypes.string,
  SortButtons: PropTypes.func,
};

export default SortSection;
