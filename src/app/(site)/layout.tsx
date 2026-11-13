import "../globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Mono, Schibsted_Grotesk } from "next/font/google";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const sans = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wubshetzeleke.vercel.app"),
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
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="bg-night text-paper font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-signal focus:px-4 focus:py-2 focus:text-night"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
