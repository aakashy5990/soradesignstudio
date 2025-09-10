import React, { useState, useEffect } from "react";
import "./LogoSlider.css";
import { assetsLogo } from "../../assets/assetsLogo";
import { useAppContext } from "../../context/AppContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

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
      <div className="logo-track">
        <div className="logo-track-inner">
          {displayLogos.map((logo, index) => (
            <div key={index} className="logo-item">
              <div className="logo-container">
                <img 
                  src={typeof logo === 'string' ? logo : logo.image} 
                  alt={`Client Logo ${index + 1}`}
                  loading="lazy"
                  onError={(e) => {
                    const fallbackIndex = index % fallbackLogos.length;
                    e.target.src = fallbackLogos[fallbackIndex];
                  }}
                />
              </div>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {displayLogos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="logo-item">
              <div className="logo-container">
                <img 
                  src={typeof logo === 'string' ? logo : logo.image} 
                  alt={`Client Logo ${index + 1}`}
                  loading="lazy"
                  onError={(e) => {
                    const fallbackIndex = index % fallbackLogos.length;
                    e.target.src = fallbackLogos[fallbackIndex];
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoSlider;
