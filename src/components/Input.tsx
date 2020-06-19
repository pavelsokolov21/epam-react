import React from "react";
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

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  dataTestAttr?: string;
}

export const Input: React.FC<Props> = (props) => {
  const classes = useStyles();
  const {
    value, onChange, placeholder, dataTestAttr,
  } = props;

  return (
    <input
      className={classes.searchInput}
      placeholder={placeholder}
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
      type="text"
      data-test-input={dataTestAttr}
    />
  );
};
