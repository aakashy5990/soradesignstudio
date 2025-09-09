import React from "react";
import {PerfumeArray} from "../../../../assets/assetschild"

function Perfume() {
  return (
    <>
      {PerfumeArray.map((item, index) => (
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

export default Perfume;
