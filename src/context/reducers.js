export const SEARCH_BY_SWITCH = "SEARCH_BY_SWITCH";
export const CHANGE_SEARCH_INPUT = "CHANGE_SEARCH_INPUT";
export const SUBMIT_VALUE_FROM_INPUT = "SUBMIT_VALUE_FROM_INPUT";

export const searchBySwitcher = (typeSearch) => ({
  type: SEARCH_BY_SWITCH,
  payload: typeSearch,
});

export const onChangeSearchInput = (value) => ({
  type: CHANGE_SEARCH_INPUT,
  payload: value,
});

export const submitValueFromInput = () => ({
  type: SUBMIT_VALUE_FROM_INPUT,
});

export const filmsReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_BY_SWITCH:
      return { ...state, searchBy: action.payload };
    case CHANGE_SEARCH_INPUT:
      return { ...state, searchInputValue: action.payload };
    case SUBMIT_VALUE_FROM_INPUT:
      return { ...state, foundFilms: [] };
    default:
      return state;
  }
};
