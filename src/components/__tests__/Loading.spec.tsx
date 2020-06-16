import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import { Loading } from "../Loading";

describe("Loading component", () => {
  it("should render", () => {
    const tree = renderer.create(
      <Router>
        <Loading />
      </Router>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
