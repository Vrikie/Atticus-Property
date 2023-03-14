import React, { useState, useEffect } from "react";
import { NavItems } from "./NavItems";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav className="Nav active">
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

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
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
    </>
  );
}

export default Navbar;
