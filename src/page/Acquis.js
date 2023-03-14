import React, { useState } from "react";

import Nav from "../comps/Nav/Nav.js";
import Header from "../comps/Header/Header.js";
import Footer from "../comps/Footer/Footer.js";

import Picbox from "../comps/Picbox/Picbox.js";
import { AcqProps } from "../comps/Picbox/PicData.js";

function Acquis() {
  const pageHeader = "Acquisitions";
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
              In the last 5 years we have purchased more than forty properties.
              Our core focus remains on well-located, tenanted properties in the
              industrial and retail sectors, but our portfolio of acquisitions
              also includes vacant buildings, brownfield development
              opportunities and long-lease deals, as befits the requirements of
              our varied purchasing partners.
            </p>
            <p>
              We lean towards the major metropoles of Cape Town, Durban,
              Johannesburg and Pretoria in order to manage vacancy risk, as
              these cities provide larger economic scale which is useful in
              replacing tenants.
            </p>
            <p>
              As we are based in Cape Town, the bulk of our acquisitions have
              been in the greater Cape Town area. We have progressively expanded
              into the Gauteng market, in particular, when looking to bulk up
              portfolios at attractive yields, as that market is much larger and
              generally trades at a discount (yield-wise) to the Cape Town
              market.
            </p>
          </div>
          <Picbox boxes={AcqProps} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Acquis;
