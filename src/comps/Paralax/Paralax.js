import React from "react";
import { Parallax, ParallaxLayer } from "react-spring/addons";

function Paralax() {
  return (
    <div className="Paraview">
      <Parallax pages={1.2} style={{ overflow: "hidden" }}>
        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{
            backgroundImage: `url(https://atticus.property/wp-content/uploads/2014/09/modern-style-new-york-architecture-firms-top-architecture-pr-firm-celebrates-archtober-in-nyc-october-16-g.jpg)`,
            backgroundSize: "cover"
          }}
        />
        <ParallaxLayer
          offset={0}
          speed={0}
          style={{
            backgroundColor: "#202b2a",
            opacity: "60%",
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
          <img src="./img/fullogo.png" style={{ width: "40%" }} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Paralax;
