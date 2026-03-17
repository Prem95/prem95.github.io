import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { config } from "@/lib/data";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400"],
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
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} ${dmMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
