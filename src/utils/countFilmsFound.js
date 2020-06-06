export const countFilmsFound = (films) => {
  if (films.length > 1) {
    return `${films.length} movies found`;
  } if (films.length === 1) {
    return "1 movie found";
  }
  return "";
};
