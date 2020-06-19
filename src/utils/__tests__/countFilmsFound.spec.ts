import { countFilmsFound } from "../countFilmsFound";
import { Film } from "../../types";

describe("count film", () => {
  const dataOne: Film[] = [
    { id: "1" },

  ];
  const dataTwo: Film[] = [
    { id: "1" },
    { id: "2" },
  ];
  it("should return empty str", () => {
    expect(countFilmsFound([])).toBe("");
  });

  it("should return singular str", () => {
    expect(countFilmsFound(dataOne)).toBe("1 movie found");
  });

  it("should return plural str", () => {
    expect(countFilmsFound(dataTwo)).toBe("2 movies found");
  });
});
