import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { Search } from "../Search";

describe("Search component", () => {
  let props; let
    component;
  beforeEach(() => {
    props = {
      searchBy: "title",
      inputValue: "",
      onChangeInput: jest.fn(),
      toggleSearchBy: jest.fn(),
      submitValue: jest.fn(),
    };

    component = mount(
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

  it("should call function on click", () => {
    component.find("Button").first().simulate("click");
    component.find("Button").at(1).simulate("click");

    expect(props.toggleSearchBy).toBeCalled();
  });

  it("should one button have active", () => {
    const firstButton = component.find("Button").first();
    const secondButton = component.find("Button").at(1);

    expect(firstButton.prop("active")).toBeTruthy();
    expect(secondButton.prop("active")).toBeFalsy();
  });
});
