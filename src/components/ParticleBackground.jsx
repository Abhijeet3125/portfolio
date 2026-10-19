import { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 


const particlesInit = async (engine) => {
  await loadSlim(engine);
};

export default function ParticleBackground() {

  const options = useMemo(() => ({
    background: {
      color: { value: "transparent" },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" }, 
      },
      modes: {
        grab: { distance: 150, links: { opacity: 0.3 } },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.1, 
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        outModes: { default: "bounce" },
      },
      number: {
        density: { enable: true, area: 100 },
        value: 50, 
      },
      opacity: { value: 0.5 },
      size: { value: { min: 1, max: 2 } },
    },
    detectRetina: true,
  }), []);

  return (
    <ParticlesProvider init={particlesInit}>
      <Particles
        id="tsparticles"
        options={options}
        className="absolute inset-0 z-0 h-full w-full"
      />
    </ParticlesProvider>
  );
}