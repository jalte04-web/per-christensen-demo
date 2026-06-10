export default function Contact() {
  return (
    <section className="bg-zinc-900 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-4xl font-bold mb-10">
          Kontakt os
        </h3>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="mb-4">
              📞 +45 20 11 10 21
            </p>

            <p className="mb-4">
              📍 Odsherred Kommune
            </p>

            <p>
              ⭐ 5.0 Google rating
            </p>
          </div>

          <div>
            <a
              href="tel:+4520111021"
              className="inline-block bg-orange-500 hover:bg-orange-600 px-6 py-4 rounded-lg font-semibold"
            >
              Ring nu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}