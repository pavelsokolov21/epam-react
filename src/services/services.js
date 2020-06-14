const apiBase = "http://localhost:8080/graphql";

export const fetchFilmsFromDataBase = async (query, variables) => {
  try {
    const response = await fetch(`${apiBase}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
    const result = await response.json();

    return result;
  } catch (e) {
    throw new Error("Fetching error");
  }
};
