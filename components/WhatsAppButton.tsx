import { siteConfig } from "@/lib/config";

type WhatsAppButtonProps = {
  message?: string;
  floating?: boolean;
  className?: string;
  label?: string;
};

export function buildWhatsAppLink(message?: string) {
  const defaultMessage =
    "Hi Hello Beautiful Boutique, I would like to enquire about your designer stitching services.";
  const text = encodeURIComponent(message ?? defaultMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

export default function WhatsAppButton({
  message,
  floating = false,
  className = "",
  label = "WhatsApp Us"
}: WhatsAppButtonProps) {
  const href = buildWhatsAppLink(message);

  if (floating) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Hello Beautiful Boutique on WhatsApp"
        className="group fixed bottom-6 right-5 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-soft transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:bottom-8 sm:right-8"
      >
        <WhatsAppIcon className="h-7 w-7 text-white" />
        <span className="absolute right-16 hidden whitespace-nowrap rounded-full bg-charcoal px-3 py-1.5 text-xs text-ivory opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:block">
          Chat with us
        </span>
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ||
        "inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
      }
    >
      <WhatsAppIcon className="h-4 w-4" />
      {label}
    </a>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.33 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.09c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.11.11-1.79-.11-.41-.13-.94-.31-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.55-1.16-2.96 0-1.4.73-2.09 1-2.38.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.42-.07.65.5.24.58.81 2 .88 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.89 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.54.33.07.12.07.68-.17 1.36Z" />
    </svg>
  );
}
