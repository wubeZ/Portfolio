import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

function parseContactMessage(body: unknown): ContactMessage | null {
  if (typeof body !== "object" || body === null) return null;
  const { name, email, message } = body as Record<string, unknown>;
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return null;
  }
  const parsed = {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
  };
  if (!parsed.name || !parsed.message || !EMAIL_PATTERN.test(parsed.email)) {
    return null;
  }
  return parsed;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const POST = async (req: Request) => {
  const data = parseContactMessage(await req.json().catch(() => null));
  if (!data) {
    return NextResponse.json(
      { message: "Name, a valid email and a message are required" },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: "wubezeleke@gmail.com",
      replyTo: data.email,
      subject: `Message From ${data.name} on Portfolio Website`,
      text: `${data.message}\n\nSent from: ${data.email}`,
      html: `<div style="white-space: pre-wrap">${escapeHtml(
        data.message
      )}</div><p>Sent from: ${escapeHtml(data.email)}</p>`,
    });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }

  return NextResponse.json({ message: "OK" }, { status: 200 });
};
