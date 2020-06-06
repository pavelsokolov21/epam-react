export const sortByDateDescriptor = (firstFilm, secondFilms) => (
  new Date(secondFilms.release_date) - new Date(firstFilm.release_date)
);
