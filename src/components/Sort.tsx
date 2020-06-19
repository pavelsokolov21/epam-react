import React, { ReactNode } from "react";
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

interface Props {
  metaText: ReactNode;
}

export const Sort: React.FC<Props> = (props) => {
  const {
    metaText, children,
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
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};
