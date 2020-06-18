import { Film } from "./Film";
import { SearchType, SortType } from "./types";

export interface State {
  filmsData: Film[];
  searchBy: SearchType;
  sortBy: SortType;
  searchInputValue: string;
  currentFilm: Film | {};
  isLoading: boolean;
}
