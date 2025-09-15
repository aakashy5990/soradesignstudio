import React from "react";
import {risingdiamondGuidelines} from "../../../../assets/assetschild"

function RisingDiamondGuidelines() {
  return (
    <>
      {risingdiamondGuidelines.map((item, index) => (
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

export default RisingDiamondGuidelines;
