export default function Reviews() {
  const reviews = [
    {
      name: "Kasper Skau",
      text: "En af lokalområdets dygtige håndværkere, høj kvalitet og leverancer der holder det aftalte.",
    },
    {
      name: "Flemming Ravnø",
      text: "Kan kun anbefale Per Christensen. Alt er som aftalt. Fået monteret 4 fags vindue i stue.",
    },
    {
      name: "Rene Nielsen",
      text: "Meget fint udført arbejde. Kom til aftalt tid.",
    },
  ];

  return (
    <section
      id="reviews"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <div className="text-center mb-12">
        <p className="text-orange-400 font-semibold mb-2">
          GOOGLE ANMELDELSER
        </p>

        <h3 className="text-4xl font-bold mb-4">
          Det siger vores kunder
        </h3>

        <p className="text-zinc-400 max-w-2xl mx-auto">
          Vi sætter en ære i godt håndværk, klare aftaler og tilfredse kunder.
        </p>
      </div>

      <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-4 snap-x snap-mandatory">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="min-w-[300px] md:min-w-0 bg-zinc-900 p-8 rounded-xl border border-zinc-800 text-center snap-center"
          >
            <div className="text-orange-400 text-xl mb-4">
              ★★★★★
            </div>

            <p className="text-zinc-300 italic mb-6">
              "{review.text}"
            </p>

            <div className="font-semibold">
              {review.name}
            </div>

            <div className="text-zinc-500 text-sm mt-1">
              Google anmeldelse
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}