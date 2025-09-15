import React from "react";
import {AppleWatchArray} from "../../../../assets/assetschild"

function AppleWatch() {
  return (
    <>
      {AppleWatchArray.map((item, index) => (
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

export default AppleWatch;
