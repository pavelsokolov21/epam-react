import { sortByDateDescriptor } from "./sortByDateDescriptor";
import { sortByRatingDescriptor } from "./sortByRatingDescriptor";
import { SortType } from "../types";

export const sortDescriptors = (sortBy: SortType) => {
  switch (sortBy) {
    case "rating":
      return sortByRatingDescriptor;
    case "release-date":
      return sortByDateDescriptor;
    default:
      throw new Error("Not found descriptor by sort");
  }
};
