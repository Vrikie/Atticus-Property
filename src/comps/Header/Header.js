import React from "react";

const Header = (props) => (
  <div className="Header">
    <h1>{props.pageHeader}</h1>
    <h2 className="subhead">{props.subHeader}</h2>
    <div className={props.underlined ? "underline" : "nunderline"}></div>
  </div>
);

export default Header;
