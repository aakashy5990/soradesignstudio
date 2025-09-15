import React from 'react';
import './MainButtonPort.css';

function MainButtonPort({ activeBox, setActiveBox }) {

  return (
    <div className="main_port_container">
      <div className="port_navbar">
        <button 
          className={`tab-button hover-underline-animation ${activeBox === 'posterport' ? 'active' : ''}`} 
          onClick={() => setActiveBox('posterport')}
        >
          Posters
        </button>
        <button 
          className={`tab-button hover-underline-animation ${activeBox === 'motionport' ? 'active' : ''}`} 
          onClick={() => setActiveBox('motionport')}
        >
          Motion
        </button>

        <button 
          className={`tab-button hover-underline-animation ${activeBox === 'cgiport' ? 'active' : ''}`}
          onClick={() => setActiveBox('cgiport')}
        >
          CGI
        </button>
                <button 
          className={`tab-button hover-underline-animation ${activeBox === 'stillsport' ? 'active' : ''}`} 
          onClick={() => setActiveBox('stillsport')}
        >
          Stills
        </button>
        <button className={`tab-button hover-underline-animation ${activeBox === 'brandguidelinesport' ? 'active' : ''}`} onClick={() => setActiveBox('brandguidelinesport')}>Brand Guidelines</button>
        <button className={`tab-button hover-underline-animation ${activeBox === 'brochureport' ? 'active' : ''}`} onClick={() => setActiveBox('brochureport')}>Brochure</button>
      </div>
    </div>
  );
}

export default MainButtonPort;
