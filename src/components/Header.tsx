"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import '@/app/globals.css';
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeLink, setActiveLink] = useState("/");

  // Function to handle navigation
  const navigateTo = (path: string) => {
    router.push(path);
    setActiveLink(path);
    console.log(`Navigating to ${path}...`);
  };

  // Track scroll position to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track mouse position for glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Set active link based on current path on initial load
  useEffect(() => {
    const path = window.location.pathname;
    setActiveLink(path);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full backdrop-blur-md z-20 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/90 shadow-lg shadow-blue-900/20' : 'bg-gray-900/70'
    }`}>
      {/* Corner light effect */}
      <div 
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle 300px at ${mousePosition.x}px 0px, rgba(56, 189, 248, 0.15), transparent 60%)`,
          transition: 'background 0.3s ease'
        }}
      ></div>

      {/* Border gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-20 relative z-10">
        {/* Logo as a button that routes home */}
        <button 
          onClick={() => navigateTo("/")}
          className="relative group bg-transparent border-none outline-none"
        >
          <span className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 relative z-10">
            David Wealth
          </span>
          <div className="absolute -inset-2 bg-blue-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
          <div className="absolute -inset-1 rounded-lg border border-transparent group-hover:border-blue-500/30 transition-all duration-300"></div>
        </button>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-lg">
          {[
            { name: "Services", path: "/Services" },
            { name: "Projects", path: "/Projects" },
            { name: "Contact", path: "/Contact" },
            { name: "Docs", path: "/Documentation" },
            { name: "Blog", path: "/Blog" },
            { name: "Podcast", path: "/Podcast" },
          ].map(({ name, path }) => (
            <span
              key={name}
              onClick={() => navigateTo(path)}
              className={`relative px-2 py-1 cursor-pointer transition-all duration-300 hover:text-blue-400 ${
                activeLink === path ? 'text-blue-400' : 'text-white'
              }`}
            >
              {name}
              {/* Animated underline */}
              <span className={`absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 
                ${activeLink === path ? 'w-full' : 'group-hover:w-full'}`}
              ></span>
              {/* Show active indicator */}
              {activeLink === path && (
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></span>
              )}
            </span>
          ))}
        </nav>

        {/* 
          Hire Me Button 
          - Features a realistic metallic appearance
          - Outer glow with pulsing animation
          - Reflective surface to simulate metal
          - Increases glow on hover
        */}
        <button
          onClick={() => navigateTo("/Hire-me")}
          className="relative overflow-hidden group"
        >
          {/* Animated outer glow effect - creates a vibrant pulsing aura */}
          <div className="absolute -inset-0.5 rounded-xl blur-sm opacity-70 group-hover:opacity-100 group-hover:blur-md transition-all duration-300 button-glow"></div>
          
          {/* Metallic surface and light reflections */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 border border-gray-300/50 shadow-inner"></div>
          
          {/* Button content with increased padding for more prominence */}
          <div className="relative px-8 py-3.5 rounded-lg leading-none flex items-center justify-center transition-all duration-300 metallic-button">
            <span className="text-gray-900 transition duration-300 font-medium text-base relative z-10">Hire Me</span>
            <svg 
              className="w-5 h-5 ml-2 text-gray-800 group-hover:translate-x-1 transition-transform duration-300 relative z-10" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
            
            {/* Reflection overlay for metallic effect */}
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-gray-200/40 to-gray-400/30"></div>
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/70 to-transparent rounded-t-lg"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-gray-400/40 to-transparent rounded-b-lg"></div>
            </div>
          </div>
        </button>

        {/* Mobile Menu Button with glow effect */}
        <div className="md:hidden relative group">
          <div className="absolute -inset-1 bg-blue-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
          <button className="relative text-xl text-white p-1 group-hover:text-blue-300 transition-colors duration-300">☰</button>
        </div>
      </div>

      {/* 
        Animation styles for various effects
        - metallic-button: styling for realistic metal surface
        - button-glow: radial glow around the button
        - pulse-glow: animation for the outer glow effect
      */}
      <style jsx>{`
        /* Simple pulsing animation for subtle elements */
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.75; }
          50% { opacity: 0.5; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
        
        /* Metallic button styling */
        .metallic-button {
          background: linear-gradient(to bottom, #f5f5f5, #d7d7d7, #c0c0c0);
          border: 1px solid rgba(220, 220, 220, 0.5);
          box-shadow: 
            inset 0 1px 1px rgba(255, 255, 255, 0.8),
            inset 0 -1px 1px rgba(0, 0, 0, 0.2),
            0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .metallic-button:hover {
          background: linear-gradient(to bottom, #ffffff, #e8e8e8, #d0d0d0);
          box-shadow: 
            inset 0 1px 1px rgba(255, 255, 255, 0.9),
            inset 0 -1px 1px rgba(0, 0, 0, 0.2),
            0 4px 8px rgba(0, 0, 0, 0.15);
        }
        
        /* Button glow effect */
        .button-glow {
          background: conic-gradient(
            from 0deg,
            #4d7fff,
            #5d6dff,
            #915eff,
            #ba4dff,
            #e040fb,
            #ff3d82,
            #ff5252,
            #ff9432,
            #ffc107,
            #c0ff33,
            #53ff53,
            #21ffab,
            #0affff,
            #4d7fff
          );
          animation: pulse-glow 3s infinite, rotate-glow 10s linear infinite;
        }
        
        /* Pulsing animation for the glow */
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.7;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05);
          }
        }
        
        /* Rotation animation for the glow */
        @keyframes rotate-glow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </header>
  );
}