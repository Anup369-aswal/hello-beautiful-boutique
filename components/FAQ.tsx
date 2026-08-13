"use client";

import { useState } from "react";
import { faqItems } from "@/lib/config";
import Reveal from "./Reveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-blush/25 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4 text-gold-dark">Good to Know</p>
          <h2 className="font-display text-4xl font-semibold text-wine sm:text-5xl">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-gold/25 rounded-2xl bg-ivory shadow-card">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question} className="px-6 sm:px-8">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-lg text-wine sm:text-xl"
                  >
                    {item.question}
                    <span
                      className={`shrink-0 text-2xl font-body font-light text-gold-dark transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  className={`grid overflow-hidden transition-all duration-400 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="text-sm leading-relaxed text-charcoal/75 sm:text-base">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
