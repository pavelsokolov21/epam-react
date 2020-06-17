const apiBase = "http://localhost:8080/graphql";

interface Variables {
  searchBy?: string;
  sortBy?: string;
  search?: string;
  filter?: string;
}

export const fetchFilmsFromDataBase = async (query: string, variables: Variables) => {
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
