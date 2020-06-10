import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "../Header";

describe("Header component", () => {
  it("should render with props", () => {
    const tree = renderer.create(
      <Router>
        <Header>
          <div />
        </Header>
      </Router>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
