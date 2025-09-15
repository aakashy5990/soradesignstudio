import React from "react";
import "./FooterPort.css";
import logo from "../../assets/PortfolioImg/main_logo.png";
import { Link } from "react-router-dom";
import SocialIcons from "../../SocialIcons/SocialIcons";

function FooterPort() {
  return (
    <div className="footer_port">
      <div className="footer_nav_container">
        <div className="footer_nav_item_port">
          <li><SocialIcons.PinterestIcon /></li>
          <li><SocialIcons.LinkedinIcon /></li>
          <li><SocialIcons.BehanceIcon /></li>
          <li><SocialIcons.YoutubeIcon /></li>
        </div>
      </div>

      <div className="footer_logo_port">
        <a href="https://portfolio/soradesignstudio.com/">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="footer_contact_port">
        <p className="footer_number">+91 7455925669</p>
        <p className="footer_email">vikashy263@gmail.com</p>
      </div>

      <div className="footer_myweb_port">
        <a className="weblink" href="soradesignstudio.com">
          soradesignstudio.com
        </a>
      </div>
    </div>
  );
}

export default FooterPort;
