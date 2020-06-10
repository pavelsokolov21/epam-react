import { Film } from "../types/Film";

export const sortFilms = (
  films: Film[],
  descriptor: (firstItem: Film, secondItem: Film) => number,
) => (
  films.sort((firstItem: Film, secondItem: Film) => descriptor(firstItem, secondItem))
);
