import React from "react";
import './ServiceFooter.css'
import { Link } from "react-router-dom";

function ServiceFooter() {
  return (
    <div className="service_footer_container">
      <p>Custom Requests?</p>
      <div className="service_button_container">
        <Link to="https://whatsform.com/4bj9mX\">
          <button className="enquire_button">Enquire now</button>
        </Link>
      </div>
    </div>
  );
}

export default ServiceFooter;
