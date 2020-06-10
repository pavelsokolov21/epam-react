import React, { ReactNode } from "react";
import { createUseStyles } from "react-jss";
import { SearchType, SortType } from "../types";

interface StyleProps {
  fontSize?: string;
  width?: string;
  background?: string;
  color?: string;
}

const useStyles = createUseStyles({
  btn: {
    cursor: "pointer",
    border: "none",
    outline: "none",
    fontSize: ({ fontSize }: StyleProps) => fontSize || "12px",
  },
  btn_primary: {
    width: ({ width }: StyleProps) => width || "100px",
    background: ({ background }: StyleProps) => background || "rgb(37, 37, 37)",
    color: ({ color }: StyleProps) => color || "white",
    padding: "5px 8px",
    borderRadius: "4px",
    fontWeight: "700px",
    textTransform: "uppercase",
    "&.active": {
      background: "rgb(255, 41, 41) !important",
    },
  },
  btn_secondary: {
    color: "rgb(77, 77, 77)",
    background: "none",
    "&.active": {
      color: "rgb(255, 41, 41) !important",
    },
  },
});

type ButtonType = "primary" | "secondary";

interface Props {
  onClick?: (sortBy: SortType, searchBy: SearchType, searchInputValue: string) => void;
  children?: ReactNode;
  active?: boolean;
  type?: ButtonType;
  width?: string;
  fontSize?: string;
  background?: string;
  color?: string;
}

export const Button: React.FC<Props> = (props: Props) => {
  const {
    onClick,
    children,
    active,
    type,
  } = props;

  const classes = useStyles(props);
  const classByType = type === "secondary" ? classes.btn_secondary : classes.btn_primary;
  const buttonClass = `${classes.btn} ${classByType} ${active ? "active" : ""}`;

  return <button className={buttonClass} onClick={onClick}>{children}</button>;
};
