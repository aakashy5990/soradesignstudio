import React from "react";
import {creatorzvisionGuidelines} from "../../../../assets/assetschild"

function CreatorzVisionGuidelines() {
  return (
    <>
      {creatorzvisionGuidelines.map((item, index) => (
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

export default CreatorzVisionGuidelines;
