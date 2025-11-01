import React from "react";
import { BrochurePortData } from "../../../assets/assets-portfolio";

function BrochurePort({ activeBox }) {
  return (
    <div
      id="Brochure"
      className={`tab-content ${activeBox === "brochureport" ? "activeport" : ""}`}
    >
      <div className="poster_container">
        <div className="poster_section">
          <p className="poster_heading">
            Brochures That Don't Just Look Good, They Work.
          </p>
          <p className="poster_pera">
            Make a lasting impression with brochure designs that blend
            creativity and clarity. Each design is thoughtfully crafted to
            showcase your brand’s message with eye-catching visuals, compelling
            layouts, and engaging content. From sleek corporate brochures to
            vibrant promotional pieces, the goal is to create designs that not
            only look stunning but also effectively communicate your story.
            Discover how a well-designed brochure can elevate your brand and
            captivate your audience.
          </p>
        </div>
      </div>
      <main>
        {BrochurePortData.map((item, index) => (
          <img key={index} src={item} loading="lazy" />
        ))}
      </main>
    </div>
  );
}

export default BrochurePort;
