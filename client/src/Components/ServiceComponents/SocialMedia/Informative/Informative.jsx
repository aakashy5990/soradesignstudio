import React from "react";
import {informativeImages} from "../../../../assets/assetschild"

function Informative() {
  return (
    <>
      {informativeImages.map((item, index) => (
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

export default Informative;
