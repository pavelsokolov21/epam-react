import React from "react";
import "./App.css";
import Header from "containers/Header/Header";
import Films from "containers/Films/Films";
import Footer from "containers/Footer/Footer";
import MainState from "../context/mainState";

const App = () => (
  <MainState>
    <Header />
    <Films />
    <Footer />
  </MainState>
);

export default App;
