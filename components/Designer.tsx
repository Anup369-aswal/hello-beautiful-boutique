import Reveal from "./Reveal";

const credentials = [
  "14+ years of experience",
  "BFA — Bachelor of Fine Arts",
  "Diploma in Fashion Designing"
];

export default function Designer() {
  return (
    <section className="relative bg-blush/25 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <div className="relative mx-auto max-w-sm lg:mx-0">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-wine/10 shadow-soft">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about/designer-rajni.jpg"
                  alt="Rajni Aswal, designer and founder of Hello Beautiful Boutique"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden w-52 rounded-2xl bg-wine px-6 py-5 text-ivory shadow-soft sm:block">
                <p className="font-display text-xl">Rajni Aswal</p>
                <p className="mt-1 text-xs uppercase tracking-widest2 text-gold-light">Founder &amp; Designer</p>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={150}>
            <p className="eyebrow mb-4 text-gold-dark">Meet the Designer</p>
            <h2 className="font-display text-4xl font-semibold leading-tight text-wine sm:text-5xl">
              Rajni Aswal
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/80 sm:text-lg">
              With 14 years of experience in custom tailoring, Rajni has built Hello Beautiful
              Boutique around a simple idea — that every outfit should be designed around the
              person wearing it, not the other way round. She holds a Bachelor of Fine Arts (BFA)
              and a Diploma in Fashion Designing, bringing both an artist&apos;s eye and a
              tailor&apos;s precision to every blouse, gown and bridal piece she creates.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal/80 sm:text-lg">
              From the first sketch or reference photo to the final fitting, Rajni personally
              guides each design through to a finished piece — which is why so many clients
              return to her, year after year, for every occasion.
            </p>

            <ul className="mt-8 flex flex-wrap gap-3">
              {credentials.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-wine/25 bg-ivory px-4 py-2 text-sm font-medium text-wine"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
