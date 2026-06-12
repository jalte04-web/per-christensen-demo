export default function Services() {
  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <div className="text-center mb-16">
        <p className="text-orange-400 font-semibold tracking-widest uppercase mb-4">
          Vores ydelser
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Professionelt tømrerarbejde i Odsherred
        </h2>

        <p className="text-zinc-400 max-w-3xl mx-auto">
          Vi hjælper private boligejere, sommerhusejere og virksomheder
          med alt fra mindre opgaver til større renoveringsprojekter.
        </p>
      </div>

      <div className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto lg:overflow-visible pb-4 snap-x snap-mandatory">

        <div className="min-w-[300px] lg:min-w-0 bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800 transition snap-center">
          <div className="text-4xl mb-4">🏠</div>

          <h3 className="text-xl font-bold mb-3">
            Tagarbejde
          </h3>

          <p className="text-zinc-400">
            Nye tage, tagrenoveringer og løbende vedligeholdelse.
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800 transition">
          <div className="text-4xl mb-4">🪟</div>

          <h3 className="text-xl font-bold mb-3">
            Vinduer & Døre
          </h3>

          <p className="text-zinc-400">
            Udskiftning og montering af moderne energiløsninger.
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800 transition">
          <div className="text-4xl mb-4">🏡</div>

          <h3 className="text-xl font-bold mb-3">
            Renovering
          </h3>

          <p className="text-zinc-400">
            Ombygning og renovering af boliger og sommerhuse.
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800 transition">
          <div className="text-4xl mb-4">🛠️</div>

          <h3 className="text-xl font-bold mb-3">
            Specialopgaver
          </h3>

          <p className="text-zinc-400">
            Skræddersyede løsninger udført med fokus på kvalitet.
          </p>
        </div>

      </div>
    </section>
  );
}