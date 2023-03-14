import React from "react";

const Picbox = ({ boxes }) => {
  return (
    <>
      <div className="Picwrap">
        {boxes.map((box, index) => {
          return (
            <a key={index} href={box.path}>
              <div className="Picbox">
                <img src={box.img} alt={box.alt} width="100%" />
                <p>{box.text}</p>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Picbox;
