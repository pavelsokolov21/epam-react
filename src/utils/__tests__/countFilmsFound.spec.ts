import { countFilmsFound } from "../countFilmsFound";

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
