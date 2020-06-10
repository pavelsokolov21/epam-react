const apiBase = "http://react-cdp-api.herokuapp.com/movies";

export const getMovieById = (id: number) => {
  const result = fetch(`${apiBase}/${id}`)
    .then((res) => res.json());

  return result;
};

export const getMovieByParams = (params: string) => {
  const result = fetch(`${apiBase}?${params}`)
    .then((res) => res.json());

  return result;
};
