import React, { Component } from "react";

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Readonly<{}>, State> {
  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return <div>Произошла ошибка :(</div>;
    }

    return children;
  }
}
