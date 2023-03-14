import React, { Component } from "react";
import { NavItems } from "./NavItems";

class Nav extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="Nav">
        <div className="navbar-logo">
          <a href="/">
            <img
              src="./img/textlogo.png"
              className="logo"
              alt="Atticus Property"
              width="auto"
              height="50px"
            />
          </a>
        </div>

        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {NavItems.map((item, index) => {
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

export default Nav;
