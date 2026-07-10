"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Do you charge for a quote or consultation?",
    a: "No. We offer a free, no-obligation consultation so you can get clear advice and a straightforward quote before any work begins.",
  },
  {
    q: "Are you Gas Safe registered?",
    a: "Yes. All gas work is carried out by a Gas Safe registered engineer. You're welcome to ask for registration details before booking.",
  },
  {
    q: "Can you provide landlord Gas Safety Certificates (CP12)?",
    a: "Yes. We carry out landlord gas safety checks and issue CP12 certificates for single properties or portfolios, arranged around your tenants where needed.",
  },
  {
    q: "What areas do you cover?",
    a: "We're based in Bristol and cover the whole Southwest, anywhere within about 1-2 hours of Bristol. Not sure if you're in range? Give us a ring and we'll let you know.",
  },
  {
    q: "Do you offer emergency callouts?",
    a: "Yes. Emergency callouts are available across our service area. For urgent gas or heating issues, call us directly on 0117 251 0726 and we'll get you sorted as quickly as we can.",
  },
  {
    q: "Do you install smart thermostats like Hive or Nest?",
    a: "Yes. We install and set up smart heating controls including Hive Active Heating and Nest, so you can manage your system from your phone.",
  },
  {
    q: "Can you give a fixed price before starting?",
    a: "In most cases, yes. We'll assess the job and provide a clear quote before anything starts. For more complex work where the full scope isn't clear upfront, we'll agree the approach with you first.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="hex-pattern relative overflow-hidden py-14 sm:py-20 md:py-28 lg:py-32">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.04),transparent_50%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-5 md:px-8">
        <Reveal>
          <p className="font-display text-[11px] uppercase tracking-[0.28em] text-ridge-muted">FAQ</p>
          <h2 className="text-gradient mt-4 font-display text-2xl font-bold uppercase tracking-[0.06em] sm:text-3xl sm:tracking-[0.08em] md:text-5xl">
            Common questions
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ridge-white/60">
            Can&apos;t find what you need? Call us and we&apos;ll be happy to help.
          </p>
        </Reveal>

        <ul className="mt-10 space-y-3 sm:mt-12">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            return (
              <Reveal key={item.q} as="li" delay={index * 60}>
                <div className="glass glass-flat overflow-hidden">
                  <button
                    type="button"
                    className="flex min-h-12 w-full items-start justify-between gap-4 px-4 py-4 text-left sm:gap-6 sm:px-6 sm:py-5 md:px-7"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? null : index)}
                  >
                    <span className="font-display text-[15px] font-semibold tracking-tight sm:text-base md:text-lg">
                      {item.q}
                    </span>
                    <span
                      className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center border border-white/15 font-display text-lg text-ridge-muted transition duration-300 ${
                        open ? "rotate-45 border-white/40 bg-white/10 text-ridge-white" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-4 text-sm leading-relaxed text-ridge-white/55 sm:px-6 sm:pb-5 sm:text-[15px] md:px-7">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={200}>
          <p className="mt-10 text-sm text-ridge-muted">
            Still got a question?{" "}
            <a href="tel:01172510726" className="link-underline text-ridge-white">
              Call 0117 251 0726
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
