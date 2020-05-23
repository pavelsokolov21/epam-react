import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "containers/pages/HomePage";
import CurrentFilmPage from "containers/pages/CurrentFilmPage";
import Footer from "containers/Footer";
import MainState from "../context/mainState";

const App = () => (
  <Router>
    <Switch>
      <MainState>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies/:id" exact component={CurrentFilmPage} />
      </MainState>
    </Switch>
    <Footer />
  </Router>
);

export default App;
