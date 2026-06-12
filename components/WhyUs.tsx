export default function WhyUs() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <div className="text-center mb-16">
        <p className="text-orange-400 font-semibold tracking-widest uppercase mb-4">
          Derfor vælger kunder os
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Erfaring, kvalitet og god service
        </h2>

        <p className="text-zinc-400 max-w-3xl mx-auto">
          Vi lever af tilfredse kunder og godt håndværk. Derfor lægger vi
          vægt på kvalitet, punktlighed og god kommunikation gennem hele
          projektet.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-zinc-900 rounded-2xl p-8">
          <div className="text-5xl mb-4">🏆</div>

          <h3 className="text-xl font-bold mb-3">
            20+ års erfaring
          </h3>

          <p className="text-zinc-400">
            Mange års erfaring med både små og store byggeprojekter.
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8">
          <div className="text-5xl mb-4">⭐</div>

          <h3 className="text-xl font-bold mb-3">
            Høj kundetilfredshed
          </h3>

          <p className="text-zinc-400">
            Vi går op i kvalitet og holder vores aftaler.
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8">
          <div className="text-5xl mb-4">📍</div>

          <h3 className="text-xl font-bold mb-3">
            Lokalt i Odsherred
          </h3>

          <p className="text-zinc-400">
            Lokalkendt håndværker med stærk tilknytning til området.
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8">
          <div className="text-5xl mb-4">📞</div>

          <h3 className="text-xl font-bold mb-3">
            Hurtig respons
          </h3>

          <p className="text-zinc-400">
            Vi svarer hurtigt og giver gerne et uforpligtende tilbud.
          </p>
        </div>

      </div>
    </section>
  );
}