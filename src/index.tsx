import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import App from "./App";
console.log("arg: ", process.env.REACT_APP_API_HOST);
const client = new ApolloClient({ 
  uri: process.env.REACT_APP_API_HOST || "http://localhost:8081/graphql",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root"),
);
