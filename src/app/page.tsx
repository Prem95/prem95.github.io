import { readFileSync } from "fs";
import { join } from "path";
import Chrome from "@/components/Chrome";
import SideRail from "@/components/SideRail";
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import SiteFooter from "@/components/SiteFooter";
import { config } from "@/lib/data";
import type { GitHubStats } from "@/lib/github";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: config.name,
  url: config.siteUrl,
  jobTitle: "AI Engineer",
  description: config.tagline,
  email: `mailto:${config.email}`,
  worksFor: {
    "@type": "Organization",
    name: "Ancileo",
    url: "https://ancileo.com",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Monash University",
  },
  knowsAbout: [
    "Agentic AI",
    "LangGraph",
    "Retrieval-Augmented Generation",
    "Multi-Agent Orchestration",
    "LLM Engineering",
    "Machine Learning",
  ],
  sameAs: [config.github, config.linkedin, config.twitter],
};

function loadStats(): GitHubStats | null {
  try {
    return JSON.parse(
      readFileSync(join(process.cwd(), "public/github-stats.json"), "utf8"),
    ) as GitHubStats;
  } catch {
    return null;
  }
}

export default function Home() {
  const stats = loadStats();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Chrome />
      <div className="mx-auto flex w-full max-w-[1200px]">
        <SideRail />
        <main className="min-w-0 flex-1 border-border lg:border-x">
          <TopBar />
          <div className="px-5 sm:px-9 lg:px-14">
            <Hero />
            <About stats={stats} />
            <Experience />
            <Products />
            <Contact />
            <SiteFooter />
          </div>
        </main>
      </div>
    </>
  );
}
