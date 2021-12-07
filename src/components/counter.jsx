import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  handleIncrement() {
    console.log("Increment Clicked", this);
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    const x = <h1>Zero</h1>;
    return count === 0 ? x : count;
  }
}

export default Counter;
