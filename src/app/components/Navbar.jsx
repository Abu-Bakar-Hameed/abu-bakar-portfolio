"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About","Skills" ,"Projects", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-cyan-500/10 backdrop-blur-xl border-b border-cyan-300/20 shadow-[0_0_25px_rgba(34,211,238,0.15)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-200 tracking-wide drop-shadow-[0_0_10px_rgba(34,211,238,0.6)] hover:scale-105 transition">
          Abu Bakar
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-sm font-medium">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-200 hover:text-cyan-200 transition duration-300 group"
            >
              {item}

              {/* glowing underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-300 shadow-[0_0_12px_#22d3ee] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-cyan-200 text-3xl drop-shadow-[0_0_10px_rgba(34,211,238,0.6)] hover:scale-110 transition"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-cyan-500/10 backdrop-blur-xl border-t border-cyan-300/20">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-gray-200 hover:text-cyan-200 hover:scale-110 transition drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}