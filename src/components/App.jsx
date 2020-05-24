import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "containers/pages/HomePage";
import CurrentFilmPage from "containers/pages/CurrentFilmPage";
import Footer from "containers/Footer";
import ErrorBoundary from "./ErrorBoundary";
import MainState from "../context/mainState";

const App = () => (
  <Router>
    <Switch>
      <ErrorBoundary>
        <MainState>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies/:id" exact component={CurrentFilmPage} />
        </MainState>
      </ErrorBoundary>
    </Switch>
    <Footer />
  </Router>
);

export default App;
