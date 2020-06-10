import {
  parceToLineStr,
  filterFilms,
  sortFilms,
  countFilmsFound,
} from "../common";

describe("Help functions", () => {
  let data;
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

  it("should parce str to lowerCase and delete spaces", () => {
    const str = "Test TEST1_test";
    const rightStr = "testtest1_test";

    expect(parceToLineStr(str)).toBe(rightStr);
  });

  describe("count film", () => {
    it("should return empty str", () => {
      expect(countFilmsFound([])).toBe("");
    });

    it("should return singular str", () => {
      expect(countFilmsFound(["film 1"])).toBe("1 movie found");
    });

    it("should return plural str", () => {
      expect(countFilmsFound(["film 1", "film 2"])).toBe("2 movies found");
    });
  });

  describe("filter films", () => {
    it("should filter films by title", () => {
      const filteredFilm = filterFilms(data, "title", "t");
      const rightFilms = [
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
      ];

      expect(filteredFilm).toEqual(rightFilms);
    });

    it("should filter films by genres", () => {
      const filteredFilm = filterFilms(data, "genres", "ac");
      const rightFilms = [
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
      ];

      expect(filteredFilm).toEqual(rightFilms);
    });

    it("should sort film by rating", () => {
      const sortedFilm = sortFilms(data, "rating");

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
      const sortedFilm = sortFilms(data, "releaseDate");
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
});
