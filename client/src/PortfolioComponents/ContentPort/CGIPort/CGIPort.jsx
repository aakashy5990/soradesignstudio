import React from "react";

import cgi1 from "../../../assets/PortfolioImg/CGI/1.png";
import cgi2 from "../../../assets/PortfolioImg/CGI/2.png";
import cgi4 from "../../../assets/PortfolioImg/CGI/4.png";

import designAds3d from "../../../assets/PortfolioImg/CGI/3ddesignads.webp";
import whiskyModel from "../../../assets/PortfolioImg/CGI/3dmodellingwhisky.webp";

import jewelryDesign3d from "../../../assets/PortfolioImg/CGI/3djewelrydesign.webp";
import jewelryDesigns3d from "../../../assets/PortfolioImg/CGI/3djewelrydesigns.webp";
import modeling3d from "../../../assets/PortfolioImg/CGI/3dmodeling.webp";
import perfumeDesign3d from "../../../assets/PortfolioImg/CGI/3dperfumedesign.webp";
import perfumeDesigns3d from "../../../assets/PortfolioImg/CGI/perfumedesigns3d.webp";
import upvcWindowDesigns3d from "../../../assets/PortfolioImg/CGI/upvcwindow3ddesiogns.webp";
import upvcWindowAds3ds from "../../../assets/PortfolioImg/CGI/upvcwindowads3ds.webp";

function CGIPort({activeBox}) {

  const CGIPortData = [
    { src: cgi1, alt: "CGI Image 1" },
    { src: cgi2, alt: "CGI Image 2" },
    { src: cgi4, alt: "CGI Image 4" },
    { src: designAds3d, alt: "3D Design Ads for UPVC Windows" },
    { src: whiskyModel, alt: "3D Whisky Bottle Modeling" },
    { src: jewelryDesign3d, alt: "3D Jewelry Design" },
    { src: jewelryDesigns3d, alt: "3D Jewelry Designs" },
    { src: modeling3d, alt: "General 3D Modeling" },  
    { src: perfumeDesign3d, alt: "3D Perfume Design" },
    { src: perfumeDesigns3d, alt: "3D Perfume Designs" },
    { src: upvcWindowDesigns3d, alt: "3D UPVC Window Designs" },
    { src: upvcWindowAds3ds, alt: "3D UPVC Window Advertisements" },
  ];

  return (
    <div id="cgi" className={`tab-content ${activeBox === 'cgiport' ? 'activeport' : ''}`}>
      <div className="poster_container">
        <div className="poster_section">
          <p className="poster_heading">
            When It’s Not Shot, It’s Rendered.
          </p>
          <p className="poster_pera">
            3D modeling is more than just creating shapes; it’s about bringing
            ideas to life! From stunning visualizations to intricate designs,
            each model tells a unique story in a three-dimensional world. Let
            your imagination soar as we transform concepts into breathtaking 3D
            realities. What will you create today?
          </p>
        </div>
      </div>
      <main>
        {CGIPortData.map((item,index) => (
          <img key={index} src={item.src} alt={item.alt} />
        ))}
      </main>
    </div>
  );
}

export default CGIPort;
