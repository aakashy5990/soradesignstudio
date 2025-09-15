import React from "react";
import {JewelryArray} from "../../../../assets/assetschild"

function Jewelry() {
  return (
    <>
      {JewelryArray.map((item, index) => (
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

export default Jewelry;
