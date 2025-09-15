import React from "react";
import {risinggemGuidelines} from "../../../../assets/assetschild"

function RisingGemGuidelines() {
  return (
    <>
      {risinggemGuidelines.map((item, index) => (
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

export default RisingGemGuidelines;
