import { siteConfig } from "@/lib/config";
import { buildWhatsAppLink } from "./WhatsAppButton";

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[80] flex border-t border-gold/30 bg-ivory/95 backdrop-blur sm:hidden">
      <a
        href={`tel:${siteConfig.phoneE164}`}
        className="flex flex-1 items-center justify-center gap-2 border-r border-gold/30 py-3 text-sm font-semibold text-wine"
      >
        Call Now
      </a>
      <a
        href={buildWhatsAppLink(
          "Hi Hello Beautiful Boutique, I would like to book a stitching consultation."
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-wine py-3 text-sm font-semibold text-ivory"
      >
        WhatsApp
      </a>
    </div>
  );
}
