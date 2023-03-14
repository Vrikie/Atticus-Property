import React, { Component } from "react";
import { SpicenavItems } from "./NavItems";

class Spicenav extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="Spicenav">
        <h4 className="navbar-logo">
          <a href="/spice-yard">
            <img
              src="./img/sybrand.png"
              className="logo"
              alt="Atticus Property"
              width="auto"
              height="120px"
            />
          </a>
        </h4>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {SpicenavItems.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <a className={item.cName} id={item.type} href={item.path}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Spicenav;
