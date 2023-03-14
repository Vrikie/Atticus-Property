import React, { Component } from "react";

class Egzample extends Component {
  state = { counter: 0 };
  addCount = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        <h1>Dis is Egzample</h1>
        <p>
          <button onClick={this.addCount}>Add Turra Cyount</button>
        </p>
        <p>
          <label>
            Arred to re Cyount : <b>{this.state.counter}</b>
          </label>
        </p>
      </div>
    );
  }
}

export default Egzample;
