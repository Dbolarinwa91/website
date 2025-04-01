"use client";

import Link from "next/link";
import '@/app/globals.css'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-98 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-3 px-26">
        {/* Logo as Text */}
        <Link href="/">
          <span className="text-2xl font-bold cursor-pointer">David wealth</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-lg">
          {["Home", "Services", "Projects", "Contact", "Blog", "Podcast"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative px-2 py-1 transition duration-300 hover:text-pink-400"
            >
              <span className="relative z-10">{item}</span>
            </Link>
          ))}
        </nav>

        {/* Hire Me Button */}
        <Link
          href="#hire-me"
          className="relative bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition overflow-hidden group"
        >
          <span className="relative z-10">Hire Me</span>
          {/* Glow Effect */}
          <span className="absolute inset-0 bg-blue-400 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-2xl group-hover:scale-110"></span>
        </Link>

        {/* Mobile Menu Button (Optional) */}
        <div className="md:hidden">
          <button className="text-xl">☰</button>
        </div>
      </div>
    </header>
  );
}
