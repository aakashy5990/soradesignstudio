import React from "react";
import "./PopUpPort.css";
import { IoCloseSharp } from "react-icons/io5";

function PopUpPort({ videoSrc, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="popup-container_port" id="popup_port" onClick={onClose}>
      <div className="popup-box_port" id="popup-box_port" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn_port" id="close-popup_port" onClick={onClose}>
        <IoCloseSharp />
        </span>
        <iframe
          id="video-frame_port"
          src={videoSrc}
          title="Popup Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default PopUpPort;
