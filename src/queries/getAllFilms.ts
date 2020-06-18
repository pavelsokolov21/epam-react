import gql from "graphql-tag";

export const GET_ALL_FILMS = gql`
  query Films(
    $searchBy: String,
    $sortBy: String,
    $search: String
  ){
    films(
      searchBy: $searchBy,
      sortBy: $sortBy,
      search: $search
    ) {
      id title poster_path genres release_date
    }
  }
`;
