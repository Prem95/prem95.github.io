import { readFileSync } from "fs";
import { join } from "path";
import Chrome from "@/components/Chrome";
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { config } from "@/lib/data";
import type { GitHubStats } from "@/lib/github";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: config.name,
  url: config.siteUrl,
  jobTitle: "Forward Deployed Engineer",
  hasOccupation: {
    "@type": "Occupation",
    name: "Forward Deployed Engineer",
    description:
      "Builds applications, SaaS products and production AI systems with startups and organisations, from prototype to deployment.",
  },
  description: config.tagline,
  email: `mailto:${config.email}`,
  worksFor: {
    "@type": "Organization",
    name: "Chromia",
    url: "https://chromia.com",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Monash University",
  },
  knowsAbout: [
    "Forward Deployed Engineering",
    "Agentic Development",
    "AI Agent Deployment",
    "SaaS Development",
    "Production Systems",
    "Full-Stack Development",
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
      {/* one ruled column: the top bar, then each section as a band */}
      <div className="mx-auto w-full max-w-[1200px] border-border min-[1200px]:border-x">
        <TopBar />
        <main className="px-5 sm:px-9 lg:px-14">
          <Hero />
          <About stats={stats} />
          <Experience />
          <Products />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}
