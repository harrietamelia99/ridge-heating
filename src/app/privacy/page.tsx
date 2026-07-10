import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Ridge Heating",
  description:
    "How Ridge Heating collects, uses and protects your personal information when you enquire or use our website.",
};

const sections = [
  {
    title: "Who we are",
    body: [
      "Ridge Heating (“we”, “us”, “our”) is an independent gas engineer and heating business based in Bristol, covering the Southwest of England.",
      "For privacy queries, contact us at response@ridgeheating.co.uk or call 0117 251 0726.",
    ],
  },
  {
    title: "What information we collect",
    body: [
      "When you enquire through our website, email, phone, WhatsApp or social media, we may collect:",
    ],
    list: [
      "Your name",
      "Phone number",
      "Email address",
      "Details of the job or enquiry you send us",
      "Any other information you choose to share so we can respond",
    ],
    after: [
      "We do not intentionally collect special category data (such as health information). Please avoid sending sensitive personal details unless they are necessary for the job.",
    ],
  },
  {
    title: "How we use your information",
    body: [
      "We use your information to:",
    ],
    list: [
      "Respond to enquiries and provide quotes",
      "Arrange visits, installs, repairs and certificates",
      "Communicate about your job (including emergencies)",
      "Keep basic records needed to run the business and meet legal obligations",
    ],
    after: [
      "We do not sell your personal information, and we do not use it for automated decision-making or profiling.",
    ],
  },
  {
    title: "Lawful basis",
    body: [
      "Under UK GDPR, we process your information where it is necessary to take steps at your request before entering a contract, to perform a contract with you, or where we have a legitimate interest in responding to enquiries and running our business. Where required, we may also process information to meet legal obligations (for example gas safety records).",
    ],
  },
  {
    title: "Website and contact form",
    body: [
      "Our website contact form opens your email app (or similar) so you can send us a message. Message content is handled through your email provider and then received by us at response@ridgeheating.co.uk.",
      "Like most websites, our hosting provider may process technical data such as IP address, browser type and pages visited in server logs, for security and reliability. We do not run advertising trackers on this site.",
    ],
  },
  {
    title: "Sharing your information",
    body: [
      "We only share personal information when necessary, for example:",
    ],
    list: [
      "With service providers who help us operate (such as email or hosting), under appropriate safeguards",
      "With insurers, regulators or Gas Safe where required for safety, compliance or claims",
      "If the law requires us to disclose it",
    ],
    after: [
      "We do not share your details with marketing lists or third-party advertisers.",
    ],
  },
  {
    title: "How long we keep information",
    body: [
      "We keep enquiry and job-related information only for as long as needed to deal with your request, complete the work, and meet record-keeping or legal requirements. After that, we delete or anonymise it where reasonably possible.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "Under UK data protection law, you may have the right to:",
    ],
    list: [
      "Access the personal information we hold about you",
      "Ask us to correct inaccurate information",
      "Ask us to erase information in certain circumstances",
      "Object to or restrict certain processing",
      "Ask for data portability where applicable",
    ],
    after: [
      "To exercise these rights, email response@ridgeheating.co.uk. You can also complain to the Information Commissioner’s Office (ICO) at ico.org.uk if you are unhappy with how we handle your data.",
    ],
  },
  {
    title: "Security",
    body: [
      "We take reasonable steps to keep personal information secure, including limiting access to people who need it for the business. No method of transmission or storage is completely secure, so please take care when sending information by email or messaging apps.",
    ],
  },
  {
    title: "Children",
    body: [
      "Our services are aimed at adults and property owners/managers. We do not knowingly collect personal information from children.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "We may update this privacy policy from time to time. The “Last updated” date at the top of this page will change when we do. Please check back periodically.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="hex-pattern relative min-h-svh overflow-x-clip">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(255,255,255,0.05),transparent_45%),linear-gradient(180deg,#050505_0%,#000_40%,#080808_100%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-3xl px-4 pb-16 pt-28 sm:px-5 sm:pb-20 sm:pt-32 md:px-8 md:pb-28">
          <p className="font-display text-[11px] uppercase tracking-[0.28em] text-ridge-muted">
            Legal
          </p>
          <h1 className="text-gradient mt-4 font-display text-3xl font-bold uppercase tracking-[0.06em] sm:text-4xl md:text-5xl">
            Privacy policy
          </h1>
          <p className="mt-5 text-sm text-ridge-white/55 sm:text-base">
            Last updated: 10 July 2026
          </p>
          <p className="mt-6 text-[15px] leading-relaxed text-ridge-white/65 sm:text-base">
            This policy explains how Ridge Heating handles personal information when you use our
            website or contact us. It is written for a small UK business and is not a substitute for
            formal legal advice.
          </p>

          <div className="mt-12 space-y-10 sm:mt-14 sm:space-y-12">
            {sections.map((section, index) => (
              <section key={section.title} className="border-t border-white/10 pt-8 sm:pt-10">
                <h2 className="font-display text-lg font-semibold tracking-tight text-ridge-white sm:text-xl">
                  <span className="mr-3 font-display text-sm text-ridge-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ridge-white/60 sm:text-base">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.list ? (
                    <ul className="list-disc space-y-2 pl-5 marker:text-ridge-muted">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                  {section.after?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-ridge-white/50">
              Questions?{" "}
              <a
                href="mailto:response@ridgeheating.co.uk"
                className="link-underline text-ridge-white transition hover:opacity-80"
              >
                response@ridgeheating.co.uk
              </a>
            </p>
            <Link
              href="/"
              className="btn-ghost w-fit py-2 font-display text-[12px] font-semibold uppercase tracking-[0.16em]"
            >
              Back to home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
