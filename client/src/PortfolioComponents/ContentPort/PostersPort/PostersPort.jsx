import React from "react";
import "./PostersPort.css";
import coverdesign from "../../../assets/PortfolioImg/posters/coverdesign.png";
import Celestial from "../../../assets/PortfolioImg/posters/Celestial.webp";
import CyberpunkMagazine from "../../../assets/PortfolioImg/posters/CyberpunkMagazine.webp";
import Dreadposter from "../../../assets/PortfolioImg/posters/Dreadposter.webp";
import FlighttoFreedomposter from "../../../assets/PortfolioImg/posters/FlighttoFreedomposter.webp";
import Gameposterdesign from "../../../assets/PortfolioImg/posters/Gameposterdesign.webp";
import gamingposter from "../../../assets/PortfolioImg/posters/gamingposter.webp";
import Geniusposterdesign from "../../../assets/PortfolioImg/posters/Geniusposterdesign.webp";
import lunarlegacybookcover from "../../../assets/PortfolioImg/posters/lunarlegacybookcover.webp";
import OceansWhisper from "../../../assets/PortfolioImg/posters/Ocean_s Whisper.webp";
import photoshopdesigns from "../../../assets/PortfolioImg/posters/photoshopdesigns.webp";
import photoshopposterdesign from "../../../assets/PortfolioImg/posters/photoshopposterdesign.webp";
import posterdesigns from "../../../assets/PortfolioImg/posters/posterdesigns.webp";

function PostersPort({activeBox}) {
  const PostersPortData = [
    coverdesign,
    Celestial,
    CyberpunkMagazine,
    Dreadposter,
    FlighttoFreedomposter,
    Gameposterdesign,
    gamingposter,
    Geniusposterdesign,
    lunarlegacybookcover,
    OceansWhisper,
    photoshopdesigns,
    photoshopposterdesign,
    posterdesigns,
  ];

  return (
    <div className={`tab-content ${activeBox === 'posterport' ? 'activeport':''}`}>
      <div className="poster_container">
        <div className="poster_section">
          <p className="poster_heading">
              Every Poster Tells a Story.
          </p>
          <p className="poster_pera">
            Photo manipulation is a creative art that transforms ordinary photos
            into extraordinary works of art by blending imagination with
            reality. This digital editing technique involves creatively altering
            or combining images to produce stunning visuals. Whether it's
            creating surreal fantasy worlds or crafting hyper-realistic edits,
            photo manipulation can tell a compelling story, evoke strong
            emotions, or bring unique concepts to life. Our expert photo
            manipulation services turn everyday photos into captivating,
            eye-catching artwork that stands out. Looking to transform your
            images with professional photo manipulation? Explore how our editing
            expertise can make your visuals unforgettable.
          </p>
        </div>
      </div>
      <main>
        {PostersPortData.map((item,index)=>(
          <img key={index} src={item} alt={item} />
        ))}
      </main>
    </div>
  );
}

export default PostersPort;
