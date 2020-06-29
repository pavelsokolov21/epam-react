import gql from "graphql-tag";

export const GET_FILMS_BY_FILTER = gql`
  query FilmsByFilter($filter: String) {
    filmsByFilter(filter: $filter) {
      id title release_date poster_path genres vote_average
    }
  }
`;
