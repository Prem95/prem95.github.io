import type { Metadata } from "next";
import { Google_Sans_Code, Inter } from "next/font/google";
import "./globals.css";
import { config } from "@/lib/data";

// Same pairing as agentica.my. Inter (variable, with the optical-size axis,
// so headings render in Inter Display) sets every word; light weights and
// tight tracking carry the hierarchy.
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

// Google Sans Code for labels, figures and anything the page counts.
const googleSansCode = Google_Sans_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(config.siteUrl),
  title: `${config.name} — AI Engineer · Agentic AI, LangGraph & RAG`,
  description: config.tagline,
  alternates: { canonical: "/" },
  keywords: [
    "Prem Kumar",
    "AI Engineer",
    "Agentic AI",
    "LangGraph",
    "RAG",
    "Multi-Agent Orchestration",
    "LLM Engineering",
    "Machine Learning Engineer",
    "Claude Code",
    "AI Agents",
  ],
  authors: [{ name: config.name, url: config.siteUrl }],
  creator: config.name,
  openGraph: {
    title: `${config.name} — AI Engineer`,
    description: config.tagline,
    url: config.siteUrl,
    siteName: config.name,
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${config.name} — AI Engineer`,
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
      className={`${inter.variable} ${googleSansCode.variable}`}
    >
      <body className="antialiased isolate relative">{children}</body>
    </html>
  );
}
