import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import { SortButtons } from "../SortButtons";
import { SortType } from "../../types";

describe("SortButtons component", () => {
  interface Props {
    onClick: (sortBy: SortType) => void;
    sortBy: SortType;
  }

  let props: Props;
  // let component; *** how get type for this var***
  beforeEach(() => {
    props = {
      onClick: jest.fn(),
      sortBy: "rating",
    };
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
    const component = mount<Router>(
      <Router>
        <SortButtons {...props} />
      </Router>,
    );

    component.find("Button").first().simulate("click");

    expect(props.onClick).toBeCalled();
  });
});
