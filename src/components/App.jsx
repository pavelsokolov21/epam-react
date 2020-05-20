import React from "react";
import "./App.css";
import Header from "../containers/Header/Header";
import MainState from "../context/mainState";

const App = () => (
  <MainState>
    <Header />
  </MainState>
);

export default App;
