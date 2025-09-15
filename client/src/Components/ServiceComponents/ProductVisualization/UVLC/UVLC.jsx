import React from "react";
import {UpvcLangleArray} from "../../../../assets/assetschild"

function UVLC() {
  return (
    <>
      {UpvcLangleArray.map((item, index) => (
        <main key={index}>
          <img
            src={item}
            alt="Sample WebP Image"
            className="responsive-image"
          />
        </main>
      ))}
    </>
  );
}

export default UVLC;
