export const parceToLineStr = (str) => str.toLowerCase().replace(/\s+/g, "");

export const filterFilms = (films, category, subStr) => {
  let newFilmsArray = [...films];
  const lowerCaseSubStr = parceToLineStr(subStr);

  newFilmsArray = newFilmsArray.filter((film) => {
    let nameOfCategory = "";
    if (Array.isArray(film[category])) {
      nameOfCategory = parceToLineStr(film[category].join(""));
    } else {
      nameOfCategory = parceToLineStr(film[category]);
    }

    return nameOfCategory.indexOf(lowerCaseSubStr) !== -1;
  });

  return newFilmsArray;
};

export const sortFilms = (films, sortBy) => {
  const newFilmsArray = [...films];

  return newFilmsArray.sort((firstFilm, secondFilms) => {
    let firstOperand;
    let secondOperand;

    if (sortBy === "release-date") {
      firstOperand = new Date(firstFilm.release_date);
      secondOperand = new Date(secondFilms.release_date);
    } else {
      firstOperand = firstFilm.vote_average;
      secondOperand = secondFilms.vote_average;
    }

    return secondOperand - firstOperand;
  });
};

export const countFilmsFound = (films) => {
  let text;

  if (films.length === 0) {
    text = "";
  } else if (films.length === 1) {
    text = "1 movie found";
  } else {
    text = `${films.length} movies found`;
  }

  return text;
};
