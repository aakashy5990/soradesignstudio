import React from "react";
import {cgiImages} from "../../../../assets/assetschild"

function Cgi() {
  return (
    <>
      {cgiImages.map((item, index) => (
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

export default Cgi;
