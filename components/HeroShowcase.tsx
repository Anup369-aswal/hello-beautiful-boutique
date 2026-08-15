"use client";

import TiltCard from "./TiltCard";

type ShowcasePhoto = {
  src: string;
  alt: string;
  rotate: string;
  size: string;
  position: string;
  z: string;
  floatDelay: string;
};

const photos: ShowcasePhoto[] = [
  {
    src: "/images/instagram/insta-04.jpg",
    alt: "Custom-stitched silk saree blouse by Hello Beautiful Boutique",
    rotate: "-rotate-6",
    size: "h-64 w-52 sm:h-72 sm:w-60",
    position: "left-0 top-6",
    z: "z-10",
    floatDelay: "0s"
  },
  {
    src: "/images/instagram/insta-05.jpg",
    alt: "Pastel lehenga with contrast dupatta stitched by Hello Beautiful Boutique",
    rotate: "rotate-3",
    size: "h-72 w-56 sm:h-80 sm:w-64",
    position: "left-24 top-0 sm:left-28",
    z: "z-20",
    floatDelay: "0.6s"
  },
  {
    src: "/images/instagram/insta-02.jpg",
    alt: "Black and gold embellished dance costume by Hello Beautiful Boutique",
    rotate: "-rotate-2",
    size: "h-60 w-48 sm:h-64 sm:w-56",
    position: "left-48 top-16 sm:left-56",
    z: "z-30",
    floatDelay: "1.2s"
  }
];

/**
 * Hero visual: a floating, gently tilting stack of real boutique photos,
 * replacing the abstract 3D shape with authentic work from Hello Beautiful.
 */
export default function HeroShowcase() {
  return (
    <div className="relative h-[26rem] w-full max-w-md sm:h-[30rem]">
      {/* Decorative gold ring accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full border border-gold/40 sm:h-36 sm:w-36"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 -left-4 h-20 w-20 rounded-full border border-wine/20 sm:h-24 sm:w-24"
      />

      {photos.map((photo) => (
        <div
          key={photo.src}
          className={`absolute ${photo.position} ${photo.size} ${photo.z} animate-float`}
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
  );
}
