export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-4xl font-bold mb-6">
            Om Per Christensen ApS
          </h3>

          <p className="text-zinc-400 leading-8 mb-4">
            Tømrer og Snedker Per Christensen ApS udfører professionelt
            tømrerarbejde i Odsherred og omegn.
          </p>

          <p className="text-zinc-400 leading-8">
            Vi hjælper med tagarbejde, renovering, vinduer, døre og
            specialløsninger for både private og erhverv.
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-xl">
          <div className="text-5xl font-bold text-orange-400 mb-2">
            20+
          </div>

          <p className="text-zinc-400">
            års erfaring med kvalitetsarbejde.
          </p>
        </div>
      </div>
    </section>
  );
}