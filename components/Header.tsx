export default function Header() {
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

        {/* Navigation + Telefon */}
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
      </div>
    </header>
  );
}