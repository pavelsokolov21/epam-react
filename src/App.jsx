import React from "react";
import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";
import { ConnectedHomePage, ConnectedCurrentFilmPage, NoMatch } from "./pages";
import "./App.css";
import { ErrorBoundary } from "./components";

const App = () => (
  <Router>
    <ErrorBoundary>
      <Switch>
        <Route exact path="/" component={ConnectedHomePage} />
        <Route exact path="/movies/:id" component={ConnectedCurrentFilmPage} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </ErrorBoundary>
  </Router>
);

export default App;
