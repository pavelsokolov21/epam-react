import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import AboutFilm from "../AboutFilm";

describe("AboutFilm component", () => {
  let props;
  beforeEach(() => {
    props = {
      aboutFilm: {
        title: "Tomb Rider",
        poster_path: "",
        tagline: "blablabla",
        release_date: "2020-05-31",
        runtime: 150,
        overview: "blablabla",
      },
      goToHome: jest.fn(),
    };
  });

  it("should rendrer with initial state", () => {
    const tree = renderer.create(
      <Router>
        <AboutFilm {...props} />
      </Router>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
