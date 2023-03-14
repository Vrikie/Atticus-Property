import React from "react";
import CurrDate from "../CurrDate";

import Subscribe from "./Subscribe.js";

function Footer() {
  return (
    <>
      <div className="Footer" id="atfoot">
        <div className="Details">
          <div className="Ftrdetitem" id="atftrdet">
            <img
              src="./img/fullogo.png"
              className="Ftrlogo"
              alt="Atticus Property"
              width="auto"
              height="100px"
            />
          </div>

          <div className="Ftrdetitem" id="atftrdet">
            <div>
              <h1>CONTACT</h1>
              <a href="mailto:someone@example.com">
                <p>info@atticus.property</p>
              </a>
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
            <div className="Ftrdetitem" id="atftrdet">
              <div>
                <h1>SUBSCRIBE</h1>
                <p>
                  Enter your email address to receive updates on our current
                  sale and letting offers.
                </p>
              </div>
              <Subscribe />
            </div>
          </div>
        </div>

        <div className="Ender" id="atfootend">
          <p>
            ©&nbsp;
            <CurrDate />
            &nbsp;ATTICUS PROPERTY
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
