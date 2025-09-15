import React from "react";
import {autismImages} from "../../../../assets/assetschild"

function Autism() {
  return (
    <>
      {autismImages.map((item, index) => (
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

export default Autism;
