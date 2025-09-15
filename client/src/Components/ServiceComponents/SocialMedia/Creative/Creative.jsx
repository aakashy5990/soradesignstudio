import React from "react";
import {creativeImages} from "../../../../assets/assetschild"

function Creative() {
  return (
    <>
      {creativeImages.map((item, index) => (
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

export default Creative;
