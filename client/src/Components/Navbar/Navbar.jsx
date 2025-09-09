import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuactives, setMenuactives] = useState(false);

  const toggleMenu = () => {
    setMenuactives(!menuactives);
  };

  const closeMenu = () => {
    setMenuactives(false);
  };

  useEffect(() => {
    document.body.style.overflow = menuactives ? "hidden" : "auto";
  }, [menuactives]);

  return (
    <>
      <header className="header">
        <li>
          <a className="main_nav_home" href="https://soradesignstudio.com/">
            Home
          </a>
        </li>

        <a href="https://soradesignstudio.com/" className="nav_logo_link">
          <img className="nav_logo_img" id="logo" src={logo} />
        </a>
        <div
          className={`hamb ${menuactives ? "actives" : ""}`}
          id="menu-toggle"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className="navbar">
          <li>
            <Link
              to="/portfolio"
              className="main_nav_portfolio"
            >
              Portfolio
            </Link>
          </li>
        </nav>
      </header>
      <nav
        className={`mobile_nav ${menuactives ? "actives" : ""}`}
        id="menu-list"
      >
        <div className="remove_icon">
          <i className="ri-close-fill" id="close-menu" onClick={closeMenu}></i>
        </div>
        <div className="nav_main">
          <li>
            <a href="https://soradesignstudio.com/">Home</a>
          </li>
          <li>
             <Link
              to="/portfolio"
              className="main_nav_portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=917455925669"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button">Get in touch</button>
            </a>
          </li>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
