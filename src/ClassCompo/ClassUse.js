import React, { Component } from "react";

export class ClassUse extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  //All The Functions should be out of the Constructor
  handleCount = () => {
    this.setState((prevState) => {
      const newCount = prevState.count + 1;
      document.title = `Count : ${newCount}`;
      return { count: newCount };
    });
  };

  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.handleCount} style={{ padding: 10 }}>
          Click Me
        </button>
      </div>
    );
  }
}
