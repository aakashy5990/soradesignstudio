import React from "react";
import {windowspaceGuidelines} from "../../../../assets/assetschild"

function WindowSpaceGuidelines() {
  return (
    <>
      {windowspaceGuidelines.map((item, index) => (
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

export default WindowSpaceGuidelines;
