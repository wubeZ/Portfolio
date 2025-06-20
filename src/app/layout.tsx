import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wubshet Zeleke - Software Engineer",
  description:
    "Wubshet Zeleke is a full stack developer who specializes in robust web application.",
  keywords: [
    "wubshet zeleke",
    "wube",
    "Full stack developer",
    "developer at Ethiopia",
    "Backend developer",
    "wubeZ",
    "Ethiopia developer",
    "best developer near me",
    "best fullstack developer in Ethiopia",
  ],
  openGraph: {
    images: "https://wubshetzeleke.vercel.app/wz-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={` ${inter.className} transition-colors ease-linear bg-gradient-to-r from-[#122d4d] to-[#040227] scroll-smooth`}
      >
        <div className="relative">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
