import React, { useState } from "react";

import Nav from "../comps/Nav/Nav.js";
import Header from "../comps/Header/Header.js";
import Footer from "../comps/Footer/Footer.js";

import Picboxii from "../comps/Picbox/Picboxii.js";
import { AcqProps } from "../comps/Picbox/PicData.js";

function Manage() {
  const pageHeader = "Management";
  const subHeader = "Our Services";
  const underlined = useState(true);

  return (
    <>
      <Nav />
      <div className="Viewport">
        <Header
          pageHeader={pageHeader}
          subHeader={subHeader}
          underlined={underlined}
        />
        <div className="Mainpage">
          <div className="Maintext">
            <p>
              We currently provide an asset management service for portfolios
              totalling over R200 million.
            </p>
            <p>
              All of these properties have been purchased by us, on behalf of
              the owners, and we focus on creating long term wealth through
              identifying and executing growth opportunities over and above
              normal growth rates in the property markets.
            </p>
            <p>
              Typically, outperformance from a growth perspective comes from
              strong results in one or more of the following areas:
            </p>
            <div className="ListWrap">
              <ul className="ListDash">
                <li>Acquisition</li>
                <li>Rental optimisation</li>
                <li>Lease renegotiation</li>
                <li>Property management</li>
                <li>Finance optimisation</li>
                <li>Renovation</li>
              </ul>
            </div>
            <p>
              We continue to strive for the strongest possible growth results
              for our client portfolios.
            </p>
          </div>
          <Picboxii boxes={AcqProps} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Manage;
