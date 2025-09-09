import React from "react";
import {alaknandaGuidelines} from "../../../../assets/assetschild"

function AlaknandaGuidelines() {
  return (
    <>
      {alaknandaGuidelines.map((item, index) => (
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

export default AlaknandaGuidelines;
