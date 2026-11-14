import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { config } from "@/lib/data";

// Inter sets every word on the page, the name included (variable, with the
// optical-size axis, so large text renders in Inter Display). Light weights
// and tight tracking carry the hierarchy; there is no second family.
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(config.siteUrl),
  title: `${config.name} — ${config.role} · Applications, SaaS & AI Systems`,
  description: config.tagline,
  alternates: { canonical: "/" },
  keywords: [
    "Prem Kumar",
    "Lead AI Engineer",
    "AI Agents Engineer",
    "Agentic AI Engineer",
    "SaaS Development",
    "Production Systems",
    "Startup Engineer",
    "Full-Stack Engineer",
    "AI Engineer",
    "Agentic AI",
    "LangGraph",
  ],
  authors: [{ name: config.name, url: config.siteUrl }],
  creator: config.name,
  openGraph: {
    title: `${config.name} — ${config.role}`,
    description: config.tagline,
    url: config.siteUrl,
    siteName: config.name,
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${config.name} — ${config.role}`,
    description: config.tagline,
    creator: "@defichemist95",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={inter.variable}
    >
      <body className="antialiased isolate relative">{children}</body>
    </html>
  );
}
