import React from "react";
import { storiesOf } from "@storybook/react";
import Loading from "../src/components/Loading";

storiesOf("Loading", module)
  .add("Loading spinner", () => <Loading />);
