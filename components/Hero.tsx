import dynamic from "next/dynamic";
import { siteConfig } from "@/lib/config";
import { buildWhatsAppLink } from "./WhatsAppButton";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-gradient-to-b from-blush/40 via-ivory to-ivory pt-24"
    >
      {/* Ambient background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(201,166,100,0.18), transparent 45%), radial-gradient(circle at 85% 75%, rgba(92,26,52,0.12), transparent 40%)"
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:px-12">
        <div className="order-2 lg:order-1">
          <p className="eyebrow mb-5 text-gold-dark">Designer Boutique · BTM 2nd Stage, Bangalore</p>
          <h1 className="text-balance font-display text-5xl font-semibold leading-[1.05] text-wine sm:text-6xl lg:text-7xl">
            Designed
            <br />
            Around You.
            <span className="sr-only">
              {" "}
              — Ladies Designer Boutique &amp; Custom Blouse Stitching in BTM 2nd Stage, Bangalore
            </span>
          </h1>
          <p className="mt-6 max-w-md text-balance text-base leading-relaxed text-charcoal/80 sm:text-lg">
            {siteConfig.shortDescription}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={buildWhatsAppLink(
                "Hi Hello Beautiful Boutique, I would like to book a stitching consultation."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-wine px-7 py-3.5 text-sm font-semibold text-ivory shadow-soft transition-transform duration-300 hover:scale-[1.03]"
            >
              Book a Stitching
            </a>
            <a
              href="#portfolio"
              className="rounded-full border border-wine/40 px-7 py-3.5 text-sm font-semibold text-wine transition-colors duration-300 hover:bg-wine/5"
            >
              View Our Designs
            </a>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-wine underline decoration-gold decoration-2 underline-offset-4"
            >
              WhatsApp Us →
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs uppercase tracking-widest2 text-charcoal/60">
            <span>Custom Fit</span>
            <span className="h-1 w-1 rounded-full bg-gold" />
            <span>Personal Consultation</span>
            <span className="h-1 w-1 rounded-full bg-gold" />
            <span>Bangalore</span>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <Hero3D />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-charcoal/50 sm:flex"
      >
        <span className="text-[0.65rem] uppercase tracking-widest2">Scroll</span>
        <span className="h-8 w-px bg-charcoal/30" />
      </div>
    </section>
  );
}
