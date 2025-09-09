import React from "react";
import {thunderGuidelines} from "../../../../assets/assetschild"

function ThunderGuidelines() {
  return (
    <>
      {thunderGuidelines.map((item, index) => (
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

export default ThunderGuidelines;
