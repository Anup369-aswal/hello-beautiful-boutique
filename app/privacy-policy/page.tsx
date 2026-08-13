import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.businessName}, a ladies' designer boutique in BTM 2nd Stage, Bangalore.`,
  alternates: { canonical: "/privacy-policy" }
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8">
        <h1 className="font-display text-4xl text-wine">Privacy Policy</h1>
        <p className="mt-4 text-sm text-charcoal/60">Last updated: 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-charcoal/80">
          <p>
            {siteConfig.businessName} (&quot;we&quot;, &quot;us&quot;) respects your privacy. This page
            explains, in plain terms, what information this website collects and how it is used.
          </p>
          <h2 className="font-display text-2xl text-wine">Information We Collect</h2>
          <p>
            When you use our enquiry form or contact us on WhatsApp, we receive the details you choose
            to share — such as your name, phone number, service of interest and message. This website
            does not use tracking cookies or analytics beyond standard, privacy-respecting hosting logs.
          </p>
          <h2 className="font-display text-2xl text-wine">How We Use Your Information</h2>
          <p>
            Information you share is used only to respond to your enquiry and, where relevant, to
            provide the stitching or tailoring service you have requested. We do not sell or share your
            information with third parties for marketing purposes.
          </p>
          <h2 className="font-display text-2xl text-wine">Contact</h2>
          <p>
            If you have questions about this policy, please contact us at{" "}
            <a href={`tel:${siteConfig.phoneE164}`} className="font-semibold text-wine">
              {siteConfig.phoneDisplay}
            </a>
            .
          </p>
          <p className="text-xs text-charcoal/50">
            This is a general placeholder policy. Please review it with a legal professional before
            relying on it for compliance purposes.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
