export const config = {
  name: "Prem Kumar",
  role: "AI Engineer & Builder",
  tagline:
    "Building agentic AI for insurance by day, shipping SaaS products by night.",
  email: "premkumar@premstroke.com",
  github: "https://github.com/Prem95",
  twitter: "https://twitter.com/premstroke95",
  linkedin: "https://linkedin.com/in/prem-kumar",
  resume: "/resume.pdf",
  availability: "Open to consulting & partnerships",
  githubStats: null as any, // Will be populated at build time
};

export const about = {
  bio: [
    "At Ancileo I build the agents that process travel insurance claims end-to-end. LangGraph, RAG over policy docs, runs on Azure. 80% of claims go through without a human.",
    "On the side: the Simpler suite (invoices, outreach, disputes, infographics). Scratch-my-own-itch projects that became actual products. I like systems that are boring to operate.",
  ],
  skills: [
    { name: "Python" },
    { name: "LangChain" },
    { name: "LangGraph" },
    { name: "LlamaIndex" },
    { name: "DSPy" },
    { name: "OpenAI API" },
    { name: "TypeScript" },
    { name: "Next.js" },
    { name: "Node.js" },
    { name: "PostgreSQL" },
    { name: "Supabase" },
    { name: "Docker" },
    { name: "AWS / Azure" },
    { name: "Kubernetes" },
    {
      name: "Claude Code",
      href: "https://code.claude.com/",
      tooltip: "Anthropic's official agentic CLI — the foundation these frameworks build on",
    },
    {
      name: "Openclaw",
      href: "https://openclaw.ai/",
      tooltip: "Open-source autonomous agent framework — 163k stars, skill marketplace, runs on any LLM",
    },
    {
      name: "Nanoclaw",
      href: "https://nanoclaw.dev/",
      tooltip: "Lightweight container-isolated agent built on the Claude Agent SDK — 15 files, fully auditable",
    },
    {
      name: "skills.md",
      href: "https://code.claude.com/docs/en/skills",
      tooltip: "The open skill format for extending any coding agent — YAML frontmatter + markdown instructions",
    },
  ],
};

export const experience = [
  {
    company: "Ancileo",
    url: "https://ancileo.com",
    role: "AI Engineer (Agents)",
    location: "Singapore (Remote)",
    range: "February 2024 — Present",
    start: 2024,
    end: null,
    description: [
      "Currently building a conversational insurance agent using OpenAI's Agents SDK and Strands — multi-turn, context-aware, handles the full claims conversation end-to-end. Claude Code does most of the heavy lifting on the engineering side.",
      "Built an earlier claims agent on Azure using LangGraph and RAG over policy docs — ran without human-in-the-loop for 80% of cases.",
      "Cut claims processing time by 60% and kept it running at $2/hour by optimising token usage and caching intermediate steps.",
      "Ran structured evals across Mixtral, Qwen, and Llama using DSPy and LlamaIndex to find what holds up in production, not just benchmarks.",
    ],
    tech: ["Strands", "OpenAI Agents SDK", "Claude Code", "LangGraph", "Azure"],
  },
  {
    company: "Azara AI",
    url: "https://www.getorchestrator.com/",
    role: "Generative AI Engineer",
    location: "United States (Remote)",
    range: "August 2022 — November 2023",
    start: 2022,
    end: 2023,
    description: [
      "Built task-based AI agents for enterprise clients — the kind that replace a repeatable human workflow, not just answer questions.",
      "Shipped the first RAG pipeline at the company: document ingestion, retrieval, summarisation, hooked into an LLM chatbot interface.",
      "Wired agents into WhatsApp and Gmail. Customer engagement went up 35% — though that number is partly a product decision, not just engineering.",
      "Set up LLM-Ops on AWS: LangSmith for tracing, Grafana and Prometheus for infra. The goal was catching regressions before users did.",
      "Ran evals with RAGAS on synthetic data across model versions. Got output quality up 35% by cutting hallucination on retrieval-heavy tasks.",
    ],
    tech: ["LangChain", "RAG", "AWS", "LangSmith", "Python"],
  },
  {
    company: "WISE AI",
    url: "https://wiseai.tech/",
    role: "Machine Learning Engineer",
    location: "Malaysia",
    range: "August 2020 — November 2022",
    start: 2020,
    end: 2022,
    description: [
      "Built passive liveness detection for eKYC — the model tells a live face from a printed photo or screen replay without asking the user to blink or nod.",
      "Shipped 2D/3D face detection (3DDFA) as a SaaS service on TensorFlow. Small team, fast iteration.",
      "Built an internal dashboard for tracking model accuracy across eval datasets — made regressions visible before they hit production.",
      "Read ML papers and turned the useful bits into production improvements. Most papers don't survive contact with real data.",
    ],
    tech: ["TensorFlow", "OpenCV", "Keras", "Flask", "Docker"],
  },
  {
    company: "Dyson",
    url: "https://www.dyson.com",
    role: "Software Engineer",
    location: "Singapore",
    range: "January 2019 — August 2020",
    start: 2019,
    end: 2020,
    description: [
      "Worked on electronics for Dyson's robotics division across Singapore and Malaysia — the hardware side, not the app.",
      "Designed and tested circuit boards. Slow feedback loops, a lot of patience.",
      "Wrote Python scripts to automate hardware testing. Saved a meaningful amount of manual QA time.",
    ],
    tech: ["Python", "C++", "Electronics", "Robotics"],
  },
  {
    company: "Neofin",
    url: "#",
    role: "Machine Learning Engineer",
    location: "United States (Remote)",
    range: "July 2018 — August 2019",
    start: 2018,
    end: 2019,
    description: [
      "Built liveness detection for e-KYC used by private and government clients in Malaysia — the thing that stops someone holding up a photo to a camera.",
      "Trained facial recognition models on DepthMap, 3DDFA, and FaceNet. A lot of the work was data, not architecture.",
      "Sourced training data from 30+ datasets across countries. Diversity in training data matters more than most ML engineers admit.",
      "Got the company ISO 30107-3 certified — first in Southeast Asia at the time. Mostly paperwork, but the underlying model had to actually meet the bar.",
    ],
    tech: ["FaceNet", "3DDFA", "Python", "TensorFlow"],
  },
  {
    company: "Monash University",
    url: "https://www.monash.edu/",
    role: "Graduate Research Engineer",
    location: "Malaysia",
    range: "January 2017 — December 2018",
    start: 2017,
    end: 2018,
    description: [
      "Built a palm seed classifier for Sime Darby Plantation — multi-class CV model to sort seeds by quality at scale.",
      "Used AlexNet as the backbone with an SVM on top as the final classifier. This was 2017; that was the move.",
      "Turned the results into visualisations for non-technical stakeholders. Learned early that a model nobody understands doesn't get deployed.",
    ],
    tech: ["AlexNet", "SVM", "Python", "Computer Vision"],
  },
];

export const products = [
  {
    name: "Hiregents",
    url: "https://hiregents.com",
    description:
      "Pick an agent. Connect your Telegram bot. Agent is live and running on its own private server in minutes.",
    tech: ["AI Agents", "Telegram Bot API", "Infrastructure"],
    status: "Live",
    featured: true,
  },
  {
    name: "Simpler Invoices",
    url: "https://simplerinvoices.com",
    description:
      "Invoicing for freelancers who don't want to think about invoicing. Generate, send, and track — the whole thing takes under a minute.",
    tech: ["Next.js", "Supabase", "Stripe", "Resend"],
    status: "Live",
    featured: false,
  },
  {
    name: "Simpler Infographics",
    url: "https://simplerinfographics.com",
    description:
      "Drop in a PDF, get a print-ready infographic. Three output styles — pick the one that fits the audience.",
    tech: ["Next.js", "OpenAI", "Vercel"],
    status: "Live",
    featured: false,
  },
  {
    name: "Simpler Outreach",
    url: "https://simpleroutreach.com",
    description:
      "Cold email that doesn't read like cold email. Personalised at scale using Claude Haiku — fast enough to not be annoying.",
    tech: ["Node.js", "OpenRouter", "Resend", "Stripe"],
    status: "Live",
    featured: false,
  },
  {
    name: "Simpler Disputes",
    url: "https://simplerdisputes.com",
    description:
      "Chargeback dispute letters, generated. The process is tedious by design — this makes it take two minutes instead of two hours.",
    tech: ["HTML", "Vercel", "Stripe"],
    status: "Live",
    featured: false,
  },
];

export const otherProjects = [
  {
    name: "Health Trend Keeper",
    description:
      "Pulls health metrics out of medical report PDFs and charts them over time. Built it after getting tired of manually logging numbers from lab results.",
    tech: ["React", "OpenAI", "TypeScript", "Tailwind"],
    github: "https://github.com/Prem95/health-trend-keeper",
    external: null,
  },
  {
    name: "Face Recognition System",
    description:
      "End-to-end face recognition pipeline — detection, embedding storage, REST API. Reusable reference implementation from my eKYC work.",
    tech: ["TensorFlow", "OpenCV", "Keras", "FastAPI"],
    github: "https://github.com/Prem95",
    external: null,
  },
  {
    name: "Overcooking",
    description:
      "A browser Overcooked clone in Three.js. 3D kitchen, interactive stations, multiplayer chaos. Built it to learn WebGL.",
    tech: ["Three.js", "Node.js", "JavaScript"],
    github: "https://github.com/Prem95/Overcooking",
    external: null,
  },
  {
    name: "Catering Chatbot",
    description:
      "Order-taking chatbot for Caterspot. Handles the full flow — menu, quantities, delivery — so staff don't have to repeat the same questions.",
    tech: ["LangChain", "OpenAI", "React", "Node.js"],
    github: null,
    external: null,
  },
];
