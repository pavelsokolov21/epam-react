import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "containers/Header";
import SortSection from "containers/SortSection";
import Films from "containers/Films";
import Footer from "containers/Footer";
import MainState from "../context/mainState";

const App = () => (
  <Router>
    <MainState>
      <Header />
      <SortSection />
      <Films />
      <Footer />
    </MainState>
  </Router>
);

export default App;
