export default function Map() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Venstre side */}
          <div>

            <p className="text-orange-400 font-semibold tracking-widest uppercase mb-4">
              Find os
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Besøg os i Hørve
            </h2>

            <p className="text-zinc-400 text-lg mb-8">
              Vi holder til på Dragsmøllevej 51 i Hørve og udfører opgaver i
              hele Odsherred og omegn. Kontakt os gerne for et uforpligtende
              tilbud eller en snak om dit projekt.
            </p>

            <div className="bg-zinc-900 rounded-2xl p-6 mb-8">
              <p className="text-xl">
                📍 Dragsmøllevej 51, 4534 Hørve
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Dragsmøllevej+51+4534+Hørve"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 hover:bg-orange-600 px-6 py-4 rounded-lg font-semibold transition"
            >
              Åbn i Google Maps
            </a>

          </div>

          {/* Højre side */}
          <div>
            <img
              src="/Odsherred.jpg"
              alt="Odsherred"
              className="w-full h-[450px] object-cover rounded-2xl"
            />
          </div>

        </div>

      </div>
    </section>
  );
}