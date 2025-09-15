import React from "react";
import {WhiskyModelArray} from "../../../../assets/assetschild"

function WhiskyModel() {
  return (
    <>
      {WhiskyModelArray.map((item, index) => (
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

export default WhiskyModel;
