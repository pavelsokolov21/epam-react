import { sortByDateDescriptor } from "./sortByDateDescriptor";
import { sortByRatingDescriptor } from "./sortByRatingDescriptor";

export const sortDescriptors = (sortBy) => {
  switch (sortBy) {
    case "rating":
      return sortByRatingDescriptor;
    case "release-date":
      return sortByDateDescriptor;
    default:
      throw new Error("Not found descriptor by sort");
  }
};
