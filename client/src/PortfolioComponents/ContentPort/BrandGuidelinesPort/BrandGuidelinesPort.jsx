import React from 'react'

import cv01 from "../../../assets/PortfolioImg/brandguidelines/CV-01.webp";
import cv02 from "../../../assets/PortfolioImg/brandguidelines/CV-02.webp";
import cv03 from "../../../assets/PortfolioImg/brandguidelines/CV-03.webp";
import cv04 from "../../../assets/PortfolioImg/brandguidelines/CV-04.webp";
import cv05 from "../../../assets/PortfolioImg/brandguidelines/CV-05.webp";
import cv06 from "../../../assets/PortfolioImg/brandguidelines/CV-06.webp";
import rising01 from "../../../assets/PortfolioImg/brandguidelines/rising-01.webp";
import rising02 from "../../../assets/PortfolioImg/brandguidelines/rising-02.webp";
import rising03 from "../../../assets/PortfolioImg/brandguidelines/rising-03.webp";
import rising04 from "../../../assets/PortfolioImg/brandguidelines/rising-04.webp";
import rising05 from "../../../assets/PortfolioImg/brandguidelines/rising-05.webp";
import ws01 from "../../../assets/PortfolioImg/brandguidelines/WS-01.webp";
import ws02 from "../../../assets/PortfolioImg/brandguidelines/WS-02.webp";
import ws03 from "../../../assets/PortfolioImg/brandguidelines/WS-03.webp";
import ws04 from "../../../assets/PortfolioImg/brandguidelines/WS-04.webp";
import ws05 from "../../../assets/PortfolioImg/brandguidelines/WS-05.webp";
import ws06 from "../../../assets/PortfolioImg/brandguidelines/WS-06.webp";
import ws07 from "../../../assets/PortfolioImg/brandguidelines/WS-07.webp";
import dwed01 from "../../../assets/PortfolioImg/brandguidelines/dwed-01.jpg";


function BrandGuidelinesPort({activeBox}) {

  const brandGuidelinesPortData = [
    { src: cv01, alt: "CV-01" },
    { src: cv02, alt: "CV-02" },
    { src: cv03, alt: "CV-03" },
    { src: cv04, alt: "CV-04" },
    { src: cv05, alt: "CV-05" },
    { src: cv06, alt: "CV-06" },
    { src: rising01, alt: "rising-01" },
    { src: rising02, alt: "rising-02" },
    { src: rising03, alt: "rising-03" },
    { src: rising04, alt: "rising-04" },
    { src: rising05, alt: "rising-05" },
    { src: ws01, alt: "WS-01" },
    { src: ws02, alt: "WS-02" },
    { src: ws03, alt: "WS-03" },
    { src: ws04, alt: "WS-04" },
    { src: ws05, alt: "WS-05" },
    { src: ws06, alt: "WS-06" },
    { src: ws07, alt: "WS-07" },
    { src: dwed01, alt: "dwed-01" },
  ];
  

  return (
    <div id="Brand" className={`tab-content ${
      activeBox === "brandguidelinesport" ? "activeport" : ""
    }`}>
    <div className="poster_container">
        <div className="poster_section">
            <p className="poster_heading">Not Just Logos. Complete Brand Languages.</p>
            <p className="poster_pera">Brand guidelines are the backbone of your visual identity, ensuring every
                element tells your story with clarity and consistency. From color palettes to typography, every
                detail matters in building a memorable brand.
                Ready to elevate your brand presence? Let’s define the rules that make your brand unmistakable!
            </p>
        </div>
    </div>
    <main>
      {brandGuidelinesPortData.map((item,index) => (
        <img key={index} src={item.src} alt={item.alt}/>
      ))}
    </main>
</div>
  )
}

export default BrandGuidelinesPort