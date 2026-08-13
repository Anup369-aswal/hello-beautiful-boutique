import { instagramTiles, siteConfig } from "@/lib/config";
import Reveal from "./Reveal";

export default function Instagram() {
  return (
    <section className="relative bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4 text-gold-dark">{siteConfig.instagramHandle}</p>
          <h2 className="font-display text-4xl font-semibold text-wine sm:text-5xl">
            Follow Us on Instagram
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal/75">
            New designs, fittings and behind-the-scenes moments from the boutique.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {instagramTiles.map((tile, i) => (
            <Reveal key={tile.image} delayMs={(i % 6) * 60}>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-xl bg-blush"
                aria-label="View this post on Instagram"
              >
                <img
                  src={tile.image}
                  alt={tile.alt}
                  loading="lazy"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/40">
                  <InstagramIcon className="h-6 w-6 text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-wine px-6 py-3 text-sm font-semibold text-wine transition-colors duration-300 hover:bg-wine hover:text-ivory"
          >
            Follow {siteConfig.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
