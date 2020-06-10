import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import { Sort } from "../Sort";

describe("Sort component", () => {
  let props;
  beforeEach(() => {
    props = {
      metaText: "meta text",
    };
  });

  it("should render with props", () => {
    const tree = renderer.create(
      <Router>
        <Sort metaText={props.metaText}>
          <div />
        </Sort>
      </Router>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should rendre meta text", () => {
    const component = mount(
      <Router>
        <Sort metaText={props.metaText}>
          <div />
        </Sort>
      </Router>,
    );

    expect(component.find("p").text()).toBe("meta text");
  });
});
