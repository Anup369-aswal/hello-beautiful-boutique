"use client";

import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/config";
import { buildWhatsAppLink } from "./WhatsAppButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[70] transition-all duration-500 ${
        scrolled ? "bg-ivory/95 shadow-card backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
      >
        <a href="#top" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            alt="Hello Beautiful Designer Boutique — Design & Stitch"
            className="h-12 w-auto object-contain sm:h-14"
          />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              
                href={link.href}
                className="relative text-sm font-medium text-charcoal transition-colors hover:text-wine after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          
            href={buildWhatsAppLink(
              "Hi Hello Beautiful Boutique, I would like to book a stitching consultation."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-wine px-5 py-2.5 text-sm font-semibold text-wine transition-colors hover:bg-wine hover:text-ivory"
          >
            Book a Stitching
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`block h-px w-6 bg-wine transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-wine transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-wine transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-[64px] z-[65] origin-top bg-ivory shadow-card transition-transform duration-300 lg:hidden ${
          open ? "scale-y-100" : "pointer-events-none scale-y-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-blush py-3 font-display text-lg text-charcoal"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            
              href={buildWhatsAppLink(
                "Hi Hello Beautiful Boutique, I would like to book a stitching consultation."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full bg-wine px-5 py-3 text-center text-sm font-semibold text-ivory"
            >
              Book a Stitching
            </a>
          </li>
          <li className="pt-2 text-center text-sm text-charcoal/70">{siteConfig.phoneDisplay}</li>
        </ul>
      </div>
    </header>
  );
}
