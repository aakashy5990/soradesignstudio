import React from "react";
import {paceGuidelines} from "../../../../assets/assetschild"

function PaceGuidelines() {
  return (
    <>
      {paceGuidelines.map((item, index) => (
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

export default PaceGuidelines;
