import { Film } from "../types";

export const sortByDateDescriptor = (firstFilm: Film, secondFilms: Film): number => (
  new Date(secondFilms.release_date) - new Date(firstFilm.release_date)
);
