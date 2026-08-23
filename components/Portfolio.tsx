"use client";

import { useMemo, useState } from "react";
import { portfolioItems } from "@/lib/config";
import Reveal from "./Reveal";

const PAGE_SIZE = 6;

export default function Portfolio() {
  const [page, setPage] = useState(0);

  const pageCount = Math.max(1, Math.ceil(portfolioItems.length / PAGE_SIZE));

  const visibleItems = useMemo(() => {
    const start = page * PAGE_SIZE;
    return portfolioItems.slice(start, start + PAGE_SIZE);
  }, [page]);

  const goPrev = () => setPage((p) => Math.max(0, p - 1));
  const goNext = () => setPage((p) => Math.min(pageCount - 1, p + 1));

  return (
    <section id="portfolio" className="relative bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4 text-gold-dark">Designer Work</p>
          <h2 className="font-display text-4xl font-semibold text-wine sm:text-5xl">Portfolio</h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal/75">
            A look at the kind of designs we bring to life — real pieces stitched by Hello Beautiful
            Boutique.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item, i) => (
            <Reveal key={item.id} delayMs={(i % 6) * 70}>
              <figure className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-blush shadow-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <figcaption className="p-5 text-ivory">
                    <p className="font-display text-lg">{item.title}</p>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>

        {pageCount > 1 && (
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={goPrev}
              disabled={page === 0}
              aria-label="Previous photos"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-wine/30 text-wine transition-colors duration-300 hover:bg-wine hover:text-ivory disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-wine"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <p className="text-sm font-medium text-charcoal/70">
              {page + 1} / {pageCount}
            </p>

            <button
              type="button"
              onClick={goNext}
              disabled={page === pageCount - 1}
              aria-label="Next photos"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-wine/30 text-wine transition-colors duration-300 hover:bg-wine hover:text-ivory disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-wine"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
