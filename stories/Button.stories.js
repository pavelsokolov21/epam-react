import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../src/components/Button";

storiesOf("Buttons", module)
  .add("Without props", () => <Button text="default" />)
  .add("Active", () => <Button text="title" isActive />)
  .add("Big font size", () => <Button text="title" isActive fontSize={50} />);
