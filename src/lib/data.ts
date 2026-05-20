export const config = {
  name: "Prem Kumar",
  role: "AI Engineer & Builder",
  siteUrl: "https://premkumar95.com",
  tagline:
    "AI Engineer building agentic AI for insurance — LangGraph, RAG, multi-agent orchestration. Indie builder shipping the Simpler SaaS suite.",
  email: "premstroke95@gmail.com",
  github: "https://github.com/Prem95",
  twitter: "https://x.com/premstroke",
  linkedin: "https://www.linkedin.com/in/premstrk/",
  resume: "/resume.pdf",
  resumeUpdated: "2026",
  availability: "Open to consulting & partnerships",
};

export const about = {
  bio: [
    "Senior AI Engineer with 8 years building AI agents, multi-agent orchestration, and agentic pipelines for enterprise and B2B clients in insurance and finance. Strong in LangGraph orchestration, RAG, tool-use, and Claude Code-driven development. Shipped agentic systems from prototype to 24/7 production.",
    "On the side I ship my own products. Hiregents is an AI agent marketplace for Telegram. Paste your keys, an agent boots on a private VPS in about five minutes. SaaSClips turns a URL into a launch video in sixty seconds. I like systems that are boring to operate.",
  ],
  skills: [
    { name: "Python" },
    { name: "LangChain" },
    { name: "LangGraph" },
    { name: "LlamaIndex" },
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
      tooltip: "Anthropic's official agentic CLI. The foundation these frameworks build on.",
    },
    {
      name: "Openclaw",
      href: "https://openclaw.ai/",
      tooltip: "Open-source autonomous agent framework. 163k stars, skill marketplace, runs on any LLM.",
    },
    {
      name: "Nanoclaw",
      href: "https://nanoclaw.dev/",
      tooltip: "Container-isolated agent built on the Claude Agent SDK. 15 files, fully auditable.",
    },
    {
      name: "skills.md",
      href: "https://code.claude.com/docs/en/skills",
      tooltip: "The open skill format for extending any coding agent: YAML frontmatter plus markdown instructions.",
    },
  ],
};

export const experience = [
  {
    company: "Ancileo",
    url: "https://ancileo.com",
    role: "AI Engineer",
    location: "Singapore (Remote)",
    range: "July 2024 — Present",
    start: 2024,
    end: null,
    description: [
      "Shipped a conversational AI agent on WhatsApp that handles travel insurance claims end-to-end with customers.",
      "Architected an agentic claims pipeline on LangGraph, deployed on Azure Kubernetes, with RAG for policy grounding.",
      "Designed multi-step agent workflows with stateful orchestration, tool-use, and human-in-the-loop checkpoints.",
    ],
    tech: ["LangGraph", "RAG", "Azure Kubernetes", "Claude Code"],
  },
  {
    company: "Chromia",
    url: "https://chromia.com",
    role: "Lead AI Developer",
    location: "Sweden (Remote)",
    range: "November 2023 — February 2024",
    start: 2023,
    end: 2024,
    description: [
      "Designed and maintained Chromia's AI backend infrastructure across projects.",
      "Set up backend servers, services, and open-source projects for AI and robotics work.",
      "Kept services running and aligned to proper frameworks.",
      "Built quick proofs of concept and MVPs.",
    ],
    tech: ["Web3", "Vector Database", "Rell"],
  },
  {
    company: "Azara AI",
    url: "https://www.getorchestrator.com/",
    role: "Lead AI Engineer",
    location: "United States (Remote)",
    range: "August 2022 — November 2023",
    start: 2022,
    end: 2023,
    description: [
      "Delivered task-based AI Agents for enterprise workflows. Integrated with WhatsApp and Gmail; lifted engagement by 35%.",
      "Pioneered the company's first RAG pipeline with document retrieval, summarization, and citation.",
      "Built the agent observability stack on AWS with LangSmith, Grafana, Prometheus, and Jaeger.",
      "Ran RAGAS evaluations on synthetic data to refine agent output quality.",
    ],
    tech: ["RAG", "LangSmith", "RAGAS", "AWS"],
  },
  {
    company: "WISE AI",
    url: "https://wiseai.tech/",
    role: "Machine Learning Engineer",
    location: "Malaysia",
    range: "August 2019 — August 2022",
    start: 2019,
    end: 2022,
    description: [
      "Shipped Liveness Detection and Facial Recognition for e-KYC. Deployed to private and government clients in Malaysia.",
      "Led data sourcing across 30+ global sources for training and fine-tuning.",
      "Drove the team to ISO 30107-3 certification. First company in Southeast Asia.",
    ],
    tech: ["TensorFlow", "Computer Vision", "e-KYC"],
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
      "Built Facial Recognition for Loan Origination, deployed across four US fintech and neo-banking partners.",
    ],
    tech: ["Facial Recognition", "Python", "TensorFlow"],
  },
  {
    company: "Monash University",
    url: "https://www.monash.edu/",
    role: "Graduate Researcher",
    location: "Malaysia",
    range: "August 2017 — January 2018",
    start: 2017,
    end: 2018,
    description: [
      "CNN-based seed classification for an automated grading system.",
    ],
    tech: ["CNN", "Computer Vision", "Python"],
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
    image: "/og/hiregents.png",
  },
  {
    name: "SaaSClips",
    url: "https://saasclips.com",
    description:
      "Launch-video generator for SaaS founders. Paste a URL, get a square MP4 in sixty seconds.",
    tech: ["Next.js", "FFmpeg", "AI Voiceover"],
    status: "Live",
    featured: false,
    image: "/og/saasclips.png",
  },
  {
    name: "Simpler Invoices",
    url: "https://simplerinvoices.com",
    description:
      "Invoicing for freelancers who don't want to think about invoicing. Generate, send, and track. The whole thing takes under a minute.",
    tech: ["Next.js", "Supabase", "Stripe", "Resend"],
    status: "Live",
    featured: false,
    image: "/og/simpler-invoices.png",
  },
  {
    name: "Simpler Infographics",
    url: "https://simplerinfographics.com",
    description:
      "Drop in a PDF, get a print-ready infographic. Three output styles. Pick the one that fits the audience.",
    tech: ["Next.js", "OpenAI", "Vercel"],
    status: "Live",
    featured: false,
    image: null,
  },
  {
    name: "Simpler Outreach",
    url: "https://simpleroutreach.com",
    description:
      "Cold email that doesn't read like cold email. Personalised at scale using Claude Haiku, fast enough to not be annoying.",
    tech: ["Node.js", "OpenRouter", "Resend", "Stripe"],
    status: "Live",
    featured: false,
    image: "/og/simpler-outreach.png",
  },
  {
    name: "Simpler Disputes",
    url: "https://simplerdisputes.com",
    description:
      "Chargeback dispute letters, generated. The process is tedious by design. This makes it take two minutes instead of two hours.",
    tech: ["HTML", "Vercel", "Stripe"],
    status: "Live",
    featured: false,
    image: "/og/simpler-disputes.png",
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
      "End-to-end face recognition pipeline: detection, embedding storage, REST API. A reusable reference implementation from my eKYC work.",
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
      "Order-taking chatbot for Caterspot. Handles the full flow (menu, quantities, delivery) so staff don't repeat the same questions.",
    tech: ["LangChain", "OpenAI", "React", "Node.js"],
    github: null,
    external: null,
  },
];
