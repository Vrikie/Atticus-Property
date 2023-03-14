import React from "react";

const Picboxiii = ({ boxes }) => {
  return (
    <>
      <div className="Portrainer">
        {boxes.map((box, index) => {
          return (
            <div className="Portraitbox">
              <img src={box.img} alt={box.alt} width="100%" />
              <h1>{box.name}</h1>
              <p>{box.posit}</p>
              <div className="Abounderline"></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Picboxiii;
