import { siteConfig } from "@/lib/config";
import Reveal from "./Reveal";

export default function Location() {
  return (
    <section id="location" className="relative bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4 text-gold-dark">Visit The Boutique</p>
          <h2 className="font-display text-4xl font-semibold text-wine sm:text-5xl">
            Find Us in BTM 2nd Stage
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:items-stretch">
          <Reveal className="lg:col-span-3">
            <div className="h-80 w-full overflow-hidden rounded-2xl shadow-card sm:h-[26rem] lg:h-full">
              {/*
                Basic Google Maps embed using a plain query URL — works with no
                API key. For a richer embed (custom pin styling, place
                details), swap this src for the Google Maps Embed API:
                https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=place_id:YOUR_PLACE_ID
                See README "Connecting Google Maps" for exact steps.
              */}
              <iframe
                title="Hello Beautiful Boutique location on Google Maps"
                src={siteConfig.googleMapsEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delayMs={150} className="lg:col-span-2">
            <div className="flex h-full flex-col justify-center rounded-2xl bg-wine px-8 py-10 text-ivory shadow-soft">
              <h3 className="font-display text-2xl">{siteConfig.businessName}</h3>
              <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed text-ivory/85">
                <p>{siteConfig.address.line1}</p>
                <p>{siteConfig.address.line2}</p>
                <p>
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.postalCode}
                </p>
              </address>

              <div className="mt-6 space-y-1 text-sm text-ivory/85">
                {siteConfig.hours.map((h) => (
                  <p key={h.day}>
                    <span className="text-gold-light">{h.day}:</span> {h.time}
                  </p>
                ))}
              </div>

              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-charcoal transition-transform duration-300 hover:scale-[1.03]"
              >
                Get Directions
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
