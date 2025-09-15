import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="inner_footer">
      <div className="inner_footer_child">
        <p>© 2025 Sora. All Rights Reserved.</p>
        <p>
          Designed by Aakash - <Link to="tel:+918791993268">+91 8791993268</Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
