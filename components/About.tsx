import Reveal from "./Reveal";

const pillars = [
  { title: "Your Design", description: "We start with your idea — a sketch, a reference, or a fabric you love." },
  { title: "Your Measurements", description: "Precise, personal measurements taken at the boutique, for you alone." },
  { title: "Your Fitting", description: "A dedicated fitting session so the drape and silhouette sit exactly right." },
  { title: "Your Finishing", description: "Careful, considered finishing — inside and out — on every garment." }
];

export default function About() {
  return (
    <section id="about" className="relative bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-4 text-gold-dark">About Hello Beautiful</p>
            <h2 className="font-display text-4xl font-semibold leading-tight text-wine sm:text-5xl">
              Every woman has her own style.
              <br />
              We simply help bring it to life.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/80 sm:text-lg">
              Hello Beautiful Boutique is a ladies&apos; designer boutique in BTM 2nd Stage, Bangalore,
              built around custom stitching rather than ready-made collections. Instead of fitting you
              into an existing size, we design and stitch around the way you want to look and feel —
              understanding your idea, taking your measurements with care, and finishing every piece
              with the kind of detail that makes an outfit feel truly yours.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal/80 sm:text-lg">
              From the first conversation to the final fitting, our focus stays on customisation, fit
              and finishing — the details that separate a garment that simply fits from one that was
              designed around you.
            </p>
          </Reveal>

          <Reveal delayMs={150}>
            <div className="relative">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-blush shadow-soft">
                {/* Replace with a real photograph at /public/images/about/atelier.jpg */}
                <img
                  src="/images/about/atelier.jpg"
                  alt="Inside Hello Beautiful Boutique, a designer tailoring atelier in BTM 2nd Stage, Bangalore"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </div>
              <div className="absolute -bottom-8 -left-6 hidden w-56 rounded-2xl bg-wine px-6 py-5 text-ivory shadow-soft sm:block">
                <p className="font-display text-2xl">Designed with you,</p>
                <p className="font-display text-2xl text-gold-light">stitched for you.</p>
              </div>
            </div>
          </Reveal>
        </div>

        <ul className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} as="li" delayMs={i * 80}>
              <div className="hairline mb-4 w-10" />
              <h3 className="font-display text-xl text-wine">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/75">{pillar.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
