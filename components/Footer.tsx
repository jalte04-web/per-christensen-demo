export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Firma */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Per Christensen ApS
            </h3>

            <p className="text-zinc-400 leading-7">
              Professionelt tømrer- og snedkerarbejde i Odsherred og omegn.
              Vi hjælper private, sommerhusejere og virksomheder med
              kvalitetsløsninger, der holder i mange år.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-bold text-lg mb-4">
              Kontakt
            </h4>

            <div className="space-y-3">

              <a
                href="tel:+4520111021"
                className="block text-zinc-400 hover:text-white transition"
              >
                📞 +45 20 11 10 21
              </a>

              <a
                href="mailto:kontakt@perchristensen.dk"
                className="block text-zinc-400 hover:text-white transition"
              >
                ✉️ kontakt@perchristensen.dk
              </a>

            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">
              Hurtige links
            </h4>

            <div className="space-y-3">

              <a
                href="#about"
                className="block text-zinc-400 hover:text-white transition"
              >
                Om os
              </a>

              <a
                href="#services"
                className="block text-zinc-400 hover:text-white transition"
              >
                Ydelser
              </a>

              <a
                href="#projects"
                className="block text-zinc-400 hover:text-white transition"
              >
                Projekter
              </a>

              <a
                href="#contact"
                className="block text-zinc-400 hover:text-white transition"
              >
                Kontakt
              </a>

            </div>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-bold text-lg mb-4">
              Information
            </h4>

            <div className="space-y-3 text-zinc-400">

              <a
                href="https://maps.google.com/?q=Dragsmøllevej+51+4534+Hørve"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition"
              >
                📍 Dragsmøllevej 51<br />
                4534 Hørve
              </a>

              <p>
                🕒 Man–Fre: 07:00 – 16:00
              </p>

              <p>
                ⭐ 5.0 Google Rating
              </p>

            </div>

            <a
              href="#contact"
              className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-lg font-semibold transition"
            >
              Få et tilbud
            </a>

          </div>

        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-zinc-500">
          © {new Date().getFullYear()} Per Christensen ApS · Alle rettigheder forbeholdes
        </div>

      </div>
    </footer>
  );
}