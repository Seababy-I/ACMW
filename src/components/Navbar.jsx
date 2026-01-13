import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ["Home", "About Us", "Event", "Gallery", "Contact"];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] flex items-center h-[164px] transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      
      {/* 1. THE LOGO */}
      <div className="pl-12 flex-shrink-0">
        <img 
          src="/acmw.png" 
          alt="ACM-W Logo" 
          className="w-[164px] h-[164px] object-contain"
        />
      </div>

      {/* 2. THE NAV PILL */}
      <div 
        className="absolute flex items-center justify-center"
        style={{
          boxSizing: 'border-box',
          width: '1125px',
          height: '64px',
          left: '240px',
          top: '78px',
          background: 'rgba(150, 128, 128, 0.13)',
          border: '1px solid rgba(185, 176, 176, 0.46)',
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.25)',
          backdropFilter: 'blur(2.5px)',
          borderRadius: '32px'
        }}
      >
        <ul className="flex gap-12 text-white font-semibold text-lg tracking-widest uppercase">
  {navLinks.map((link) => (
    <li 
      key={link} 
      className="group relative px-6 py-2 flex items-center justify-center"
    >
      {/* The Transparent Pill Bubble Background with Border */}
      <div 
        className="absolute inset-0 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out"
        style={{
          background: 'rgba(177, 170, 177, 0.126)', // #99399E at 20% opacity
          border: '1px solid rgba(185, 176, 176, 0.46)', // Your requested border
          borderRadius: '32px'
        }}
      ></div>
      
      {/* The Nav Text */}
      <span className="relative z-10 cursor-pointer transition-all duration-300 group-hover:text-[#99399E] group-hover:scale-110 block">
        {link}
      </span>
    </li>
  ))}
</ul>
      </div>
    </nav>
  );
}