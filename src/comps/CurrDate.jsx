import React, { Component } from "react";

class CurrDate extends Component {
  state = {
    date: new Date()
  };

  render() {
    return (
      <>
        {this.state.date.toLocaleDateString("fr-CA", { year: "numeric" })}
      </>
    );
  }
}

export default CurrDate;
