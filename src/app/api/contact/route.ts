import { NextResponse } from "next/server";

export const runtime = "nodejs";

const TO = process.env.CONTACT_TO_EMAIL || "response@ridgeheating.co.uk";
// Resend's shared sender works without any DNS setup, as long as emails go to the
// Resend account's own address (response@ridgeheating.co.uk). Set CONTACT_FROM_EMAIL
// to an @ridgeheating.co.uk address later if the domain is ever verified in Resend.
const FROM = process.env.CONTACT_FROM_EMAIL || "Ridge Heating Website <onboarding@resend.dev>";

function clean(value: unknown, max = 5000) {
  return String(value ?? "").trim().slice(0, max);
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Honeypot field for basic spam protection
  if (clean(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 200);
  const phone = clean(body.phone, 50);
  const email = clean(body.email, 200);
  const message = clean(body.message);

  if (!name || !phone || !email || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const text = `New enquiry from the Ridge Heating website\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nJob details:\n${message}`;
  const html = `<h2>New enquiry from the Ridge Heating website</h2>
<p><strong>Name:</strong> ${escapeHtml(name)}<br/>
<strong>Phone:</strong> ${escapeHtml(phone)}<br/>
<strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Job details:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject: `Website enquiry from ${name}`,
      text,
      html,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
