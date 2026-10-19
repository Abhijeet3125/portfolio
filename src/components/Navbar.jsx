import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl px-6 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-between shadow-2xl">
      
      {/* Logo */}
      <div className="text-white font-bold text-xl tracking-tighter cursor-pointer">
        Dev.
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-8 text-sm text-gray-300 font-medium">
        <li className="hover:text-white cursor-pointer transition-colors">About</li>
        <li className="hover:text-white cursor-pointer transition-colors">Stack</li>
        <li className="hover:text-white cursor-pointer transition-colors">Project</li>
      </ul>

      {/* Call to Action Button */}
      <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-transform hover:scale-105 active:scale-95">
        Resume
      </button>

    </nav>
  );
};

export default Navbar;