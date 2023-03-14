import React from "react";
import CurrDate from "../CurrDate";

function Spicefoot() {
  return (
    <>
      <div className="Footer" id="syfoot">
        <div className="Details">
          <img
            src="./img/sylogo.png"
            className="logo"
            alt="Atticus Property"
            width="auto"
            height="150px"
          />

          <div>
            <div>
              <h1>CONTACT</h1>
              <p>info@atticus.property</p>
              <p>(021) 510 2155</p>
              <p>
                100 Voortrekker Road
                <br />
                Salt River
                <br />
                Cape Town
                <br />
                7925
              </p>
            </div>
            <a href="/privacy-policy">
              <p>Privacy Policy</p>
            </a>
          </div>

          <div>
            <div className="Footext">
              <div>
                <p>
                  The Spice Yard is a project of Atticus Property, a compact
                  property investment company focused on industrial, retail and
                  office investments in the greater Cape Town area.
                </p>
              </div>
              <a href="/">
                <img
                  src="./img/altextlogo.png"
                  className="logo"
                  alt="Atticus Property"
                  width="auto"
                  height="50px"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="Ender" id="syfootend">
          ©&nbsp;
          <CurrDate />
          &nbsp;ATTICUS PROPERTY
        </div>
      </div>
    </>
  );
}

export default Spicefoot;
