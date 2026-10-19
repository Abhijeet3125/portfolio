import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ParticleBackground from "./components/ParticleBackground";
import About from "./components/About";
import { Skills } from "./components/Skills";

const App = () => (
    <div className="relative min-h-screen w-full bg-black">
        
        <ParticleBackground />
        
        <div className="relative z-10 flex flex-col h-full w-full">
            <Navbar />
            <Hero />
            <About />
            <Skills />
        </div>
        
    </div>
)

export default App;