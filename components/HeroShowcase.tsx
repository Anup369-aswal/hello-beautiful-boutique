"use client";

import TiltCard from "./TiltCard";

type ShowcasePhoto = {
  src: string;
  alt: string;
  rotate: string;
  liftClass: string;
  floatDelay: string;
};

const photos: ShowcasePhoto[] = [
  {
    src: "/images/instagram/insta-04.jpg",
    alt: "Custom-stitched silk saree blouse by Hello Beautiful Boutique",
    rotate: "-rotate-6",
    liftClass: "mt-10",
    floatDelay: "0s"
  },
  {
    src: "/images/instagram/insta-05.jpg",
    alt: "Pastel lehenga with contrast dupatta stitched by Hello Beautiful Boutique",
    rotate: "rotate-2",
    liftClass: "mt-0",
    floatDelay: "0.6s"
  },
  {
    src: "/images/instagram/insta-02.jpg",
    alt: "Black and gold embellished dance costume by Hello Beautiful Boutique",
    rotate: "rotate-6",
    liftClass: "mt-10",
    floatDelay: "1.2s"
  }
];

/**
 * Hero visual: a floating, gently tilting row of real boutique photos,
 * laid out with flexbox + gaps so all three stay fully visible side by
 * side with no overlap, at any screen size.
 */
export default function HeroShowcase() {
  return (
    <div className="relative w-full max-w-2xl px-2">
      {/* Decorative gold ring accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full border border-gold/40 sm:h-36 sm:w-36"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 -left-4 h-20 w-20 rounded-full border border-wine/20 sm:h-24 sm:w-24"
      />

      <div className="flex items-start justify-center gap-4 sm:gap-6">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className={`aspect-[4/5] w-1/3 max-w-[11rem] shrink-0 animate-float ${photo.liftClass}`}
            style={{ animationDelay: photo.floatDelay }}
          >
            <TiltCard className={`h-full w-full ${photo.rotate} hover:rotate-0`}>
              <div className="h-full w-full overflow-hidden rounded-3xl border-4 border-ivory shadow-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </TiltCard>
          </div>
        ))}
      </div>
    </div>
  );
}
