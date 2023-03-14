import React from "react";
import { Parallax, ParallaxLayer } from "react-spring/addons";

import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons";

import Nav from "../comps/Nav/Nav.js";
import Header from "../comps/Header/Header.js";
import Linkbox from "../comps/Linkbox/Linkbox.js";
import { HomeAcq, HomeMan, HomeSpi } from "../comps/Linkbox/LinkboxData.js";
import Footer from "../comps/Footer/Footer.js";

function Home() {
  const subHeader = "Our Services";

  return (
    <>
      <div className="Paraview">
        <Parallax pages={window.innerWidth < 1005 ? 5.5 : 4.5}>
          <ParallaxLayer
            offset={0}
            speed={0.05}
            style={{
              backgroundImage: `url(https://atticus.property/wp-content/uploads/2014/09/modern-style-new-york-architecture-firms-top-architecture-pr-firm-celebrates-archtober-in-nyc-october-16-g.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "112vh"
            }}
          />
          <ParallaxLayer
            offset={0}
            speed={0}
            style={{
              backgroundColor: "#202b2a",
              opacity: "55%",
              backgroundSize: "cover"
            }}
          />
          <ParallaxLayer
            offset={0}
            speed={0}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none"
            }}
          >
            <img
              src="./img/fullogo.png"
              style={{ maxWidth: "300px", height: "182px" }}
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={0}
            style={{
              position: "absolute"
            }}
          >
            <Nav />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0}
            style={{
              backgroundColor: "#202b2a",
              display: "flex",
              minHeight: "100%",
              flexDirection: "column"
            }}
          >
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
          </ParallaxLayer>

          <ParallaxLayer
            offset={window.innerWidth < 1005 ? 5 : 4}
            speed={0}
            style={{
              display: "flex",
              alignItems: "flex-end",
              height: "50vh"
            }}
          >
            <div className="HomeFoot">
              <Footer />
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}

export default Home;
