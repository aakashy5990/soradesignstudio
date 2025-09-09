import React from "react";
import {OmnitrixArray} from '../../../../assets/assetschild'

function Omnitrix() {
  return (
    <>
      {OmnitrixArray.map((item, index) => (
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

export default Omnitrix;
