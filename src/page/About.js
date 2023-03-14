import React, { useState } from "react";

import Nav from "../comps/Nav/Nav.js";
import Header from "../comps/Header/Header.js";
import Footer from "../comps/Footer/Footer.js";

import Picboxiii from "../comps/Picbox/Picboxiii.js";
import { AbtPorts } from "../comps/Picbox/PicData.js";

function About() {
  const pageHeader = "About";
  const underlined = useState(true);

  return (
    <>
      <Nav />
      <div className="Viewport">
        <Header pageHeader={pageHeader} underlined={underlined} />
        <div className="Mainpage">
          <div className="Maintext">
            <p>
              Atticus is a compact property investment company focused on
              industrial, retail and office investments in the greater Cape Town
              area. Our small team has an impressive track record in purchasing
              well-located assets and managing them to increase immediate and
              long-term results.
            </p>
            <p>
              When we take on a partner in any of our investments, we make it a
              priority to turn these partnerships into long-term and mutually
              beneficial relationships with aligned goals.
            </p>
          </div>
          <Picboxiii boxes={AbtPorts} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
