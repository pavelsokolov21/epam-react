import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "../src/components/Button";
import ButtonWithoutBg from "../src/components/ButtonWithoutBg";

storiesOf("Buttons", module)
  .add("Without props", () => <Button onClick={action("clicked")} text="default" />)
  .add("Active", () => <Button onClick={action("clicked")} text="title" isActive />);

storiesOf("Buttons without bg", module)
  .add("Without bg unactive", () => <ButtonWithoutBg isActive onClick={action("clicked")} />)
  .add("Without bg active", () => <ButtonWithoutBg onClick={action("clicked")} />);
