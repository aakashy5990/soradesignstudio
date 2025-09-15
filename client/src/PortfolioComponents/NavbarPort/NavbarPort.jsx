import React from "react";
import "./NavbarPort.css";
import mainLogo from "../../assets/PortfolioImg/main_logo.png"
import { useState,useRef,useEffect } from "react";

function NavbarPort() {
  const [toogle, setToogle] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setToogle(false);
      }
    }

    if (toogle) {
      window.addEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [toogle]);


  return (
    <div className="headerPort">
      <div className="nav_head_port">
        <a href="https://soradesignstudio.com/"><p>Sora</p></a>
      </div>
      <img src={mainLogo} alt="" />
      <div className="nav_port">
        <ul>
          <li className="dropdownport" ref={dropdownRef}>
            <a
              className="dropbtn"
              onClick={(e) => {
                e.stopPropagation(); // prevent immediate outside click trigger
                setToogle(true);
              }}
            >
              Connect
            </a>
            <div className={`dropdown-content-port`} style={{display:toogle?'block':'none'}} id="dropdownMenu" >
              <a
                href="https://whatsform.com/4bj9mX\"
                target="_blank"
              >
                Whatsapp
              </a>
              <a
                href="https://www.instagram.com/soraunofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
              >
                Instagram
              </a>
              <a href="https://www.behance.net/vikashyadav53" target="_blank">
                Behance
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=vikashy263@gmail.com"
                target="_blank"
              >
                Gmail
              </a>
            </div>
          </li>
          {/* <!-- <li><a href="#">Connect</a></li> --> */}
        </ul>
      </div>
    </div>
  );
}

export default NavbarPort;
