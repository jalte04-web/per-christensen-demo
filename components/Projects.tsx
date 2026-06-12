export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <div className="mb-12">
        <p className="text-orange-400 font-semibold tracking-widest uppercase mb-4">
          Tidligere projekter
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Udvalgte opgaver
        </h2>

        <p className="text-zinc-400 max-w-3xl">
          Her er et udvalg af de opgaver vi udfører for private boligejere,
          sommerhusejere og virksomheder i Odsherred og omegn.
        </p>
      </div>

      <p className="text-center text-zinc-500 text-sm mb-4 md:hidden">
      ← Swipe for at se flere projekter →
      </p>

      <div className="flex gap-6 overflow-x-auto pb-4">

        {/* Tagarbejde */}
        <div className="min-w-[350px] bg-zinc-900 rounded-2xl overflow-hidden">
          <img
            src="/Tagarbejde.jpg"
            alt="Tagarbejde"
            className="h-64 w-full object-cover"
          />

          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">
              Tagarbejde
            </h3>

            <p className="text-zinc-400">
              Nye tage, tagrenoveringer og vedligeholdelse udført med fokus
              på kvalitet og holdbarhed.
            </p>
          </div>
        </div>

        {/* Vinduer */}
        <div className="min-w-[350px] bg-zinc-900 rounded-2xl overflow-hidden">
          <img
            src="/Vinduer.jpg"
            alt="Vinduer og døre"
            className="h-64 w-full object-cover"
          />

          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">
              Vinduer & Døre
            </h3>

            <p className="text-zinc-400">
              Montering og udskiftning af moderne energivenlige løsninger.
            </p>
          </div>
        </div>

        {/* Sommerhus */}
        <div className="min-w-[350px] bg-zinc-900 rounded-2xl overflow-hidden">
          <img
            src="/Sommerhus.jpg"
            alt="Sommerhusrenovering"
            className="h-64 w-full object-cover"
          />

          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">
              Sommerhusrenovering
            </h3>

            <p className="text-zinc-400">
              Renovering og modernisering af sommerhuse i hele Odsherred.
            </p>
          </div>
        </div>

        {/* Specialopgaver */}
        <div className="min-w-[350px] bg-zinc-900 rounded-2xl overflow-hidden">
          <img
            src="/Specialopgaver.jpg"
            alt="Specialopgaver"
            className="h-64 w-full object-cover"
          />

          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">
              Specialopgaver
            </h3>

            <p className="text-zinc-400">
              Skræddersyede løsninger udført med fokus på detaljer og godt håndværk.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}