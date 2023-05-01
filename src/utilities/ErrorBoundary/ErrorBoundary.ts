import React from 'react';

type Props = {
  fallback: (props: any) => React.ReactNode;
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
  error: string;
  errorInfo: string;
};

class ErrorBoundary extends React.Component<Props, State> {
  state = {
    hasError: false,
    error: '',
    errorInfo: '',
  };

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({ error, errorInfo });
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback({ error: this.state.error });
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
