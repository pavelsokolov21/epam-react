import React, { Component } from "react";
<<<<<<< HEAD
import PropTypes from "prop-types";
=======
import PropTypes, { object } from "prop-types";
>>>>>>> testing

export class ErrorBoundary extends Component {
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
<<<<<<< HEAD
  children: PropTypes.node.isRequired,
=======
  children: PropTypes.object.isRequired,
>>>>>>> testing
};
