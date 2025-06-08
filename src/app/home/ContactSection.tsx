"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaTelegram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Social } from "@/lib/types";

const ContactSection = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSending, setSending] = useState<boolean>(false);
  const [isSuccess, setSuccess] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  const socials: Social[] = [
    {
      title: "Email",
      link: "mailto:wubezeleke@gmail.com",
      icon: <MdEmail />,
    },
    {
      title: "Linkedin",
      link: "https://www.linkedin.com/in/wubshet-zeleke-1a6aa71a8",
      icon: <FaLinkedin />,
    },
    {
      title: "Telegram",
      link: "https://t.me/wube_z",
      icon: <FaTelegram />,
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const Data: { name: string; email: string; message: string } = {
      name,
      email,
      message,
    };
    setSending(true);
    const response = await fetch("/api/emailSubmit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Data),
    });

    // Handle response
    const data = await response.json();
    if (data.message === "OK") {
      setSuccess(true);
    } else {
      setError(true);
    }
    setName("");
    setEmail("");
    setMessage("");
    setSending(false);
    setTimeout(() => {
      setSuccess(false);
      setError(false);
    }, 7000);
  };
  return (
    <main id="contact" className="mt-24 pt-24 pb-16 px-4">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl font-semibold font-secondary text-center">
          GET IN TOUCH!
        </h1>
        <div className="border-b-4 border-blue-800 w-6"></div>
        <p className="text-sm sm:text-base font-light text-secondary text-center px-4 max-w-2xl">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
      </div>
      <div className="max-w-lg mx-auto mt-8 px-8">
        {isSuccess && (
          <p className="text-center font-secondary text-lg border border-slate-300 opacity-80  bg-green-500 w-full py-4 px-2 rounded-md">
            Email Sent. I will get back to you as soon as possible.
          </p>
        )}
        {isError && (
          <p className="text-center text-lg font-secondary border border-slate-300 opacity-80 bg-red-500 w-full py-4 rounded-md">
            Email Not Sent. Try Again Later...
          </p>
        )}
      </div>

      <div className="mx-auto max-w-4xl mt-12 px-8 bg-[#2b394d4c]">
        <form className="flex flex-col gap-4 py-8" onSubmit={handleSubmit}>
          <label className="font-secondary" htmlFor="name">
            {/* Name */}
          </label>
          <input
            placeholder="Your name*"
            id="name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            type="text"
            required
            className="rounded-md caret-cyan-200 text-cyan-200 bg-[#2b394d4c] focus:border focus:border-cyan-800 p-2 h-12 placeholder:font-secondary placeholder:text-sm focus:outline-0"
          />
          <label className="font-secondary" htmlFor="email">
            {/* Email */}
          </label>
          <input
            placeholder="Your email*"
            id="email"
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            required
            className="rounded-md text-cyan-200 bg-[#2b394d4c] focus:border focus:border-cyan-800 p-2 h-12 placeholder:font-secondary placeholder:text-sm focus:outline-0"
          />
          <label className="font-secondary" htmlFor="message">
            {/* Message */}
          </label>
          <textarea
            placeholder="Message:"
            name="message"
            id="message"
            value={message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setMessage(e.target.value)
            }
            required
            cols={30}
            rows={10}
            className="rounded-md text-cyan-200 bg-[#2b394d4c] focus:border focus:border-cyan-800 p-2 placeholder:font-secondary placeholder:text-sm focus:outline-0"
          ></textarea>
          <button
            type="submit"
            className={` bg-[#2f41a8a5] ${
              isSending ? "opacity-50 cursor-not-allowed" : ""
            }  hover:bg-[#10d1ef55] transition-colors duration-200 sm:mx-auto text-white font-secondary rounded-md px-4 sm:px-12 py-2`}
          >
            {isSending ? "Sending..." : "SUBMIT"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default ContactSection;
