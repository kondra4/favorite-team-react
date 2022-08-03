import React from "react";
import Alert from "react-bootstrap/Alert";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Alert variant="danger">
          <Alert.Heading>Oh! You got an error!</Alert.Heading>
          <p>Change this and that and try again.</p>
        </Alert>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
