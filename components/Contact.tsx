export default function Contact() {
  return (
    <section id="contact" className="bg-zinc-900 py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-400 font-semibold tracking-widest uppercase mb-4">
            Kontakt os
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Få et uforpligtende tilbud
          </h2>

          <p className="text-zinc-400 max-w-3xl mx-auto">
            Har du et projekt i tankerne? Kontakt os i dag, så finder vi
            den rigtige løsning sammen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Kontaktoplysninger */}
          <div className="bg-black/30 rounded-2xl p-8">

            <h3 className="text-2xl font-bold mb-8">
              Kontaktoplysninger
            </h3>

            <div className="space-y-6 text-zinc-300">

              <div>
                <p className="text-orange-400 font-semibold mb-1">
                  Telefon
                </p>
                <p>+45 20 11 10 21</p>
              </div>

              <div>
                <p className="text-orange-400 font-semibold mb-1">
                  Område
                </p>
                <p>Odsherred og omegn</p>
              </div>

              <div>
                <p className="text-orange-400 font-semibold mb-1">
                  Google Rating
                </p>
                <p>⭐⭐⭐⭐⭐ 5.0</p>
              </div>

            </div>

            <a
              href="tel:+4520111021"
              className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 px-6 py-4 rounded-lg font-semibold transition"
            >
              Ring nu
            </a>

          </div>

          {/* Kontaktformular (NU FUNGERENDE) */}
          <div className="bg-black/30 rounded-2xl p-8">

            <h3 className="text-2xl font-bold mb-8">
              Send en forespørgsel
            </h3>

            <form
              action="https://formsubmit.co/jalte04@gmail.com"
              method="POST"
              className="space-y-4"
            >
              {/* Settings til FormSubmit */}
              <input type="hidden" name="_subject" value="Ny forespørgsel fra hjemmeside" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <input
                type="text"
                name="Navn"
                placeholder="Navn"
                required
                className="w-full bg-zinc-800 rounded-lg px-4 py-3"
              />

              <input
                type="tel"
                name="Telefon"
                placeholder="Telefonnummer"
                required
                className="w-full bg-zinc-800 rounded-lg px-4 py-3"
              />

              <textarea
                name="Besked"
                placeholder="Beskriv dit projekt"
                rows={5}
                required
                className="w-full bg-zinc-800 rounded-lg px-4 py-3"
              />

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-lg font-semibold transition"
              >
                Få et tilbud
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}