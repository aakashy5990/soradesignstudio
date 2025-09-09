import React from "react";
import { IoClose } from "react-icons/io5";
import './ServicePopUp.css'


function ServicePopUp({popup,setPopup,videoSrc}) {
  return (
    <div className={`service-popup-container ${popup ? "active" : ""}`} id="popup">
      <div className="service-popup-box">
        <span className="service-close-btn" onClick={()=>setPopup(false)} id="close-popup">
          <IoClose size={25} />
        </span>
        <iframe
          id="video-frame"
          src={videoSrc}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default ServicePopUp;
