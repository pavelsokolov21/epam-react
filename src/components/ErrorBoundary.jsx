import React, { Component } from "react";
import PropTypes, { func, object } from "prop-types";

export default class ErrorBoundary extends Component {
  constructor() {
    super();

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

ErrorBoundary.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
