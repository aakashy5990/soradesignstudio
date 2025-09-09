import React from "react";
import {beesImages} from "../../../../assets/assetschild"

function Bees() {
  return (
    <>
      {beesImages.map((item, index) => (
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

export default Bees;
