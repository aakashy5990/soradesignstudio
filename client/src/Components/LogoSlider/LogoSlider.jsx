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

  const logosdata = [
      {
        image: assetsLogo.ascendia,
      },
      {
        image: assetsLogo.creed,
      },
      {
        image: assetsLogo.eumax,
      },
      {
        image: assetsLogo.gregreid,
      },
      {
        image: assetsLogo.kalco,
      },
      {
        image: assetsLogo.maisonjodh,
      },
      {
        image: assetsLogo.marvel,
      },
      {
        image: assetsLogo.mondelez,
      },
      {
        image: assetsLogo.risingDiamond,
      },
      {
        image: assetsLogo.titan,
      },
      {
        image: assetsLogo.weefsel,
      },
      {
        image: assetsLogo.chevrolet,
      },
      {
        image: assetsLogo.tironlogo,
      },
      {
        image: assetsLogo.nikkawhisky,
      },
      {
        image: assetsLogo.upvcconnect,
      },
      {
        image: assetsLogo.lumiere,
      },
  ]


  const fetchLogos = async () => {
    try {
      setLoading(true);
      // if condition adding beacuse free backend hosting is slow so i decided to add this condition to avoid the delay in the loading of the page.
      if(logosdata && logosdata.length > 0){
        setLogos(logosdata);
      }else{
        const { data } = await axios.get('/admin/logos');
        if (data.success && data.logos.length > 0) {
          setLogos(data.logos);
        } else {
          setLogos([]);
        }
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
        <div className="text-center p-8 flex justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-t-white animate-spin"></div>
          {/* <p>There are no logos present at the moment.</p> */}
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
