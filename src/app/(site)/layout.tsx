import "../globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Mono, Schibsted_Grotesk } from "next/font/google";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { themeInitScript } from "./theme/theme";

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
  // The image comes from opengraph-image.tsx next to this file.
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Wubshet Zeleke",
    title: "Wubshet Zeleke - Software Engineer",
    description:
      "Full-stack developer based in Ethiopia, building robust web applications.",
  },
  twitter: { card: "summary_large_image", creator: "@wube_Z" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // The init script sets data-theme on <html> before hydration.
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-canvas text-ink font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-canvas"
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
