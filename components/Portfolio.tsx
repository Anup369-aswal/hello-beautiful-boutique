"use client";

import { useMemo, useState } from "react";
import { portfolioItems, type PortfolioCategory } from "@/lib/config";
import Reveal from "./Reveal";

const categories: Array<PortfolioCategory | "All"> = [
  "All",
  "Blouses",
  "Bridal Wear",
  "Gowns",
  "Salwar Suits",
  "Party Wear",
  "Custom Designs"
];

export default function Portfolio() {
  const [active, setActive] = useState<PortfolioCategory | "All">("All");

  const filtered = useMemo(
    () => (active === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === active)),
    [active]
  );

  return (
    <section id="portfolio" className="relative bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4 text-gold-dark">Designer Work</p>
          <h2 className="font-display text-4xl font-semibold text-wine sm:text-5xl">Portfolio</h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal/75">
            A look at the kind of designs we bring to life. Photographs shown here are placeholders —
            our own boutique work will replace these.
          </p>
        </Reveal>

        <div
          role="tablist"
          aria-label="Filter portfolio by category"
          className="mt-10 flex flex-wrap justify-center gap-2.5"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={active === category}
              onClick={() => setActive(category)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors duration-300 sm:text-sm ${
                active === category
                  ? "border-wine bg-wine text-ivory"
                  : "border-gold/30 bg-transparent text-charcoal/70 hover:border-gold hover:text-wine"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {filtered.map((item, i) => (
            <Reveal key={item.id} delayMs={(i % 6) * 70} className="mb-5 break-inside-avoid">
              <figure className="group relative overflow-hidden rounded-2xl bg-blush shadow-card">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  width={600}
                  height={i % 3 === 0 ? 750 : 800}
                  className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <figcaption className="p-5 text-ivory">
                    <p className="text-[0.65rem] uppercase tracking-widest2 text-gold-light">
                      {item.category}
                    </p>
                    <p className="font-display text-lg">{item.title}</p>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
