"use client";

import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const questions = [
    {
      question: "Hvilke områder arbejder I i?",
      answer:
        "Vi udfører opgaver i hele Odsherred og omegn for både private og erhverv.",
    },
    {
      question: "Giver I gratis tilbud?",
      answer:
        "Ja. Vi giver altid et uforpligtende tilbud på dit projekt.",
    },
    {
      question: "Arbejder I med sommerhuse?",
      answer:
        "Ja. Vi har stor erfaring med renovering og vedligeholdelse af sommerhuse i Odsherred.",
    },
    {
      question: "Hvilke typer opgaver udfører I?",
      answer:
        "Vi udfører blandt andet tagarbejde, renovering, vinduer, døre og specialopgaver.",
    },
    {
      question: "Hvordan kommer jeg i kontakt med jer?",
      answer:
        "Du kan ringe direkte på +45 20 11 10 21 eller udfylde kontaktformularen på siden.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-32">
      <div className="text-center mb-16">
        <p className="text-orange-400 font-semibold tracking-widest uppercase mb-4">
          FAQ
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ofte stillede spørgsmål
        </h2>

        <p className="text-zinc-400">
          Her finder du svar på de spørgsmål vi oftest får.
        </p>
      </div>

      <div className="space-y-4">
        {questions.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden"
          >
            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className="font-semibold text-lg">
                {item.question}
              </span>

              <span className="text-orange-400 text-2xl">
                {open === index ? "−" : "+"}
              </span>
            </button>

            {open === index && (
              <div className="px-6 pb-6 text-zinc-400">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}