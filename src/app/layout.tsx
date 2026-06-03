import type { Metadata } from "next";
import {
  Google_Sans,
  Google_Sans_Flex,
  Google_Sans_Code,
} from "next/font/google";
import "./globals.css";
import { config } from "@/lib/data";

// Display: Google Sans Flex — variable, carries the heavy 800 display weight.
const googleSansFlex = Google_Sans_Flex({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

// Body: Google Sans.
const googleSans = Google_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// Mono labels: Google Sans Code.
const googleSansCode = Google_Sans_Code({
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
    creator: "@premstroke",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${googleSansFlex.variable} ${googleSans.variable} ${googleSansCode.variable}`}
    >
      <body className="antialiased isolate relative">{children}</body>
    </html>
  );
}
