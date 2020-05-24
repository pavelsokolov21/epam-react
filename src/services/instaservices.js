const apiBase = "http://react-cdp-api.herokuapp.com/movies";

export const getAllMovie = () => {
  const result = fetch(`${apiBase}`)
    .then((res) => res.json())
    .catch((e) => console.error(e));

  return result;
};

export const getMovieById = (id) => {
  const result = fetch(`${apiBase}/${id}`)
    .then((res) => res.json())
    .catch((e) => console.error(e));

  return result;
};
