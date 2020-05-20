import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SearchInput from "../src/components/Search/SearchInput";

storiesOf("Inputs", module).add("default", () => <SearchInput />);
