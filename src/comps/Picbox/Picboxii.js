import React from "react";

const Picbox = ({ boxes }) => {
  return (
    <>
      <div className="Picwrap">
        {boxes.map((box, index) => {
          return (
            <a key={index} href={box.path}>
              {box.managed ? (
                <div className="Picbox">
                  <img src={box.img} alt={box.alt} width="100%" />
                  <p>{box.text}</p>
                </div>
              ) : null}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Picbox;
