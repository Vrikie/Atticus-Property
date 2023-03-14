import React from "react";
import { Parallax } from "react-parallax";

import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons";

import Nav from "../comps/Nav/Nav.js";
import Header from "../comps/Header/Header.js";
import Linkbox from "../comps/Linkbox/Linkbox.js";
import { HomeAcq, HomeMan, HomeSpi } from "../comps/Linkbox/LinkboxData.js";
import Footer from "../comps/Footer/Footer.js";

// import Spicenav from "../comps/Nav/Spicenav.js";
// import Spicefoot from "../comps/Footer/Spicefoot.js";

function Vacancies() {
  const subHeader = "Our Services";

  const image =
    "https://atticus.property/wp-content/uploads/2014/09/modern-style-new-york-architecture-firms-top-architecture-pr-firm-celebrates-archtober-in-nyc-october-16-g.jpg";

  const inlineStyle = {
    backgroundColor: "rgba(43, 56, 56, 0.5)",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh"
  };

  return (
    <>
      <div className="Paraview">
        <Nav />
        <div className="HomeLanding">
          <Parallax bgImage={image} strength={200}>
            <div style={inlineStyle}>
              <img
                src="./img/fullogo.png"
                style={{ maxWidth: "300px", height: "182px" }}
              />
            </div>
          </Parallax>
        </div>
        <Header subHeader={subHeader} />

        <div className="HomeServBoxes">
          <IconContext.Provider value={{ color: "#fff" }}>
            <div className="ServLinkbox">
              <div className="Icon">
                <FaIcons.FaHandshake />
              </div>
              <Linkbox boxes={HomeAcq} />
            </div>
            <div className="ServLinkbox">
              <div className="Icon">
                <FaIcons.FaChessKnight />
              </div>
              <Linkbox boxes={HomeMan} />
            </div>
          </IconContext.Provider>
        </div>

        <div className="SpiceHomeContainer">
          <div className="SpiceLinkbox">
            <Linkbox boxes={HomeSpi} />
          </div>
        </div>

        <div className="HomeAbout">
          <h1>Property isn’t just what we do, it is our passion!</h1>
          <p>
            We live, breathe and dream property. You couldn’t be in better
            hands.
          </p>
          <center>
            <div className="Famphoto">TEAM</div>
            <div className="HomeAboutton">
              <a href="/about">VIEW TEAM</a>
            </div>
          </center>
        </div>
        <Footer />
      </div>
      {/* <>
      <Spicenav />
      <div className="Viewport">
        <div className="Mainpage">
          <h1>VACANT</h1>
        </div>
      </div>
      <Spicefoot />
    </> */}
    </>
  );
}

export default Vacancies;
