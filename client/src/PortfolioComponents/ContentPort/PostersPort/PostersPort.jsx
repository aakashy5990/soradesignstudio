import React from "react";
import "./PostersPort.css";
import { PostersPortData } from "../../../assets/assets-portfolio";

function PostersPort({activeBox}) {

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
          <img key={index} src={item} alt={item} loading="lazy" />
        ))}
      </main>
    </div>
  );
}

export default PostersPort;
