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
  title: `${config.name} — AI Engineer`,
  description: config.tagline,
  openGraph: {
    title: config.name,
    description: config.tagline,
    url: "https://premkumar95.com",
    siteName: config.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.name,
    description: config.tagline,
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
