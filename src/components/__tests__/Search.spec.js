import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import Search from "../Search";


describe("Search component", () => {
  let props; let
    component;
  beforeEach(() => {
    props = {
      searchBy: "title",
      inputValue: "",
      onChangeInput: jest.fn(),
      searchBySwitcher: jest.fn(),
      submitValue: jest.fn(),
    };

    component = mount(<Search {...props} />);
  });

  it("should render with initial state", () => {
    const tree = renderer.create(<Search {...props} />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should call function on click", () => {
    component.find("Button").first().simulate("click");
    component.find("Button").at(1).simulate("click");

    expect(props.searchBySwitcher).toBeCalled();
  });

  it("should one button have active", () => {
    const firstButton = component.find("Button").first();
    const secondButton = component.find("Button").at(1);

    expect(firstButton.prop("isActive")).toBeTruthy();
    expect(secondButton.prop("isActive")).toBeFalsy();
  });
});
