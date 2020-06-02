import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CurrentFilmsPage from "./pages/CurrentFilmPage";
import NoMatch from "./pages/NoMatch";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => (
  <Router>
    <Switch>
      <ErrorBoundary>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies/:id" component={CurrentFilmsPage} />
        <Route exact component={NoMatch} />
      </ErrorBoundary>
    </Switch>
  </Router>
);

export default App;
