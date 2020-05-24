export const parceToLineStr = (str) => str.toLowerCase().replace(/\s+/g, "");

export const filterFilms = (films, category, subStr) => {
  let newFilmsArray = [...films];

  newFilmsArray = newFilmsArray.filter((film) => {
    let nameOfCategory = "";
    if (Array.isArray(film[category])) {
      nameOfCategory = parceToLineStr(film[category].join(""));
    } else {
      nameOfCategory = parceToLineStr(film[category]);
    }

    return nameOfCategory.indexOf(subStr) !== -1;
  });

  return newFilmsArray;
};

export const sortFilms = (films, sortBy) => {
  const newFilmsArray = [...films];

  return newFilmsArray.sort((firstFilm, secondFilms) => {
    let firstOperand;
    let secondOperand;

    if (sortBy === "releaseDate") {
      firstOperand = new Date(firstFilm.release_date);
      secondOperand = new Date(secondFilms.release_date);
    } else {
      firstOperand = firstFilm.vote_average;
      secondOperand = secondFilms.vote_average;
    }

    return secondOperand - firstOperand;
  });
};
