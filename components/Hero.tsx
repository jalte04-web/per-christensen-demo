export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
      {/* Baggrundsbillede */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Hero.jpg')",
        }}
      />

      {/* Mørkt overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Indhold */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-3xl">

            <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Din lokale tømrer i Odsherred
            </h2>

            <p className="text-xl text-zinc-200 mb-8">
              Tagarbejde, renovering, vinduer og specialløsninger udført med
              fokus på kvalitet, håndværk og god service.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="tel:+4520111021"
                className="bg-orange-500 hover:bg-orange-600 px-6 py-4 rounded-lg font-semibold transition"
              >
                Ring nu
              </a>

              <a
  href="#contact"
  className="border border-white/30 hover:bg-white/10 px-6 py-4 rounded-lg transition"
>
  Få et tilbud
</a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}