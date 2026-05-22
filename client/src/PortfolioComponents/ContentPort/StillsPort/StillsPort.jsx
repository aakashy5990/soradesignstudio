import React from "react";
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
          <div className="printItem printTall">
            <img src={printwindow} alt="" />
          </div>

          <div className="printItem printSquare">
            <img src={printSpider} alt="" />
          </div>

          <div className="printItem printTall">
            <img src={printEarth} alt="" />
          </div>

          <div className="printItem printSquare">
            <img src={savebeesprintad} alt="" />
          </div>
        
        </div>
      </div>

      <div className="printmain">
        <div className="printGallery">
          <div className="printItem printTall">
            <img src={upvcprintad} alt="" />
          </div>

          <div className="printItem printSquare">
            <img src={savebeesprintad3} alt="" />
          </div>

          <div className="printItem printTall">
            <img src={savebeesprintad2} alt="" />
          </div>

          <div className="printItem printSquare">
            <img src={printUpvc} alt="" />
          </div>
        
        </div>
      </div>

      <div className="printmain">
        <div className="printGallery">
          <div className="printItem printTall">
            <img src={printBurnEarth} alt="" />
          </div>

          <div className="printItem printSquare">
            <img src={walnuttrackspace} alt="" />
          </div>

          <div className="printItem printTall">
            <img src={printSleep} alt="" />
          </div>

          <div className="printItem printSquare">
            <img src={proproductad} alt="" />
          </div>
        
        </div>
      </div>

      <div className="printmain">
        <div className="printGallery">
          <div className="printItem printTall">
            <img src={janmashtmi} alt="" />
          </div>

          <div className="printItem printSquare">
            <img src={adcreativedurex} alt="" />
          </div>

          <div className="printItem printTall">
            <img src={diabetesadprint} alt="" />
          </div>

          <div className="printItem printSquare">
            <img src={healthprintad} alt="" />
          </div>
        
        </div>
      </div>

      <div className="printmain">
        <div className="printGallery">
          <div className="printItem printTall">
            <img src={coimbatoreaddesign} alt="" />
          </div>

          <div className="printItem printSquare">
            <img src={doctorsprintads} alt="" />
          </div>

          <div className="printItem printTall">
            <img src={medicineeffectprintad} alt="" />
          </div>

          <div className="printItem printSquare">
            <img src={metallicgrey3trackspace} alt="" />
          </div>
        
        </div>
      </div>

      <div className="printmain">
        <div className="printGallery">
          <div className="printItem printTall">
            <img src={printBull} alt="" />
          </div>

          <div className="printItem printSquare">
            <img src={printBurger} alt="" />
          </div>

          <div className="printItem printTall">
            <img src={printGanesh} alt="" />
          </div>

          <div className="printItem printSquare">
            <img src={printMedicine} alt="" />
          </div>
        
        </div>
      </div>

    </div>
  );
}

export default StillsPort;
