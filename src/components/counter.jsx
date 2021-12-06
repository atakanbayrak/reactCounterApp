import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <React.Fragment>
        <span>{this.formatCount()}</span>

        <button>Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    const x = <h1>Zero</h1>;
    return count === 0 ? x : count;
  }
}

export default Counter;
