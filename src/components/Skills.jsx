import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger)

export const Skills = () => {
    
    const container = useRef(null);
    useGSAP(() => {
        gsap.from(".skill-anim", {
            opacity: 0,
            y: 50,
            scrollTrigger: {
                trigger: container.current,
                start: "top bottom",
                end: "center center",
                scrub: true
            }
        })
    }, {scope: container});
    
  return (
    <div ref={container} className="min-h-screen w-full flex flex-col items-center">
        <div className='skill-anim w-full text-white font-extrabold text-center text-5xl'> My Skills</div>
    </div>
  )
}
