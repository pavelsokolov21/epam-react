import { Film } from "../types";

export const sortByRatingDescriptor = (firstFilm: Film, secondFilms: Film) => (
  secondFilms.vote_average - firstFilm.vote_average
);
