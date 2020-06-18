import gql from "graphql-tag";

export const GET_FILM = gql`
  query Film($id: String!) {
    film(id: $id) {
      id title release_date poster_path tagline runtime overview genres
    }
  }
`;
