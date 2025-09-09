import React from "react";
import { BoatArray } from "../../../../assets/assetschild";

function Boat() {
  return (
    <>
      {BoatArray.map((item, index) => (
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

export default Boat;
