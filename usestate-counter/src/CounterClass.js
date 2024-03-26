import React, { Component } from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>
          <strong>Counter (class component)</strong>
        </p>
        <p>You clicked {this.state.count} times</p>
        <button
          onClick={() => this.setState((state) => ({ count: state.count + 1 }))}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default CounterClass;
