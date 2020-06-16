import { Map } from "immutable";

import { Film } from "./Film";
import { SearchType, SortType } from "./types";

export interface RootState {
  filmsData: Film[] | [];
  searchBy: SearchType;
  sortBy: SortType;
  searchInputValue: string;
  currentFilm: Film | {};
  isLoading: boolean;
}
