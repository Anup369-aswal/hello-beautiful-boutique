import { navLinks, services, siteConfig } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal py-16 text-ivory/80">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl text-ivory">{siteConfig.businessName}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/60">
              Ladies&apos; designer boutique and custom tailoring in BTM 2nd Stage, Bangalore.
            </p>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-light"
            >
              {siteConfig.instagramHandle}
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest2 text-gold-light">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-ivory/70 transition-colors hover:text-ivory">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest2 text-gold-light">Services</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.slice(0, 5).map((service) => (
                <li key={service.id} className="text-ivory/70">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest2 text-gold-light">Contact</p>
            <address className="mt-4 space-y-2 text-sm not-italic text-ivory/70">
              <p>{siteConfig.address.full}</p>
              <p>
                <a href={`tel:${siteConfig.phoneE164}`} className="hover:text-ivory">
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ivory"
                >
                  Get Directions
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/50 sm:flex-row">
          <p>© {year} Hello Beautiful Boutique. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="/privacy-policy" className="hover:text-ivory">
              Privacy Policy
            </a>
            <a href="/terms-and-conditions" className="hover:text-ivory">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
