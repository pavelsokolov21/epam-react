import React from "react";
import SimpleComponent from "./components/SimpleComponent";
import Pure from "./components/Pure";
import FuncComponent from "./components/FuncComponent";
import ComponentWithState from "./components/ComponentWithState";

const App = () => (
  <div>
    <SimpleComponent />
    <Pure />
    <FuncComponent />
    <ComponentWithState />
  </div>
);

export default App;
