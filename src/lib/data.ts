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
      "Built an internal claims assessment engine on LangGraph, designing custom nodes per business rule and wiring the full decision flow end-to-end.",
      "Built the foundation of our insurance conversational agent on AWS Strands and Bedrock AgentCore runtime, deployed via Terraform (IaC) across multiple tenants; agents communicate through MCP, hooks, and shared DBs.",
      "Owned the Flowable BPM workflow manager automating claims assessment for the Ops and AI teams; led a cross-functional team of 3 engineers and QAs through to production.",
    ],
  },
  {
    company: "Azara AI",
    url: "https://www.getorchestrator.com/",
    role: "Lead AI Engineer",
    location: "United States (Remote)",
    range: "February 2023 — November 2023",
    start: 2023,
    end: 2023,
    description: [
      "Built a drag-and-drop workflow modeller for composing multi-step agent pipelines, similar to n8n, powering task-based AI agents across WhatsApp and Gmail; lifted engagement by 35%.",
      "Pioneered the company's first RAG pipeline, benchmarking indexers and retrieval strategies across frameworks to improve document retrieval, summarization, and citation quality.",
      "Built the agent observability stack on AWS with LangSmith, Grafana, Prometheus, and Jaeger.",
      "Ran RAGAS evaluations on synthetic data to refine agent output quality.",
    ],
  },
  {
    company: "Azara AI",
    url: "https://www.getorchestrator.com/",
    role: "Product Manager",
    location: "United States (Remote)",
    range: "August 2022 — February 2023",
    start: 2022,
    end: 2023,
    description: [
      "Managed technical and business requirements from clients; ran sprint planning and prioritization.",
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
      "Developed a CNN extension for liveness detection, and modelled a hybrid CNN to detect 3D facial depth as an anti-spoofing experiment.",
      "Led data sourcing across 30+ global sources, and ran additional data collection across multiple universities for model training and fine-tuning.",
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
      "Built liveness detection into the digital onboarding flow, verifying real applicants before credit scoring and underwriting.",
      "Integrated facial verification into the KYC pipeline to cut fraudulent applications during loan origination.",
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
    name: "Decenchro",
    url: "https://decenchro.com",
    description:
      "Deploy secure, auditable AI agents that run 24/7 on your own private servers. Every action is logged immutably, with rule-based guards that pause risky operations for approval.",
    tech: ["OpenRouter", "Self-hosted"],
    status: "Live",
    featured: true,
    image: null,
  },
  {
    name: "Hiregents",
    url: "https://hiregents.com",
    description:
      "Pick an agent. Connect your Telegram bot. Agent is live and running on its own private server in minutes.",
    tech: ["AI Agents", "Telegram Bot API", "Infrastructure"],
    status: "Live",
    featured: false,
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
