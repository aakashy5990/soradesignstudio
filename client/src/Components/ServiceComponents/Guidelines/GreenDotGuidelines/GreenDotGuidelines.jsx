import React from "react";
import {greendotGuidelines} from "../../../../assets/assetschild"

function GreenDotGuidelines() {
  return (
    <>
      {greendotGuidelines.map((item, index) => (
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

export default GreenDotGuidelines;
