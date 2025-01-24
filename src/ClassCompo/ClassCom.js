import React, { Component } from "react";

export default class ClassCom extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  incre = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decre = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <>
        <div>
          <h1>Count : {this.state.count}</h1>
          <button onClick={this.incre} style={{ padding: 10, marginRight: 10 }}>
            Click me Increase
          </button>
          <button onClick={this.decre} style={{ padding: 10 }}>
            Click me Decrease
          </button>
        </div>
      </> //Fragment
    );
  }
}
