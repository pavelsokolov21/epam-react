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
  let component = mount<Router>(
    <Router>
      <SortButtons {...props} />
    </Router>,
  );
  beforeEach(() => {
    props = {
      onClick: jest.fn(),
      sortBy: "rating",
    };
  });
  afterEach(() => {
    component = mount<Router>(
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

});
