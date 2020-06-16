import { Map } from "immutable";

import { initialState, filmsReducer, FilmsReducerType } from "../reducer";
import { 
  isLoadingPage,
  setSearchBy,
  setSortBy,
  setFoundFilms,
  onChangeSearchInput,
  fetchFilmsDataSuccess,
  setCurrentFilm,
} from "../../actions/";

interface StubFilm {
  id: number;
  name: string;
  rating: number;
}

describe("Film reducer", () => {
  let data: StubFilm[];
  let state: FilmsReducerType;
  beforeEach(() => {
    data = [
      { id: 1, name: "test 1", rating: 8 },
      { id: 2, name: "test 2", rating: 10 },
      { id: 3, name: "test 3", rating: 2 },
    ];
    state = Map(initialState);
  });

  it("should update isLoading", () => {
    const action = isLoadingPage(false);

    const rightState = state.update("isLoading", () => false);
    expect(filmsReducer(state, action)).toEqual(rightState);
  });

  it("should update searchBy", () => {
    const action = setSearchBy("genres");

    const rightState = state.update("searchBy", () => "genres");
    expect(filmsReducer(state, action)).toEqual(rightState);
  });

  it("should update searchInputValue", () => {
    const action = onChangeSearchInput("test");

    const rightState = state.update("searchInputValue", () => "test");
    expect(filmsReducer(state, action)).toEqual(rightState);
  });

  it("should update filmsData", () => {
    const action = setFoundFilms(data);

    const rightState = state.update("filmsData", () => data);
    expect(filmsReducer(state, action)).toEqual(rightState);
  });

  it("should load filmsData", () => {
    const action = fetchFilmsDataSuccess(data);
    const rightState = state.update("filmsData", () => data);
    expect(filmsReducer(initialState, action)).toEqual(rightState);
  });

  it("should update sortedFoundFilms", () => {
    const action = setSortBy("rating");

    const rightState = state.update("sortBy", () => "rating");
    expect(filmsReducer(state, action)).toEqual(rightState);
  });

  it("should update currentFilm", () => {
    const film = { id: 1, name: "test 1" };

    const action = setCurrentFilm(film);

    const rightState = state.update("currentFilm", () => film);
    expect(filmsReducer(state, action)).toEqual(rightState);
  });
});
