import { Film } from "../types";

export const countFilmsFound = (films: Film[]) => {
  if (films.length > 1) {
    return `${films.length} movies found`;
  } if (films.length === 1) {
    return "1 movie found";
  }
  return "";
};
