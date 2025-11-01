import React from "react";
import { StillsPortData } from "../../../assets/assets-portfolio";

function StillsPort({ activeBox }) {
  return (
    <div
      id="stills"
      className={`tab-content ${activeBox === "stillsport" ? "activeport" : ""}`}
    >
      <div className="poster_container">
        <div className="poster_section">
          <p className="poster_heading">
            Designs That Don’t Just Show, They Say Something.
          </p>
          <p className="poster_pera">
            Photo manipulation is all about transforming the ordinary into the
            extraordinary. Whether it's crafting surreal worlds or creating
            hyper-realistic visuals, it’s a powerful way to tell stories and
            evoke emotions. 🎨 Every image has a hidden potential—just waiting
            to be brought to life with a touch of creativity. What stories do
            your photos tell?
          </p>
        </div>
      </div>
      <main>
        {StillsPortData.map((item, index) => (
          <img key={index} src={item} loading="lazy" />
        ))}
      </main>
    </div>
  );
}

export default StillsPort;
