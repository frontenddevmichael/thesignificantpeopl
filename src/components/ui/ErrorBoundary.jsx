import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '2rem',
          textAlign: 'center',
          fontFamily: 'var(--font-body)',
          color: 'var(--color-text-on-light-secondary)',
        }}>
          <h2 style={{ fontFamily: 'var(--font-display)', marginBottom: '0.5rem' }}>Something went wrong</h2>
          <p style={{ margin: 0 }}>Please refresh the page or try again later.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
