import React from "react";
import {WindowArray} from "../../../../assets/assetschild"

function Window() {
  return (
    <>
      {WindowArray.map((item, index) => (
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

export default Window;
