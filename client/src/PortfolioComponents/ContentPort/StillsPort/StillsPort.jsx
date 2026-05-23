import React, { useEffect, useState } from "react";
import './StillsPort.css'
import printwindow from '../../../assets/PortfolioImg/Stills/printWindow.png'
import printSpider from '../../../assets/PortfolioImg/Stills/printSpider.png'
import savebeesprintad from '../../../assets/PortfolioImg/Stills/savebeesprintad.png'
import printEarth from '../../../assets/PortfolioImg/Stills/printEarth.png'


import upvcprintad from '../../../assets/PortfolioImg/Stills/upvcprintad.png'
import savebeesprintad3 from '../../../assets/PortfolioImg/Stills/savebeesprintad3.png'
import printUpvc from '../../../assets/PortfolioImg/Stills/printUpvc.png'
import savebeesprintad2 from '../../../assets/PortfolioImg/Stills/savebeesprintad2.png'


import printBurnEarth from '../../../assets/PortfolioImg/Stills/printBurnEarth.png'
import walnuttrackspace from '../../../assets/PortfolioImg/Stills/walnuttrackspace.png'
import printSleep from '../../../assets/PortfolioImg/Stills/printSleep.png'
import proproductad from '../../../assets/PortfolioImg/Stills/proproductad-01.png'


import janmashtmi from '../../../assets/PortfolioImg/Stills/janmashtmi.png'
import adcreativedurex from '../../../assets/PortfolioImg/Stills/adcreativedurex.png'
import diabetesadprint from '../../../assets/PortfolioImg/Stills/diabetesadprint.png'
import healthprintad from '../../../assets/PortfolioImg/Stills/healthprintad.png'


import coimbatoreaddesign from '../../../assets/PortfolioImg/Stills/coimbatore-addesign.png'
import doctorsprintads from '../../../assets/PortfolioImg/Stills/doctorsprintads.png'
import medicineeffectprintad from '../../../assets/PortfolioImg/Stills/medicineeffectprintad.png'
import metallicgrey3trackspace from '../../../assets/PortfolioImg/Stills/metallicgrey3trackspace.png'


import printBull from '../../../assets/PortfolioImg/Stills/printBull.png'
import printBurger from '../../../assets/PortfolioImg/Stills/printBurger.png'
import printGanesh from '../../../assets/PortfolioImg/Stills/printGanesh.png'
import printMedicine from '../../../assets/PortfolioImg/Stills/printMedicine.png'



function StillsPort({ activeBox }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const stillImages = [
    printwindow,
    printSpider,
    printEarth,
    savebeesprintad,
    upvcprintad,
    savebeesprintad3,
    savebeesprintad2,
    printUpvc,
    printBurnEarth,
    walnuttrackspace,
    printSleep,
    proproductad,
    janmashtmi,
    adcreativedurex,
    diabetesadprint,
    healthprintad,
    coimbatoreaddesign,
    doctorsprintads,
    medicineeffectprintad,
    metallicgrey3trackspace,
    printBull,
    printBurger,
    printGanesh,
    printMedicine,
  ];

  useEffect(() => {
    if (!selectedImage) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

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
      
      <div className="printmain">
        <div className="printGallery">
          {stillImages.map((image, index) => (
            <button
              className="printItem"
              key={`${image}-${index}`}
              onClick={() => setSelectedImage(image)}
              type="button"
            >
              <img src={image} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="stillsLightbox"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="stillsLightboxClose"
            onClick={() => setSelectedImage(null)}
            type="button"
            aria-label="Close image preview"
          >
            &times;
          </button>
          <img
            className="stillsLightboxImage"
            src={selectedImage}
            alt=""
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

    </div>
  );
}

export default StillsPort;
