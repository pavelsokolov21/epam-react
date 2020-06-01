import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  searchInput: {
    width: "100%",
    height: 35,
    padding: "0 10px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderBottom: "1px solid rgb(255, 41, 41)",
    borderRadius: 4,
    outline: "none",
    marginTop: 10,
  },
});

const Input = (props) => {
  const classes = useStyles();
  const { value, onChange, placeholder } = props;

  return (
    <div>
      <input
        className={classes.searchInput}
        placeholder={placeholder}
        value={value}
        onChange={({ target: { value } }) => onChange(value)}
        type="text"
      />
    </div>
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

export default Input;
