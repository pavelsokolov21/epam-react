import { parceToLineStr } from "./parceToLineStr";

export const filterFilms = (films, category, subStr) => {
  const lowerCaseSubStr = parceToLineStr(subStr);

  return films.filter((film) => {
    let nameOfCategory = "";
    if (Array.isArray(film[category])) {
      nameOfCategory = parceToLineStr(film[category].join(""));
    } else {
      nameOfCategory = parceToLineStr(film[category]);
    }

    return nameOfCategory.includes(lowerCaseSubStr);
  });
};
