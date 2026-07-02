import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { config } from "@/lib/data";

// Body + display: Geist — clean, technical sans; carries the heavy 800 weight.
const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// Mono labels: Geist Mono.
const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable}`}
      style={{ "--font-display": "var(--font-sans)" } as React.CSSProperties}
    >
      <body className="antialiased isolate relative">{children}</body>
    </html>
  );
}
