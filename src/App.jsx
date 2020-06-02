import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CurrentFilmsPage from "./pages/CurrentFilmPage";
import NoMatch from "./pages/NoMatch";
import { persistor } from "./store/store";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Loading from "./components/Loading";

const App = () => (
  <PersistGate loading={Loading} persistor={persistor}>
    <Router>
      <ErrorBoundary>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies/:id" component={CurrentFilmsPage} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </ErrorBoundary>
    </Router>
  </PersistGate>
);

export default App;
