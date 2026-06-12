export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Tekst */}
        <div>
          <p className="text-orange-400 font-semibold tracking-widest uppercase mb-4">
            Om virksomheden
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Kvalitetshåndværk i Odsherred gennem mange år
          </h2>

          <p className="text-zinc-400 leading-8 mb-6">
            Tømrer og Snedker Per Christensen ApS udfører professionelt
            tømrerarbejde for private boligejere, sommerhusejere og
            virksomheder i hele Odsherred.
          </p>

          <p className="text-zinc-400 leading-8 mb-6">
            Vi hjælper med alt fra tagrenoveringer og vinduesudskiftning
            til større renoveringsprojekter og specialløsninger.
          </p>

          <p className="text-zinc-400 leading-8">
            Vores fokus er altid kvalitet, god kommunikation og
            løsninger, der holder i mange år frem.
          </p>
        </div>

        {/* Statistikker */}
        <div className="grid grid-cols-2 gap-6">

          <div className="bg-zinc-900 rounded-2xl p-8">
            <div className="text-5xl font-bold text-orange-400 mb-2">
              20+
            </div>

            <p className="text-zinc-400">
              års erfaring
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8">
            <div className="text-5xl font-bold text-orange-400 mb-2">
              500+
            </div>

            <p className="text-zinc-400">
              gennemførte projekter
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8">
            <div className="text-5xl font-bold text-orange-400 mb-2">
              5.0
            </div>

            <p className="text-zinc-400">
              Google rating
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8">
            <div className="text-5xl font-bold text-orange-400 mb-2">
              100%
            </div>

            <p className="text-zinc-400">
              fokus på kvalitet
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}