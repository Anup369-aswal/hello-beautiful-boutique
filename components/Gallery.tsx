import { galleryItems } from "@/lib/config";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

/**
 * "Our Creations" — a free-flowing showcase of real boutique work,
 * distinct from the categorized Portfolio grid earlier on the page.
 */
export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-blush/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4 text-gold-dark">From Our Atelier</p>
          <h2 className="font-display text-4xl font-semibold text-wine sm:text-5xl">Our Creations</h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal/75">
            A closer look at the craftsmanship behind every stitch — real garments, made with care,
            for real women in Bangalore.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
          {galleryItems.map((item, i) => (
            <Reveal key={item.id} delayMs={i * 60}>
              <TiltCard className="group block overflow-hidden rounded-2xl shadow-card">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-ivory">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/70 via-charcoal/0 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="font-display text-sm font-semibold text-ivory">{item.title}</p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
