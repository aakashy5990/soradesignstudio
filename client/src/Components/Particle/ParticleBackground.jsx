import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadLinksPreset(engine); // Load the "links" preset
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "links",
        background: {
          color: "#000",
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          opacity: {
            value: 0.4, // 👈 reduce dot opacity
          },
          links: {
            opacity: 0.4, // 👈 reduce line opacity
            color: "#00ffff", // optional: custom line color
            width: 0.5, // optional: thinner line
          },
          color: {
            value: "#ffffff", // optional: dot color
          },
          size: {
            value: 2, // smaller particles
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // 👈 this enables the cursor repulse effect
            },
          },
          modes: {
            repulse: {
              distance: 100, // how far particles move away
              duration: 0.9, // how fast they come back
            },
          },
        },
      }}
    />
  );
};

export default ParticleBackground;

// You can adjust:

// 1) opacity.value → for dots
// 2) links.opacity → for connecting lines
// 3) links.color → line color
// 4) color.value → dot color
// 5) size.value → dot size
