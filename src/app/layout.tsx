import type { Metadata } from "next";
import { Archivo, Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { config } from "@/lib/data";

// Body: Archivo — a grotesque with squared-off terminals that stays even at
// small sizes. Deliberately not Inter/Geist, which every generated site ships.
const archivo = Archivo({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// Display: Bricolage Grotesque — slightly irregular widths give the headings
// a voice the body face doesn't have, and it stays tight at weight 800.
const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

// Mono labels and figures: IBM Plex Mono.
const plexMono = IBM_Plex_Mono({
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
      className={`${archivo.variable} ${bricolage.variable} ${plexMono.variable}`}
    >
      <body className="antialiased isolate relative">{children}</body>
    </html>
  );
}
