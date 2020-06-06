import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ConnectedHomePage, ConnectedCurrentFilmPage, NoMatch } from "./pages";
import { persistor } from "./store/store";
import "./App.css";
import { ErrorBoundary, Loading } from "./components";

const App = () => (
  <PersistGate loading={Loading} persistor={persistor}>
    <Router>
      <ErrorBoundary>
        <Switch>
          <Route exact path="/" component={ConnectedHomePage} />
          <Route exact path="/movies/:id" component={ConnectedCurrentFilmPage} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </ErrorBoundary>
    </Router>
  </PersistGate>
);

export default App;
