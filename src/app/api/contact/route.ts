import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 3; // 3 requests per minute

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0] : request.headers.get("x-real-ip") || "unknown";
  return ip;
}

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    // Validate environment variables
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactToEmail = process.env.CONTACT_TO_EMAIL;
    const contactFromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { ok: false, error: "Email service configuration error. Please contact the site administrator." },
        { status: 500 }
      );
    }

    if (!contactToEmail) {
      console.error("CONTACT_TO_EMAIL is not configured");
      return NextResponse.json(
        { ok: false, error: "Email service configuration error. Please contact the site administrator." },
        { status: 500 }
      );
    }

    if (!contactFromEmail) {
      console.error("CONTACT_FROM_EMAIL is not configured");
      return NextResponse.json(
        { ok: false, error: "Email service configuration error. Please contact the site administrator." },
        { status: 500 }
      );
    }

    // Initialize Resend with validated API key
    const resend = new Resend(resendApiKey);

    const key = getRateLimitKey(request);
    if (!checkRateLimit(key)) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, business, budget, message, website, honeypot } = body;

    // Honeypot check
    if (honeypot) {
      return NextResponse.json(
        { ok: false, error: "Invalid request." },
        { status: 400 }
      );
    }

    // Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { ok: false, error: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !validateEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Valid email is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { ok: false, error: "Message is required." },
        { status: 400 }
      );
    }

    // Message length limit (prevent abuse)
    if (message.length > 5000) {
      return NextResponse.json(
        { ok: false, error: "Message is too long. Please keep it under 5000 characters." },
        { status: 400 }
      );
    }

    // Prepare email content
    const userAgent = request.headers.get("user-agent") || "Unknown";
    const timestamp = new Date().toISOString();

    const emailBody = `New enquiry from ML Webdesign contact form

Name: ${name}
Email: ${email}
${business ? `Business/Project: ${business}` : ""}
${budget ? `Budget: ${budget}` : ""}
${website ? `Website: ${website}` : ""}

Message:
${message}

---
Submitted: ${timestamp}
User Agent: ${userAgent}
`;

    // Send email using validated environment variables
    await resend.emails.send({
      from: contactFromEmail,
      to: contactToEmail,
      subject: "New enquiry — ML Webdesign",
      text: emailBody,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

