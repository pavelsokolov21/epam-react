import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import { SortButtons } from "../SortButtons";

describe("SortButtons component", () => {
  let props; let
    component;
  beforeEach(() => {
    props = {
      onClick: jest.fn(),
      sortBy: "rating",
    };

    component = mount(
      <Router>
        <SortButtons {...props} />
      </Router>,
    );
  });

  it("should render with props", () => {
    const tree = renderer.create(
      <Router>
        <SortButtons {...props} />
      </Router>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should clicked on button", () => {
    component.find("Button").first().simulate("click");

    expect(props.onClick).toBeCalled();
  });
});
