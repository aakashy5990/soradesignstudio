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


  const fetchLogos = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('/admin/logos');
      if (data.success && data.logos.length > 0) {
        setLogos(data.logos);
      } else {
        setLogos([]);
      }
    } catch (error) {
      console.error('Error fetching logos:', error);
      setLogos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogos();
  }, []);

  if (loading) {
    return (
      <div className="logos">
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <div className="w-8 h-8 rounded-full border-2 border-t-white animate-spin"></div>
        </div>
      </div>
    );
  }

  if (logos.length === 0) {
    return (
      <div className="logos">
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>There are no logos present at the moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="logos">
      <div className="logo-track">
        <div className="logo-track-inner">
          {logos.map((logo, index) => (
            <div key={index} className="logo-item">
              <div className="logo-container">
                <img 
                  src={typeof logo === 'string' ? logo : logo.image} 
                  alt={`Client Logo ${index + 1}`}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="logo-item">
              <div className="logo-container">
                <img 
                  src={typeof logo === 'string' ? logo : logo.image} 
                  alt={`Client Logo ${index + 1}`}
                  loading="lazy"
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
