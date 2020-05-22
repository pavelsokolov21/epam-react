export const parceToLineStr = (str) => str.toLowerCase().replace(/\s+/g, "");

export const filterFilms = (films, category, subStr) => {
  let newFilmsArray = [];

  const addFilmIfEntry = (film, searchStr) => {
    const nameOfCategory = parceToLineStr(searchStr);

    if (nameOfCategory.indexOf(subStr) !== -1) {
      newFilmsArray = [...newFilmsArray, film];
    }
  };

  films.forEach((film) => {
    if (Array.isArray(film[category])) {
      film[category].forEach((genre) => {
        addFilmIfEntry(film, genre);
      });
    } else {
      addFilmIfEntry(film, film[category]);
    }
  });

  return newFilmsArray;
};
