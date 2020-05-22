export const parceToLineStr = (str) => str.toLowerCase().replace(/\s+/g, "");

export const filterFilms = (films, category, subStr) => {
  let newFilmsArray = [];

  films.forEach((film) => {
    let filmTitle = "";
    Array.isArray(film[category])
      ? (filmTitle = parceToLineStr(film[category][0]))
      : (filmTitle = parceToLineStr(film[category]));

    if (filmTitle.indexOf(subStr) !== -1) {
      newFilmsArray = [...newFilmsArray, film];
    }
  });

  return newFilmsArray;
};
