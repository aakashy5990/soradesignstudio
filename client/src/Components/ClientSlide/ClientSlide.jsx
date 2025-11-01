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

  const testimonials = [
    {
      text: `They are going to just freak! These are gorgeous!!`,
      highlight: `what an amazing work you have done.`,
      name: "Valerie Grimpson",
    },
    {
      text: `Working with Vikash was a fantastic experience. He was professional, communicative, and delivered high-quality results on time.`,
      highlight: `I highly recommend him for any 3D projects!`,
      name: "Jason V",
    },
    {
      text: `wish I had found you before,`,
      highlight: `I love the work you have done. thankyou, will come back soon.`,
      name: "Valery",
    },
    {
      text: `Everyone one is loving your design,`,
      highlight: `brilliant work!!`,
      name: "Greg S reid",
    },
    {
      text: `Exceptional skills and`,
      highlight: `he's always available at crucial times, delivering outstanding results on time every time!!`,
      name: "Ajay virani",
    },
    {
      text: `Reliable skills that`,
      highlight: `deliver amazing results right on time!`,
      name: "Hardik",
    },
    {
      text: `Fantastic editing skills that`,
      highlight: `enhance my photography, always delivered on time!`,
      name: "Cinemacortes",
    },
    {
      text: `Impressive editing skills and life saver`,
      highlight: `,always ready when I need it!`,
      name: "Dakota olsan",
    },
    {
      text: `Got exactly what I was`,
      highlight: `thinking!`,
      name: "muscletoad",
    },
    {
      text: `Vikash’s editing skills took my streaming content to the`,
      highlight: `next level—always timely and impressive!`,
      name: "yasmin",
    },
  ];


  const fetchClients = async () => {
    try {
      setLoading(true);
      // if condition adding beacuse free backend hosting is slow so i decided to add this condition to avoid the delay in the loading of the page.
      if(testimonials && testimonials.length > 0){
        setClients(testimonials);
      }else{
        const { data } = await axios.get('/admin/clients');
        if (data.success && data.clients.length > 0) {
          setClients(data.clients);
        } else {
          setClients([]);
        }
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
          <div className="w-8 h-8 rounded-full border-2 border-t-blue-500 animate-spin"></div>
        </div>
      </div>
    );
  }

  if (clients.length === 0) {
    return (
      <div className="clent-slider_main_container">
        <div className="text-center p-8 flex justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-t-blue-500 animate-spin"></div>
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
