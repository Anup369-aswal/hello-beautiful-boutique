import { services } from "@/lib/config";
import { buildWhatsAppLink } from "./WhatsAppButton";
import ServiceIcon from "./ServiceIcon";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="relative bg-blush/25 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4 text-gold-dark">What We Stitch</p>
          <h2 className="font-display text-4xl font-semibold text-wine sm:text-5xl">Our Services</h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal/75">
            Every service starts with a conversation about your design, followed by measurements,
            fitting and finishing tailored to you.
          </p>
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.id} as="li" delayMs={(i % 4) * 90}>
              <div className="group relative flex h-full flex-col rounded-2xl border border-gold/20 bg-ivory p-7 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-wine/5 text-wine transition-colors duration-500 group-hover:bg-wine group-hover:text-ivory">
                  <ServiceIcon icon={service.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl text-wine">{service.title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-charcoal/75">
                  {service.description}
                </p>
                <a
                  href={buildWhatsAppLink(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-wine"
                >
                  Enquire on WhatsApp
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
