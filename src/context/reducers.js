export const SEARCH_BY_SWITCH = "SEARCH_BY_SWITCH";
export const SEARCH_FILMS = "SEARCH_FILMS";

export const searchBySwitch = (typeSearch) => ({
  type: SEARCH_BY_SWITCH,
  payload: typeSearch,
});

export const searchFilms = (valueInput) => ({
  type: SEARCH_FILMS,
  payload: valueInput,
});

export const filmsReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_BY_SWITCH:
      return { ...state, searchBy: action.payload };
    case SEARCH_FILMS:
      return { ...state, foundFilms: [action.payload] };
    default:
      return state;
  }
};
