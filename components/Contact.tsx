"use client";

import { FormEvent, useState } from "react";
import { services, siteConfig } from "@/lib/config";

type FormState = {
  name: string;
  phone: string;
  service: string;
  date: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  service: "",
  date: "",
  message: ""
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(values: FormState) {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!values.phone.trim()) {
      nextErrors.phone = "Please enter your phone number.";
    } else if (!/^[+]?[\d\s-]{8,15}$/.test(values.phone.trim())) {
      nextErrors.phone = "Please enter a valid phone number.";
    }
    if (!values.service) nextErrors.service = "Please select a service.";
    return nextErrors;
  }

  function handleChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // No email/server backend exists for this site — the enquiry is handed
    // off to WhatsApp, which is the boutique's primary contact channel.
    const lines = [
      `Hi Hello Beautiful Boutique, I would like to enquire about ${form.service}.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.date ? `Preferred date: ${form.date}` : null,
      form.message ? `Message: ${form.message}` : null
    ].filter(Boolean);

    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setForm(initialState);
  }

  return (
    <section id="contact" className="relative bg-blush/25 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4 text-gold-dark">Get In Touch</p>
          <h2 className="font-display text-4xl font-semibold text-wine sm:text-5xl">
            Enquire About Your Design
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal/75">
            Share a few details and we&apos;ll continue the conversation on WhatsApp.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-12 grid grid-cols-1 gap-5 rounded-3xl bg-ivory p-7 shadow-soft sm:grid-cols-2 sm:p-10"
        >
          <div className="sm:col-span-1">
            <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-charcoal">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              className="w-full rounded-xl border border-gold/30 bg-ivory px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-wine"
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-xs text-wine">
                {errors.name}
              </p>
            )}
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-charcoal">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className="w-full rounded-xl border border-gold/30 bg-ivory px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-wine"
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1.5 text-xs text-wine">
                {errors.phone}
              </p>
            )}
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-charcoal">
              Service Required
            </label>
            <select
              id="service"
              value={form.service}
              onChange={(e) => handleChange("service", e.target.value)}
              aria-invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? "service-error" : undefined}
              className="w-full rounded-xl border border-gold/30 bg-ivory px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-wine"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service.id} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
            {errors.service && (
              <p id="service-error" className="mt-1.5 text-xs text-wine">
                {errors.service}
              </p>
            )}
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="date" className="mb-1.5 block text-sm font-semibold text-charcoal">
              Preferred Date
            </label>
            <input
              id="date"
              type="date"
              value={form.date}
              onChange={(e) => handleChange("date", e.target.value)}
              className="w-full rounded-xl border border-gold/30 bg-ivory px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-wine"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-charcoal">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Tell us about the design you have in mind…"
              className="w-full resize-none rounded-xl border border-gold/30 bg-ivory px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-wine"
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full rounded-full bg-wine px-8 py-4 text-sm font-semibold text-ivory shadow-soft transition-transform duration-300 hover:scale-[1.01] sm:w-auto"
            >
              Send via WhatsApp
            </button>
            <p className="mt-3 text-xs text-charcoal/55">
              This form opens WhatsApp with your details filled in — we don&apos;t currently have email
              enquiries set up, so WhatsApp is the fastest way to reach us.
            </p>
            {submitted && (
              <p role="status" className="mt-3 text-sm font-semibold text-wine">
                Your enquiry is ready in WhatsApp — just hit send there to reach us.
              </p>
            )}
          </div>
        </form>

        <div className="mt-8 flex flex-col items-center justify-center gap-2 text-center text-sm text-charcoal/70">
          <p>
            Prefer to call?{" "}
            <a href={`tel:${siteConfig.phoneE164}`} className="font-semibold text-wine">
              {siteConfig.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
