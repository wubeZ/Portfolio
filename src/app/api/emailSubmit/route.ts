import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const POST = async (req: Request, res: Response) => {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailData = {
      from: process.env.email,
      to: "wubezeleke@gmail.com",
      subject: `Message From ${data.name} on Portfolio Website`,
      text: data.message + " | Sent from: " + data.email,
      html: `<div>${data.message}</div><p>Sent from:
      ${data.email}</p>`,
    };

    await transporter.sendMail(mailData);
    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 404 });
  }
};
