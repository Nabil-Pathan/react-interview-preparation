import React, { Component } from 'react';

class LifecycleLogger extends Component {
  componentDidMount() {
    console.log('Component has mounted');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return <div>Check the console for lifecycle messages.</div>;
  }
}

export default LifecycleLogger;
