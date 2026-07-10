"use client";

import { FormEvent, useState } from "react";
import { Reveal } from "./Reveal";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Enquiry from ${name} - Ridge Heating`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nJob details:\n${message}`
    );
    window.location.href = `mailto:response@ridgeheating.co.uk?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <section
      id="contact"
      className="section-light hex-pattern relative overflow-x-clip pb-14 pt-14 sm:pb-20 sm:pt-20 md:pb-28 md:pt-28 lg:pb-32 lg:pt-32"
    >
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 sm:gap-14 sm:px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal variant="left">
          <p className="font-display text-[11px] uppercase tracking-[0.28em] text-ridge-ink-muted">
            Get in touch
          </p>
          <h2 className="text-ink-gradient mt-4 font-display text-2xl font-bold uppercase tracking-[0.06em] sm:text-3xl sm:tracking-[0.08em] md:text-5xl">
            Request a free quote
          </h2>
          <p className="mt-5 text-base leading-relaxed text-black/55 md:text-lg">
            Fill in the form or get in touch directly, whichever is easiest. We&apos;ll come back
            with clear next steps.
          </p>

          <dl className="mt-10 space-y-3 sm:mt-12 sm:space-y-4">
            {[
              {
                label: "Phone",
                content: (
                  <a
                    href="tel:01172510726"
                    className="font-display text-xl tracking-tight text-ridge-ink transition hover:opacity-70"
                  >
                    0117 251 0726
                  </a>
                ),
              },
              {
                label: "Email",
                content: (
                  <a
                    href="mailto:response@ridgeheating.co.uk"
                    className="text-base text-black/70 transition hover:text-ridge-ink"
                  >
                    response@ridgeheating.co.uk
                  </a>
                ),
              },
              {
                label: "Instagram",
                content: (
                  <a
                    href="https://www.instagram.com/ridge.heating/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-black/70 transition hover:text-ridge-ink"
                  >
                    @ridge.heating
                  </a>
                ),
              },
              {
                label: "Service area",
                content: (
                  <span className="text-base text-black/70">
                    Whole Southwest, anywhere within 1-2 hours of Bristol
                  </span>
                ),
              },
              {
                label: "Emergencies",
                content: (
                  <span className="text-base text-black/70">
                    Emergency callouts available. Call us directly
                  </span>
                ),
              },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-light px-5 py-3.5 sm:px-6 sm:py-4"
              >
                <dt className="font-display text-[10px] uppercase tracking-[0.22em] text-ridge-ink-muted">
                  {item.label}
                </dt>
                <dd className="mt-2">{item.content}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal variant="right" delay={120}>
          <form
            onSubmit={handleSubmit}
            className="glass-light-strong glass-flat p-5 sm:p-6 md:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block sm:col-span-1">
                <span className="font-display text-[10px] uppercase tracking-[0.2em] text-ridge-ink-muted">
                  Your name *
                </span>
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="mt-2 w-full border-b border-black/15 bg-transparent py-3 text-base text-ridge-ink outline-none transition focus:border-ridge-ink"
                />
              </label>
              <label className="block sm:col-span-1">
                <span className="font-display text-[10px] uppercase tracking-[0.2em] text-ridge-ink-muted">
                  Phone number *
                </span>
                <input
                  required
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="mt-2 w-full border-b border-black/15 bg-transparent py-3 text-base text-ridge-ink outline-none transition focus:border-ridge-ink"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="font-display text-[10px] uppercase tracking-[0.2em] text-ridge-ink-muted">
                  Email address *
                </span>
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-2 w-full border-b border-black/15 bg-transparent py-3 text-base text-ridge-ink outline-none transition focus:border-ridge-ink"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="font-display text-[10px] uppercase tracking-[0.2em] text-ridge-ink-muted">
                  Tell us about your job *
                </span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2 w-full resize-y border-b border-black/15 bg-transparent py-3 text-base text-ridge-ink outline-none transition focus:border-ridge-ink"
                />
              </label>
            </div>

            <button
              type="submit"
              className="btn-ink mt-8 min-h-12 w-full py-3.5 font-display text-[12px] font-semibold uppercase tracking-[0.18em] sm:mt-10 sm:w-auto sm:px-12"
            >
              Enquire Now
            </button>

            {status === "sent" ? (
              <p className="mt-4 text-sm text-black/60">
                Opening your email app. If nothing appears, email us at response@ridgeheating.co.uk.
              </p>
            ) : (
              <p className="mt-4 text-sm text-ridge-ink-muted">
                We aim to respond promptly during working hours. For emergencies, call us directly.
                Emergency callouts are available.
              </p>
            )}

            <div className="mt-8 flex items-center gap-3 border-t border-black/10 pt-6">
              <p className="mr-1 font-display text-[10px] uppercase tracking-[0.2em] text-ridge-ink-muted">
                Follow
              </p>
              {[
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/ridge.heating/",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                    </svg>
                  ),
                },
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
                    </svg>
                  ),
                },
                {
                  label: "WhatsApp",
                  href: "https://wa.me/441172510726",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.7 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.39 1.01 2.56.12.17 1.75 2.67 4.23 3.74 1.75.76 2.11.76 2.47.64.4-.12 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.17-.47-.29z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-11 w-11 items-center justify-center border border-black/10 bg-white text-ridge-ink transition hover:border-black/25 hover:bg-black hover:text-white"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </form>
          <p className="mt-4 text-center text-sm italic text-ridge-ink-muted sm:text-left">
            Sam this needs to be connected via Resend to get this working, so it wont work quite yet!
          </p>
        </Reveal>
      </div>
    </section>
  );
}
