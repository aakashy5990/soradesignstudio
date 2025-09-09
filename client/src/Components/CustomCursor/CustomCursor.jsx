import React, { useEffect } from "react";
import './CustomCursor.css';

function CustomCursor() {

  useEffect(() => {
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (cursorDot) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
      }

      if (cursorOutline) {
        cursorOutline.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          { duration: 900, fill: 'forwards' }
        );
      }
    };

    const updateCursorVisibility = () => {
      const isSmallScreen = window.innerWidth < 900;
      if (cursorDot) {
        cursorDot.style.display = isSmallScreen ? 'none' : 'block';
      }
      if (cursorOutline) {
        cursorOutline.style.display = isSmallScreen ? 'none' : 'block';
      }
    };

    updateCursorVisibility();
    window.addEventListener('resize', updateCursorVisibility);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', updateCursorVisibility);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursor-outline" data-cursor-outline></div>
      <div className="cursor-dot" data-cursor-dot></div>
    </>
  );
}

export default CustomCursor;
