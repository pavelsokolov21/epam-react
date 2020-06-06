export const sortFilms = (films, descriptor) => (
  films.sort((firstItem, secondItem) => descriptor(firstItem, secondItem))
);
