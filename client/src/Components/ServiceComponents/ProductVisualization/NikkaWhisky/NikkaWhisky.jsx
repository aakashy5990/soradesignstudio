import React from "react";
import {NikkaWhiskyArray} from "../../../../assets/assetschild"

function NikkaWhisky() {
  return (
    <>
      {NikkaWhiskyArray.map((item, index) => (
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

export default NikkaWhisky;
