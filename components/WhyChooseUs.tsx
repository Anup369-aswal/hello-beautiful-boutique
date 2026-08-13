import { whyChooseUs } from "@/lib/config";
import Reveal from "./Reveal";

export default function WhyChooseUs() {
  return (
    <section className="relative bg-wine py-24 text-ivory sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(201,166,100,0.25), transparent 40%), radial-gradient(circle at 80% 80%, rgba(241,218,221,0.15), transparent 40%)"
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4 text-gold-light">The Hello Beautiful Difference</p>
          <h2 className="font-display text-4xl font-semibold sm:text-5xl">Why Choose Us</h2>
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} as="li" delayMs={(i % 3) * 100}>
              <div className="h-full rounded-2xl border border-ivory/15 bg-ivory/5 p-7 backdrop-blur-sm transition-colors duration-500 hover:border-gold/50 hover:bg-ivory/10">
                <span className="block h-px w-8 bg-gold-light" />
                <h3 className="mt-4 font-display text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/75">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
