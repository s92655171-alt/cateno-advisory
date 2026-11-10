import { NextResponse } from "next/server";

const clean = (v: unknown, max: number) => typeof v === "string" ? v.trim().slice(0, max) : "";
export async function POST(req: Request) {
 try {
  const body = await req.json();
  // Honeypot: quietly accept bots without sending mail.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });
  const name = clean(body.name, 120);
  const email = clean(body.email, 254);
  const company = clean(body.company, 160);
  const topic = clean(body.topic, 160);
  const message = clean(body.message, 4000);
  const consent = body.consent === true;
  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || message.length < 10 || !consent) {
   return NextResponse.json({ error: "Invalid enquiry details." }, { status: 400 });
  }
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;
  if (!key || !to || !from) return NextResponse.json({ error: "Contact delivery is not configured." }, { status: 503 });
  const text = [`Name: ${name}`, `Email: ${email}`, `Company: ${company || "—"}`, `Topic: ${topic || "—"}`, "", message].join("\n");
  const response = await fetch("https://api.resend.com/emails", {
   method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
   body: JSON.stringify({ from, to: [to], reply_to: email, subject: `Website enquiry — ${topic || "CATENO ADVISORY"}`, text }),
  });
  if (!response.ok) return NextResponse.json({ error: "Email provider rejected the request." }, { status: 502 });
  return NextResponse.json({ ok: true });
 } catch { return NextResponse.json({ error: "Unable to process the enquiry." }, { status: 400 }); }
}
