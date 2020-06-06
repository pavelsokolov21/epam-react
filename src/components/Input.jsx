import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  searchInput: {
    display: "block",
    width: "100%",
    height: "35px",
    padding: "0 10px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderBottom: "1px solid rgb(255, 41, 41)",
    borderRadius: "4px",
    outline: "none",
    marginTop: "10px",
  },
});

export const Input = (props) => {
  const classes = useStyles();
  const { value, onChange, placeholder } = props;

  return (
    <input
      className={classes.searchInput}
      placeholder={placeholder}
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
      type="text"
    />
  );
};

Input.defaultProps = {
  placeholder: "",
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
