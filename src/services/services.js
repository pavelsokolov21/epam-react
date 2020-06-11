const apiBase = "http://localhost:8080/graphql";

// export const getMovieById = (id) => {
//   const result = fetch(`${apiBase}/${id}`)
//     .then((res) => res.json());

//   return result;
// };

// export const getMovieByParams = (params) => {
//   const result = fetch(`${apiBase}?${params}`)
//     .then((res) => res.json());

//   return result;
// };

export const fetchFilmsFromDataBase = (query, variables) => fetch(`${apiBase}`, {
  method: "post",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    query,
    variables,
  }),
}).then((res) => res.json());
