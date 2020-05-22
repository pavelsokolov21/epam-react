import React from "react";
import "./App.css";
import Header from "containers/Header";
import SortSection from "containers/SortSection";
import Films from "containers/Films";
import Footer from "containers/Footer";
import MainState from "../context/mainState";

const App = () => (
  <MainState>
    <Header />
    <SortSection />
    <Films />
    <Footer />
  </MainState>
);

export default App;
