const apiBase = "http://react-cdp-api.herokuapp.com/movies";

export const getAllMovie = () => {
  const res = fetch(`${apiBase}`)
    .then((res) => res.json())
    .catch((e) => console.error(e));

  return res;
};

export const getmovieById = (id) => {
  const res = fetch(`${apiBase}/${id}`)
    .then((res) => res.json())
    .catch((e) => console.error(e));

  return res.json();
};
