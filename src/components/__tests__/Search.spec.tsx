import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { Search } from "../Search";
import { SearchType, SortType } from "../../types";

describe("Search component", () => {
  interface Props {
    searchBy: SearchType;
    inputValue: string;
    onChangeInput: (value: string) => void;
    toggleSearchBy: (searchBy: SearchType) => void;
    submitValue: () => void;
  }

  let props: Props;
  let component = mount<Router>(
    <Router>
      <Search {...props} />
    </Router>,
  );
  beforeEach(() => {
    props = {
      searchBy: "title",
      inputValue: "",
      onChangeInput: jest.fn(),
      toggleSearchBy: jest.fn(),
      submitValue: jest.fn(),
    };
  });
  afterEach(() => {
    component = mount<Router>(
      <Router>
        <Search {...props} />
      </Router>,
    );
  });

  it("should render with initial state", () => {
    const tree = renderer.create(
      <Router>
        <Search {...props} />
      </Router>,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should one button have active", () => {
    const firstButton = component.find("Button").first();
    const secondButton = component.find("Button").at(1);

    expect(firstButton.prop("active")).toBeTruthy();
    expect(secondButton.prop("active")).toBeFalsy();
  });
});
