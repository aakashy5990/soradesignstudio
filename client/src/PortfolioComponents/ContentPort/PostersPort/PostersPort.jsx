import React, { useEffect, useState } from "react";
import "./PostersPort.css";
import { PostersPortData } from "../../../assets/assets-portfolio";

function PostersPort({activeBox}) {
  const [selectedImage, setSelectedImage] = useState(null);

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
      <div className="posterMasonry">
        {PostersPortData.map((item,index)=>(
          <button
            className="posterMasonryItem"
            key={index}
            onClick={() => setSelectedImage(item)}
            type="button"
          >
            <img src={item} alt="" loading="lazy" />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="posterLightbox"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="posterLightboxClose"
            onClick={() => setSelectedImage(null)}
            type="button"
            aria-label="Close image preview"
          >
            &times;
          </button>
          <img
            className="posterLightboxImage"
            src={selectedImage}
            alt=""
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default PostersPort;
