export const config = {
  name: "Prem Kumar",
  role: "Senior AI Engineer",
  siteUrl: "https://premkumar95.com",
  tagline:
    "Senior AI Engineer, 8 years building AI agents, multi-agent orchestration, and ML systems for enterprise clients across insurtech and Web3.",
  email: "premstroke95@gmail.com",
  github: "https://github.com/Prem95",
  twitter: "https://x.com/defichemist95",
  linkedin: "https://www.linkedin.com/in/premstrk/",
  availability: "Open to remote & hybrid roles",
};

export const about = {
  bio: [
    "Engineer with 8 years building AI agents, multi-agent orchestration, and retrieval systems for enterprise and B2B clients across insurtech and Web3.",
    "These days I'm at Ancileo, building the bridge between claimants and insurers with AI agents. On the side, I ship my own SaaS products. What I care about most is building agents that scale in production.",
  ],
  skills: [
    {
      group: "Agentic",
      items: [
        "LangGraph",
        "LangChain",
        "Claude Code",
        "MCP",
        "Multi-Agent Orchestration",
        "RAG",
        "Anthropic SDK",
        "OpenAI SDK",
        "OpenRouter",
      ],
    },
    {
      group: "LLM Ops & Eval",
      items: ["LangSmith", "RAGAS", "Grafana", "Prometheus", "Jaeger"],
    },
    {
      group: "Backend",
      items: ["Python", "FastAPI", "Celery", "Async", "Redis", "PostgreSQL"],
    },
    {
      group: "Infra",
      items: ["Docker", "Kubernetes", "AWS", "Azure", "CI/CD"],
    },
    {
      group: "Vector & ML",
      items: [
        "Pinecone",
        "Embeddings",
        "Hybrid Search",
        "TensorFlow",
        "Fine-tuning",
      ],
    },
  ],
};

export const experience = [
  {
    company: "Ancileo",
    url: "https://ancileo.com",
    role: "Senior AI Engineer",
    location: "Singapore (Remote)",
    range: "July 2024 — Present",
    start: 2024,
    end: null,
    description: [
      "Shipped a conversational AI agent on WhatsApp that handles travel insurance claims end-to-end with customers.",
      "Architected an agentic claims pipeline on LangGraph, deployed on Azure Kubernetes, with RAG for policy grounding.",
      "Designed multi-step agent workflows with stateful orchestration, tool-use, and human-in-the-loop checkpoints.",
    ],
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
  },
  {
    company: "Tekkis",
    url: "#",
    role: "Python Developer",
    location: "Malaysia (Remote)",
    range: "April 2019 — April 2020",
    start: 2019,
    end: 2020,
    engagement: "Contract",
    description: [
      "Built backend services in Python for early-stage security and AI products.",
    ],
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
