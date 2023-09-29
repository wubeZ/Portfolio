"use client";
import React, { useState } from "react";

const ContactSection = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSending, setSending] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const Data: { name: string; email: string; message: string } = {
      name,
      email,
      message,
    };
    setSending(true)
    const response = await fetch("/api/emailSubmit", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Data),
    });

    // Handle response
    const data = await response.json();
    if(data.message === "OK"){
      alert("Email Sent. I will get back to you as soon as possible.")
    }
    else{
      alert("Email Not Sent. Try Again Later...")
    }
    setName("");
    setEmail("");
    setMessage("");
    setSending(false)

  };
  return (
    <main id="contact" className="mt-24 pt-24 pb-16 px-4">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl font-semibold font-secondary text-center">GET IN TOUCH!</h1>
        <div className="border-b-4 border-blue-800 w-6"></div>
        <p className="text-sm sm:text-base font-light text-secondary text-center px-4 max-w-2xl">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
      </div>
      <div className="mx-auto max-w-4xl mt-12 px-8 bg-[#2b394d4c]">
        <form className="flex flex-col gap-4 py-8" onSubmit={handleSubmit}>
          <label className="font-secondary" htmlFor="name">
            Name
          </label>
          <input
            placeholder="Enter Your Name"
            id="name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            type="text"
            required
            className="rounded-md bg-slate-300 border-2 text-black border-slate-200 p-2 placeholder:font-secondary placeholder:text-sm"
          />
          <label className="font-secondary" htmlFor="email">
            Email
          </label>
          <input
            placeholder="Enter Your Email"
            id="email"
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            required
            className="rounded-md bg-slate-300 border-2 text-black border-slate-200 p-2 placeholder:font-secondary placeholder:text-sm"
          />
          <label className="font-secondary" htmlFor="message">
            Message
          </label>
          <textarea
            placeholder="Enter Your Message"
            name="message"
            id="message"
            value={message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setMessage(e.target.value)
            }
            required
            cols={30}
            rows={10}
            className="rounded-md bg-slate-300 border-2 text-black border-slate-200 p-2 placeholder:font-secondary placeholder:text-sm"
          ></textarea>
          <button
            type="submit"
            className={` bg-[#3652f1a5] ${isSending ? "opacity-50 cursor-not-allowed": ""}  hover:bg-[#3652f1cb] sm:mx-auto text-white font-secondary rounded-md px-4 sm:px-12 py-2`}
          >
            {isSending ? "Sending..." :"SUBMIT"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default ContactSection;
