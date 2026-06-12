"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div>
          <p className="text-xs tracking-[0.3em] text-orange-400">
            TØMRER OG SNEDKER
          </p>

          <h1 className="font-bold text-lg text-white">
            PER CHRISTENSEN APS
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">

          <nav className="flex items-center gap-8 text-white font-medium">

            <a
              href="#about"
              className="hover:text-orange-400 transition"
            >
              Om os
            </a>

            <a
              href="#services"
              className="hover:text-orange-400 transition"
            >
              Ydelser
            </a>

            <a
              href="#projects"
              className="hover:text-orange-400 transition"
            >
              Projekter
            </a>

            <a
              href="#contact"
              className="hover:text-orange-400 transition"
            >
              Kontakt
            </a>

          </nav>

          <a
            href="tel:+4520111021"
            className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-lg font-semibold text-white transition"
          >
            +45 20 11 10 21
          </a>

        </div>

        {/* Mobil menu-knap */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>

      </div>

      {/* Mobil dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10">

          <nav className="flex flex-col px-6 py-6 gap-5 text-white">

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-400"
            >
              Om os
            </a>

            <a
              href="#services"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-400"
            >
              Ydelser
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-400"
            >
              Projekter
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-400"
            >
              Kontakt
            </a>

            <a
              href="tel:+4520111021"
              className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-lg font-semibold text-center"
            >
              Ring nu
            </a>

          </nav>

        </div>
      )}
    </header>
  );
}