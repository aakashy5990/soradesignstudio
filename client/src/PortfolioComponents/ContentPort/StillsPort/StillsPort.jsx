import React from "react";

import addesigns from "../../../assets/PortfolioImg/Stills/addesigns.webp";
import creativephotomanipulation from "../../../assets/PortfolioImg/Stills/creativephotomanipulation.webp";
import creativephotoshopedit from "../../../assets/PortfolioImg/Stills/creativephotoshopedit.webp";
import doctorsdaycreativedesign from "../../../assets/PortfolioImg/Stills/doctorsdaycreativedesign.webp";
import doctorsdayphotoshopedit from "../../../assets/PortfolioImg/Stills/doctorsdayphotoshopedit.webp";
import freepikEnhance85525 from "../../../assets/PortfolioImg/Stills/freepik__enhance__85525.jpeg";
import ganeshaphotoedit from "../../../assets/PortfolioImg/Stills/ganeshaphotoedit.webp";
import ikeaaddesigns from "../../../assets/PortfolioImg/Stills/ikeaaddesigns.webp";
import KFCaddesigns from "../../../assets/PortfolioImg/Stills/KFCaddesigns.webp";
import krishnajanmashtmidesign from "../../../assets/PortfolioImg/Stills/krishnajanmashtmidesign.webp";
import malariadayphotoshopedit from "../../../assets/PortfolioImg/Stills/malariadayphotoshopedit.webp";
import mcdonaladsdesigns from "../../../assets/PortfolioImg/Stills/mcdonaladsdesigns.webp";
import netflixaddesigns from "../../../assets/PortfolioImg/Stills/netflixaddesigns.webp";
import photoshopdesigndurex from "../../../assets/PortfolioImg/Stills/photoshopdesigndurex.webp";
import photoshopedits from "../../../assets/PortfolioImg/Stills/photoshopedits.webp";
import redbullsleepdaydesign from "../../../assets/PortfolioImg/Stills/redbullsleepdaydesign.webp";
import uniquedesigns from "../../../assets/PortfolioImg/Stills/uniquedesigns.webp";
import upvcdoorcreativedesigns from "../../../assets/PortfolioImg/Stills/upvcdoorcreativedesigns.webp";
import upvcwindowcreativeads from "../../../assets/PortfolioImg/Stills/upvcwindowcreativeads.webp";
import worldmalariaphotoshop from "../../../assets/PortfolioImg/Stills/worldmalariaphotoshop.webp";

function StillsPort({ activeBox }) {
  const StillsPortData = [
    { src: addesigns, alt: "Ad Designs" },
    { src: creativephotomanipulation, alt: "Creative Photo Manipulation" },
    { src: creativephotoshopedit, alt: "Creative Photoshop Edit" },
    { src: doctorsdaycreativedesign, alt: "Doctor's Day Creative Design" },
    { src: doctorsdayphotoshopedit, alt: "Doctor's Day Photoshop Edit" },
    { src: freepikEnhance85525, alt: "Enhanced Freepik Image 85525" },
    { src: ganeshaphotoedit, alt: "Ganesha Photo Edit" },
    { src: ikeaaddesigns, alt: "IKEA Ad Designs" },
    { src: KFCaddesigns, alt: "KFC Ad Designs" },
    { src: krishnajanmashtmidesign, alt: "Krishna Janmashtami Design" },
    { src: malariadayphotoshopedit, alt: "Malaria Day Photoshop Edit" },
    { src: mcdonaladsdesigns, alt: "McDonald's Ad Designs" },
    { src: netflixaddesigns, alt: "Netflix Ad Designs" },
    { src: photoshopdesigndurex, alt: "Photoshop Design for Durex" },
    { src: photoshopedits, alt: "Photoshop Edits" },
    { src: redbullsleepdaydesign, alt: "Red Bull Sleep Day Design" },
    { src: uniquedesigns, alt: "Unique Designs" },
    { src: upvcdoorcreativedesigns, alt: "UPVC Door Creative Designs" },
    { src: upvcwindowcreativeads, alt: "UPVC Window Creative Ads" },
    { src: worldmalariaphotoshop, alt: "World Malaria Day Photoshop" },
  ];

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
          <img key={index} src={item.src} alt={item.alt} />
        ))}
      </main>
    </div>
  );
}

export default StillsPort;
