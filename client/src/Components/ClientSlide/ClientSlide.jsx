import React, { useState, useEffect } from "react";
import "./ClientSlide.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import client from '../../assets/client.webp'
import { useAppContext } from '../../context/AppContext'

function ClientSlide() {
  const { axios } = useAppContext();
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchClients = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('/admin/clients');
      if (data.success && data.clients.length > 0) {
        setClients(data.clients);
      } else {
        setClients([]);
      }
    } catch (error) {
      console.error('Error fetching clients:', error);
      setClients([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  if (loading) {
    return (
      <div className="clent-slider_main_container">
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Loading client testimonials...</p>
        </div>
      </div>
    );
  }

  if (clients.length === 0) {
    return (
      <div className="clent-slider_main_container">
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>There are no testimonials present at the moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="clent-slider_main_container">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20} 
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={6000}
      >
        {clients.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="swiper_slider_main_container">
              <div className="swiper_slider_text">
                <div className="swiper_slider_text_container">
                  <p className="client_header">
                    {item.primarytitle ? (
                      <>
                        {item.primarytitle}
                        <span> {item.title}</span>
                      </>
                    ) : (
                      <>
                        {item.text}
                        <span> {item.highlight}</span>
                      </>
                    )}
                  </p>
                  <div className="swiper-slider_client_container">
                    <div className="swiper_client_img">
                      <img 
                        src={item.profileimg || client} 
                        alt={item.name} 
                        onError={(e) => {
                          e.target.src = client; // Fallback to default image
                        }}
                      />
                    </div>
                    <div className="swiper_client_name">
                      <p>{item.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ClientSlide;
