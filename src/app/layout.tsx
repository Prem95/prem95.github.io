import type { Metadata } from "next";
import { Jost, DM_Mono } from "next/font/google";
import "./globals.css";
import { config } from "@/lib/data";

// Jost — a geometric sans in the Futura lineage. Distinctive, not a default.
const jost = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
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
    <html lang="en" className={`${jost.variable} ${dmMono.variable}`}>
      <body className="antialiased isolate relative">{children}</body>
    </html>
  );
}
