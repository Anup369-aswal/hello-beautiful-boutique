import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for ${siteConfig.businessName}, a ladies' designer boutique in BTM 2nd Stage, Bangalore.`,
  alternates: { canonical: "/terms-and-conditions" }
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8">
        <h1 className="font-display text-4xl text-wine">Terms &amp; Conditions</h1>
        <p className="mt-4 text-sm text-charcoal/60">Last updated: 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-charcoal/80">
          <p>
            These terms govern your use of the {siteConfig.businessName} website and your engagement of
            our custom stitching and tailoring services.
          </p>
          <h2 className="font-display text-2xl text-wine">Bookings &amp; Consultations</h2>
          <p>
            Appointments and stitching bookings are confirmed directly with our team over WhatsApp,
            phone, or in person at the boutique. Measurements, fabric and design details discussed
            during your consultation form the basis of your order.
          </p>
          <h2 className="font-display text-2xl text-wine">Custom Orders</h2>
          <p>
            As each garment is custom stitched to your measurements and design, please discuss
            timelines, fabric requirements and any changes with our team before finalising an order.
          </p>
          <h2 className="font-display text-2xl text-wine">Website Content</h2>
          <p>
            Portfolio images on this website may include placeholder photography pending replacement
            with our own boutique work, and are provided for illustrative purposes.
          </p>
          <h2 className="font-display text-2xl text-wine">Contact</h2>
          <p>
            For any questions about these terms, please contact us at{" "}
            <a href={`tel:${siteConfig.phoneE164}`} className="font-semibold text-wine">
              {siteConfig.phoneDisplay}
            </a>
            .
          </p>
          <p className="text-xs text-charcoal/50">
            This is a general placeholder document. Please review it with a legal professional before
            relying on it for compliance purposes.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
