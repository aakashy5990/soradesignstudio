import React from 'react';
import './MainButtonPort.css';

function MainButtonPort({ activeBox, setActiveBox }) {

const navItems = [
  { 
    name: "Posters",
    activeBox: "posterport"
  },
  { 
    name: "Motion",
    activeBox: "motionport"
  },
  { 
    name: "CGI",
    activeBox: "cgiport"
  },
  { 
    name: "Print Ads",
    activeBox: "stillsport"
  },
  { 
    name: "Brand Guidelines",
    activeBox: "brandguidelinesport"
  },
  { 
    name: "Brochure",
    activeBox: "brochureport"
  }
];

  return (
    <div className="main_port_container">
      <div className="port_navbar">
        {navItems.map((item, index) => (
          <button 
            className={`tab-button hover-underline-animation ${activeBox === item.activeBox ? 'active' : ''}`} 
            onClick={() => setActiveBox(item.activeBox)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MainButtonPort;
