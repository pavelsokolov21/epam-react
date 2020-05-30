import filmsReducer, { initialState } from "../reducer";
import * as constants from "../../constants/constants";
import { sortFilms } from "../../common";

describe("Film reducer", () => {
  let data;
  beforeEach(() => {
    data = [
      { id: 1, name: "test 1", rating: 8 },
      { id: 2, name: "test 2", rating: 10 },
      { id: 3, name: "test 3", rating: 2 },
    ];
  });

  it("should replace isLoadedPage", () => {
    const action = {
      type: constants.IS_LOADED_PAGE,
      payload: true,
    };

    expect(filmsReducer(initialState, action)).toEqual({
      ...initialState,
      isLoadedPage: true,
    });
  });

  it("should replace searchBy", () => {
    const action = {
      type: constants.SEARCH_BY_SWITCH,
      payload: "genres",
    };

    expect(filmsReducer(initialState, action)).toEqual({
      ...initialState,
      searchBy: "genres",
    });
  });

  it("should replace searchInputValue", () => {
    const action = {
      type: constants.CHANGE_SEARCH_INPUT,
      payload: "test",
    };

    expect(filmsReducer(initialState, action)).toEqual({
      ...initialState,
      searchInputValue: "test",
    });
  });

  it("should replace foundFilms", () => {
    const action = {
      type: constants.SET_FOUND_FILMS,
      payload: data,
    };

    expect(filmsReducer(initialState, action)).toEqual({
      ...initialState,
      foundFilms: data,
    });
  });

  it("should replace filmsData and foundFilms", () => {
    const action = {
      type: constants.LOADED_FILMS,
      payload: data,
    };

    expect(filmsReducer(initialState, action)).toEqual({
      ...initialState,
      filmsData: data,
      foundFilms: data,
    });
  });

  it("should replace sortedFoundFilms", () => {
    const sortedFilms = sortFilms(data, "rating");

    const action = {
      type: constants.SORT_BY_SWITCH,
      payload: {
        typeSort: "rating",
        sortedFoundFilms: sortedFilms,
      },
    };

    expect(filmsReducer(initialState, action)).toEqual({
      ...initialState,
      sortBy: "rating",
      foundFilms: sortedFilms,
    });
  });

  it("should replace currentFilm", () => {
    const film = { id: 1, name: "test 1" };

    const action = {
      type: constants.SET_FILM,
      payload: film,
    };

    expect(filmsReducer(initialState, action)).toEqual({
      ...initialState,
      currentFilm: film,
    });
  });
});
