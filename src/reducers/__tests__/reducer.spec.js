import { initialState, filmsReducer } from "../reducer";
import { 
  isLoadingPage,
  setSearchBy,
  setSortBy,
  setFoundFilms,
  onChangeSearchInput,
  fetchFilmsDataSuccess,
  setCurrentFilm,
} from "../../actions/";

describe("Film reducer", () => {
  let data;
  beforeEach(() => {
    data = [
      { id: 1, name: "test 1", rating: 8 },
      { id: 2, name: "test 2", rating: 10 },
      { id: 3, name: "test 3", rating: 2 },
    ];
  });

  it("should update isLoading", () => {
    const action = isLoadingPage(false);

    const rightState = initialState.update("isLoading", () => false);
    expect(filmsReducer(initialState, action)).toEqual(rightState);
  });

  it("should update searchBy", () => {
    const action = setSearchBy("genres");

    const rightState = initialState.update("searchBy", () => "genres");
    expect(filmsReducer(initialState, action)).toEqual(rightState);
  });

  it("should update searchInputValue", () => {
    const action = onChangeSearchInput("test");

    const rightState = initialState.update("searchInputValue", () => "test");
    expect(filmsReducer(initialState, action)).toEqual(rightState);
  });

  it("should update filmsData", () => {
    const action = setFoundFilms(data);

    const rightState = initialState.update("filmsData", () => data);
    expect(filmsReducer(initialState, action)).toEqual(rightState);
  });

  it("should load filmsData", () => {
    const action = fetchFilmsDataSuccess(data);
    const rightState = initialState.update("filmsData", () => data);
    expect(filmsReducer(initialState, action)).toEqual(rightState);
  });

  it("should update sortedFoundFilms", () => {
    const action = setSortBy("rating");

    const rightState = initialState.update("sortBy", () => "rating");
    expect(filmsReducer(initialState, action)).toEqual(rightState);
  });

  it("should update currentFilm", () => {
    const film = { id: 1, name: "test 1" };

    const action = setCurrentFilm(film);

    const rightState = initialState.update("currentFilm", () => film);
    expect(filmsReducer(initialState, action)).toEqual(rightState);
  });
});
