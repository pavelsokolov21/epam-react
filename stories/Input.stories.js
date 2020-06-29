import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import SearchInput from "../src/components/Input";

storiesOf("Inputs", module).add("default", () => {
  const [value, onChange] = useState("");

  return (
    <SearchInput
      onChange={onChange}
      text={value}
      placeholder="enter films name"
    />
  );
});
