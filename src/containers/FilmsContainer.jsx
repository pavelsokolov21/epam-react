import React from "react";
import PropTypes from "prop-types";
import Films from "./Films";

const FilmsContainer = ({ films }) => <Films films={films} />;

FilmsContainer.defaultProps = {
  films: [],
};

FilmsContainer.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
};

export default FilmsContainer;
