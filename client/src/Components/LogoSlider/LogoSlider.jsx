import React, { useState, useEffect } from "react";
import "./LogoSlider.css";
import { assetsLogo } from "../../assets/assetsLogo";
import { useAppContext } from "../../context/AppContext";

function LogoSlider() {
  const { axios } = useAppContext();
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback logos from assets
  const fallbackLogos = [
    assetsLogo.ascendia,
    assetsLogo.creed,
    assetsLogo.eumax,
    assetsLogo.gregreid,
    assetsLogo.kalco,
    assetsLogo.maisonjodh,
    assetsLogo.marvel,
    assetsLogo.mondelez,
    assetsLogo.risingDiamond,
    assetsLogo.titan,
    assetsLogo.weefsel,
    assetsLogo.chevrolet,
    assetsLogo.tironlogo,
    assetsLogo.nikkawhisky,
    assetsLogo.upvcconnect,
    assetsLogo.lumiere
  ];

  const fetchLogos = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('/admin/logos');
      if (data.success && data.logos.length > 0) {
        setLogos(data.logos);
      } else {
        setLogos(fallbackLogos);
      }
    } catch (error) {
      console.error('Error fetching logos:', error);
      setLogos(fallbackLogos);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogos();
  }, []);

  // Use fetched logos or fallback logos
  const displayLogos = logos.length > 0 ? logos : fallbackLogos;

  if (loading) {
    return (
      <div className="logos">
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Loading logos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="logos">
      <div className="logos-slide">
        {displayLogos.map((logo, index) => (
          <img 
            key={index} 
            src={typeof logo === 'string' ? logo : logo.image} 
            alt={`Logo ${index + 1}`}
            onError={(e) => {
              // If image fails to load, try to use fallback
              if (typeof logo !== 'string') {
                e.target.src = fallbackLogos[index % fallbackLogos.length];
              }
            }}
          />
        ))}
      </div>
      <div className="logos-slide">
        {displayLogos.map((logo, index) => (
          <img 
            key={`duplicate-${index}`} 
            src={typeof logo === 'string' ? logo : logo.image} 
            alt={`Logo ${index + 1}`}
            onError={(e) => {
              // If image fails to load, try to use fallback
              if (typeof logo !== 'string') {
                e.target.src = fallbackLogos[index % fallbackLogos.length];
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default LogoSlider;
