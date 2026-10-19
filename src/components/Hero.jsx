import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
  const container = useRef(null);
  const heroText = "Hi, I'm Abhijeet";

  useGSAP(
    () => {
      const t1 = gsap.timeline();

      t1.from(".word-anim", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
      }).from(".hero-txt", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power2.out",

      });

      gsap.to(".hero-text-wrapper", {
        opacity: 0,
        y: -50,
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="w-full min-h-screen flex flex-row">
      <div className="hero-text-wrapper flex flex-col gap-2 w-full justify-center items-center">
        <div className="text-6xl  text-white font-extrabold">
          {heroText.split(" ").map((word, index) => (
            <span key={index} className="word-anim inline-block mr-3 mb-2">
              {word}
            </span>
          ))}
        </div>
        <div className="hero-txt text-3xl  text-white">I like to build things</div>
      </div>
    </div>
  );
};

export default Hero;
