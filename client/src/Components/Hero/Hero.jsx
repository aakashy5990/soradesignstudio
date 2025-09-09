import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";

function Hero({ handleOpenPopup }) {
  const [projCount, setProjCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);

  const projLineRef = useRef(null);
  const clientLineRef = useRef(null);

  useEffect(() => {
    let proj = 0;
    let client = 0;
    let speed = 30;
    const speedRate = 0.6;
    const minSpeed = 5;

    const maxProj = 235;
    const maxClient = 112;

    const updateLine = (ref, count, max) => {
      const width = Math.min((count / max) * 100, 100);
      if (ref.current) ref.current.style.width = `${width}%`;
    };

    const intervalId = setInterval(() => {
      if (proj < maxProj) proj += 1;
      if (client < maxClient) client += 1;

      setProjCount(proj);
      setClientCount(client);

      updateLine(projLineRef, proj, maxProj);
      updateLine(clientLineRef, client, maxClient);

      if (proj >= maxProj && client >= maxClient) clearInterval(intervalId);
      if (speed > minSpeed) speed *= speedRate;
    }, speed);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="intro_section" id="home">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="marvelsanimation.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay */}
      <div className="video-overlay"></div>

      <div className="hero_intro_content">
        <div className="hero_intro_text_content">
          <p >
            We blend design, motion, and storytelling to create unforgettable
            brand moments and product experiences.
          </p>
          <p>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vikashy263@gmail.com" target="_blank" className="lets_btn">
              Lets Do This!
            </a>
          </p>
          <p className="third_pera">Ideas that hit, Designs that stick.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
