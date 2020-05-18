import React, { Component } from "react";

class ComponentWithState extends Component {
  constructor() {
    super();
    this.state = {
      defaultStr: "Hello, React four!",
    };
  }

  render() {
    const { defaultStr } = this.state;

    return <div>{defaultStr}</div>;
  }
}

export default ComponentWithState;
