import { processSteps } from "@/lib/config";
import Reveal from "./Reveal";
import { buildWhatsAppLink } from "./WhatsAppButton";

export default function Process() {
  return (
    <section id="process" className="relative bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4 text-gold-dark">From Idea to Outfit</p>
          <h2 className="font-display text-4xl font-semibold text-wine sm:text-5xl">How It Works</h2>
        </Reveal>

        <ol className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="hairline absolute left-0 right-0 top-6 hidden lg:block"
          />
          {processSteps.map((step, i) => (
            <Reveal key={step.number} as="li" delayMs={i * 110} className="relative">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-ivory font-display text-lg text-wine">
                {step.number}
              </div>
              <h3 className="mt-5 font-display text-xl text-wine">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/75">{step.description}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-16 text-center">
          <a
            href={buildWhatsAppLink(
              "Hi Hello Beautiful Boutique, I would like to book a stitching consultation."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-wine px-8 py-4 font-display text-lg text-ivory shadow-soft transition-transform duration-300 hover:scale-[1.03]"
          >
            Let&apos;s Create Your Look
          </a>
        </Reveal>
      </div>
    </section>
  );
}
