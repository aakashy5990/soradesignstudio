import React from "react";
import {specialDayImages} from "../../../../assets/assetschild"

function SpecialDay() {
  return (
    <>
      {specialDayImages.map((item, index) => (
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

export default SpecialDay;
