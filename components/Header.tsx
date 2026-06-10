export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-xs tracking-[0.3em] text-orange-400">
            TØMRER OG SNEDKER
          </p>

          <h1 className="font-bold text-lg text-white">
            PER CHRISTENSEN APS
          </h1>
        </div>

        <a
          href="tel:+4520111021"
          className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-lg font-semibold text-white transition"
        >
          +45 20 11 10 21
        </a>
      </div>
    </header>
  );
}