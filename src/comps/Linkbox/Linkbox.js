import React from "react";

const Linkbox = ({ boxes }) => {
  return (
    <>
      <div className="Linkbox">
        {boxes.map((box, index) => {
          return (
            <div key={index} className={box.cName}>
              <h1>{box.header}</h1>
              <p>{box.text}</p>
              <div className={box.button}>
                <a href={box.path}>{box.label}</a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Linkbox;
