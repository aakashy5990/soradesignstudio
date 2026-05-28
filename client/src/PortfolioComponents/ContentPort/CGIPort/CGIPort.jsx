import React, { useEffect, useMemo, useState } from "react";
import "./CGIPort.css";
import { CGIPortData } from "../../../assets/assets-portfolio";

function CGIPort({activeBox}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const randomCGIPortData = useMemo(() => {
    return [...CGIPortData].sort(() => Math.random() - 0.5);
  }, []);

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
      <div className="cgiMain">
        <div className="cgiGallery">
          {randomCGIPortData.map((item,index) => (
            <button
              className="cgiItem"
              key={`${item}-${index}`}
              onClick={() => setSelectedImage(item)}
              type="button"
            >
              <img src={item} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="cgiLightbox"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="cgiLightboxClose"
            onClick={() => setSelectedImage(null)}
            type="button"
            aria-label="Close image preview"
          >
            &times;
          </button>
          <img
            className="cgiLightboxImage"
            src={selectedImage}
            alt=""
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default CGIPort;
