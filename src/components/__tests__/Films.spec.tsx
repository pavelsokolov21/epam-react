import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import { Films } from "../Films";

describe("Films component", () => {
  interface FakeFilm {
    id: number;
    title: string;
    genres: string[];
    vote_average: number;
    release_date: string;
    poster_path: string;
  }

  interface Props {
    films: FakeFilm[];
    onClick: () => void;
  }

  let props: Props;
  beforeEach(() => {
    props = {
      films: [
        {
          id: 1,
          title: "Tomb Dider",
          genres: ["Actions", "Adventure"],
          vote_average: 8,
          release_date: "2020-02-10",
          poster_path: "",
        },
        {
          id: 2,
          title: "Transformers",
          genres: ["Robots", "Actions"],
          vote_average: 2,
          release_date: "2019-03-15",
          poster_path: "",
        },
        {
          id: 3,
          title: "Green line",
          genres: ["Drama"],
          vote_average: 3,
          release_date: "2019-05-30",
          poster_path: "",
        },
        {
          id: 4,
          title: "Zoopark",
          genres: ["Cartoons"],
          vote_average: 10,
          release_date: "2018-07-01",
          poster_path: "",
        },
      ],
      onClick: jest.fn(),
    };
  });

  it("should render with state from props", () => {
    const tree = renderer.create(
      <Router>
        <Films
          films={props.films}
          onClick={props.onClick}
        />
      </Router>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should render 4 films", () => {
    const component = mount(
      <Router>
        <Films
          films={props.films}
          onClick={props.onClick}
        />
      </Router>,
    );

    expect(component.find(".row a").length).toBe(4);
  });

  it("should return not found", () => {
    const component = mount(
      <Router>
        <Films
          films={[]}
          onClick={props.onClick}
        />
      </Router>,
    );

    expect(component.find(".row p").text()).toBe("Films not found");
  });

  it("should return 1 genre", () => {
    const component = mount(
      <Router>
        <Films
          films={props.films}
          onClick={props.onClick}
        />
      </Router>,
    );

    expect(component.find(".row FilmCard").last().find("p").text()).toBe("Cartoons");
  });

  it("should return multiply genre", () => {
    const component = mount(
      <Router>
        <Films
          films={props.films}
          onClick={props.onClick}
        />
      </Router>,
    );

    expect(component.find(".row FilmCard").first().find("p").text()).toBe("Actions & Adventure");
  });
});
