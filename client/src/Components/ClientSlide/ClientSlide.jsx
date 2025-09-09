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

  // Fallback testimonials in case no clients are found
  const fallbackTestimonials = [
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
      text: `Vikash's editing skills took my streaming content to the`,
      highlight: `next level—always timely and impressive!`,
      name: "yasmin",
    },
  ];

  const fetchClients = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('/admin/clients');
      if (data.success && data.clients.length > 0) {
        setClients(data.clients);
      } else {
        setClients(fallbackTestimonials);
      }
    } catch (error) {
      console.error('Error fetching clients:', error);
      setClients(fallbackTestimonials);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  // Use fetched clients or fallback testimonials
  const testimonials = clients.length > 0 ? clients : fallbackTestimonials;

  if (loading) {
    return (
      <div className="clent-slider_main_container">
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Loading client testimonials...</p>
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
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="swiper_slider_main_container">
              <div className="swiper_slider_text">
                <div className="swiper_slider_text_container">
                  <p className="client_header">
                    {/* Check if it's a database client or fallback testimonial */}
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
