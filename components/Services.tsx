export default function Services() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h3 className="text-3xl font-bold mb-10">
        Vores ydelser
      </h3>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 p-6 rounded-xl">
          <h4 className="font-bold text-xl mb-2">
            Tagarbejde
          </h4>
          <p className="text-zinc-400">
            Nye tage og tagrenoveringer.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h4 className="font-bold text-xl mb-2">
            Vinduer & Døre
          </h4>
          <p className="text-zinc-400">
            Udskiftning og montering.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h4 className="font-bold text-xl mb-2">
            Renovering
          </h4>
          <p className="text-zinc-400">
            Store og små renoveringsprojekter.
          </p>
        </div>
      </div>
    </section>
  );
}