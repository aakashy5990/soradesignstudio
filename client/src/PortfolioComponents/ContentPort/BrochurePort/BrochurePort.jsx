import React from "react";

import eure01 from "../../../assets/PortfolioImg/brochure/eure-01.webp";
import eure02 from "../../../assets/PortfolioImg/brochure/eure-02.webp";
import eure03 from "../../../assets/PortfolioImg/brochure/eure-03.webp";
import eure04 from "../../../assets/PortfolioImg/brochure/eure-04.webp";
import eure05 from "../../../assets/PortfolioImg/brochure/eure-05.webp";
import upvc01 from "../../../assets/PortfolioImg/brochure/upvcwindowsbrochuredesign-01.webp";
import upvc02 from "../../../assets/PortfolioImg/brochure/upvcwindowsbrochuredesign-02.webp";
import upvc03 from "../../../assets/PortfolioImg/brochure/upvcwindowsbrochuredesign-03.webp";
import upvc04 from "../../../assets/PortfolioImg/brochure/upvcwindowsbrochuredesign-04.webp";

function BrochurePort({ activeBox }) {
  const brochureData = [
    { src: eure01, alt: "eure-01" },
    { src: eure02, alt: "eure-02" },
    { src: eure03, alt: "eure-03" },
    { src: eure04, alt: "eure-04" },
    { src: eure05, alt: "eure-05" },
    { src: upvc01, alt: "upvcwindowsbrochuredesign-01" },
    { src: upvc02, alt: "upvcwindowsbrochuredesign-02" },
    { src: upvc03, alt: "upvcwindowsbrochuredesign-03" },
    { src: upvc04, alt: "upvcwindowsbrochuredesign-04" },
  ];

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
        {brochureData.map((item, index) => (
          <img key={index} src={item.src} alt={item.alt} />
        ))}
      </main>
    </div>
  );
}

export default BrochurePort;
