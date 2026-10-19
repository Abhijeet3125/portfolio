import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".about-intro", {
        opacity: 0,
        x: -100,
        scrollTrigger: {
            trigger: container.current,
            start: "center bottom",
            end: "bottom bottom",
            scrub: true,
        }
      });
    },
    { scope: container },
  );

  return (
  <div ref={container} className="w-full min-h-screen flex">
    <div className="w-1/2 flex justify-center items-center">
        <div className="about-intro text-5xl text-white font-extrabold"> About Me</div>
    </div>
  </div>
  );
};

export default About;
