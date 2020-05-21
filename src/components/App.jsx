import React from "react";
import "./App.css";
import Header from "containers/Header/Header";
import Films from "containers/Films/Films";
import MainState from "../context/mainState";

const App = () => (
  <MainState>
    <Header />
    <Films />
  </MainState>
);

export default App;
