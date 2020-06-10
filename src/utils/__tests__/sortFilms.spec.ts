import { sortFilms } from "../sortFilms";
import { sortDescriptors } from "../sortDescriptors";

interface FakeFilm {
  id: number;
  title: string;
  genres: string[];
  vote_average: number;
  release_date: string;
}

describe("filter films", () => {
  let data: FakeFilm[];
  beforeEach(() => {
    data = [
      {
        id: 1,
        title: "Tomb Dider",
        genres: ["Actions", "Adventure"],
        vote_average: 8,
        release_date: "2020-02-10",
      },
      {
        id: 2,
        title: "Transformers",
        genres: ["Robots", "Actions"],
        vote_average: 2,
        release_date: "2019-03-15",
      },
      {
        id: 3,
        title: "Green line",
        genres: ["Drama"],
        vote_average: 3,
        release_date: "2019-05-30",
      },
      {
        id: 4,
        title: "Zoopark",
        genres: ["Cartoons"],
        vote_average: 10,
        release_date: "2018-07-01",
      },
    ];
  });

  it("should sort film by rating", () => {
    const sortedFilm = sortFilms(data, sortDescriptors("rating"));

    const rightFilms = [
      {
        id: 4,
        title: "Zoopark",
        genres: ["Cartoons"],
        vote_average: 10,
        release_date: "2018-07-01",
      },
      {
        id: 1,
        title: "Tomb Dider",
        genres: ["Actions", "Adventure"],
        vote_average: 8,
        release_date: "2020-02-10",
      },
      {
        id: 3,
        title: "Green line",
        genres: ["Drama"],
        vote_average: 3,
        release_date: "2019-05-30",
      },
      {
        id: 2,
        title: "Transformers",
        genres: ["Robots", "Actions"],
        vote_average: 2,
        release_date: "2019-03-15",
      },
    ];

    expect(sortedFilm).toEqual(rightFilms);
  });

  it("should sort film by release date", () => {
    const sortedFilm = sortFilms(data, sortDescriptors("release-date"));
    const rightFilms = [
      {
        id: 1,
        title: "Tomb Dider",
        genres: ["Actions", "Adventure"],
        vote_average: 8,
        release_date: "2020-02-10",
      },
      {
        id: 3,
        title: "Green line",
        genres: ["Drama"],
        vote_average: 3,
        release_date: "2019-05-30",
      },
      {
        id: 2,
        title: "Transformers",
        genres: ["Robots", "Actions"],
        vote_average: 2,
        release_date: "2019-03-15",
      },
      {
        id: 4,
        title: "Zoopark",
        genres: ["Cartoons"],
        vote_average: 10,
        release_date: "2018-07-01",
      },
    ];

    expect(sortedFilm).toEqual(rightFilms);
  });
});
