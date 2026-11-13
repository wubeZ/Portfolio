"use client";

import React, { useState } from "react";
import { email as emailSocial, linkedin, telegram } from "@/lib/socials";
import Section from "../components/Section";
import SocialLinks from "../components/SocialLinks";

type Status = "idle" | "sending" | "sent" | "failed";

const fieldClass =
  "mt-2 w-full rounded-md border border-line bg-harbor px-4 py-3 text-paper transition-colors focus:border-signal focus:outline-none";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    let sent = false;
    try {
      const response = await fetch("/api/emailSubmit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      sent = response.ok;
    } catch {
      sent = false;
    }

    if (sent) {
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("failed");
    }
  };

  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <p className="max-w-[40ch] text-lg leading-relaxed text-mist">
            Have a project or a role in mind? Send a message and I&apos;ll
            reply by email.
          </p>
          <a
            href={emailSocial.link}
            className="mt-6 inline-block text-lg font-semibold text-signal underline-offset-4 hover:underline"
          >
            wubezeleke@gmail.com
          </a>
          <div className="mt-6">
            <SocialLinks socials={[linkedin, telegram]} />
          </div>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={fieldClass}
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={7}
              className={`${fieldClass} resize-y`}
            />
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-md bg-signal px-6 py-3 font-semibold text-night transition-colors hover:bg-paper disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            <p role="status" className="text-sm">
              {status === "sent" && (
                <span className="text-signal">
                  Message sent. I&apos;ll reply by email.
                </span>
              )}
              {status === "failed" && (
                <span className="text-[#ff9b9b]">
                  The message didn&apos;t send. Try again, or email
                  wubezeleke@gmail.com directly.
                </span>
              )}
            </p>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default ContactSection;
