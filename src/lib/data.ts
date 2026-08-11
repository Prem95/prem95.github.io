export const config = {
  name: "Prem Kumar",
  role: "Senior AI Engineer",
  siteUrl: "https://premkumar95.com",
  tagline:
    "Senior AI Engineer, 8 years architecting agentic systems and multi-agent orchestration for enterprise clients across insurtech and Web3.",
  email: "premstroke95@gmail.com",
  github: "https://github.com/Prem95",
  twitter: "https://x.com/defichemist95",
  linkedin: "https://www.linkedin.com/in/premstrk/",
  availability: "Open to remote roles across Southeast Asia",
};

export const about = {
  bio: [
    "Senior AI engineer with 8 years architecting agentic systems for enterprise and B2B clients across insurtech and Web3, taking systems from first LangGraph node to multi-tenant production deployment.",
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
      "Developed an internal claims-assessment AI engine built on LangGraph, the OpenAI SDK, and an in-house AI library. Runs end-to-end, assessing the peril for claim approval against policy.",
      "Designed the foundation of a multi-tenant insurance conversational agent on AWS Strands and Bedrock AgentCore, provisioned via Terraform (IaC). Connected on WhatsApp via Twilio.",
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
      "Designed and built a drag-and-drop workflow modeller for composing multi-step agent pipelines (n8n-style), powering production AI agents across WhatsApp and Gmail; lifted engagement 35%.",
      "Pioneered the company's first RAG pipeline, benchmarking indexers and retrieval strategies.",
      "Built the agent observability and evaluation stack on AWS with LangSmith, Grafana, Prometheus, and Jaeger.",
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
      "Owned technical and business requirements gathering with clients; ran sprint planning and prioritization for the engineering team.",
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
      "Shipped liveness detection and facial recognition for e-KYC, deployed to private and government clients across Malaysia.",
      "Extended CNN architectures for liveness detection and prototyped a hybrid CNN for 3D facial-depth estimation as an anti-spoofing measure.",
      "Directed data sourcing across 30+ global sources plus multi-university collection for model training and fine-tuning.",
      "Drove the team to ISO 30107-3 certification, the first company in Southeast Asia to achieve it.",
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
      "Built facial recognition for loan origination, deployed across four US fintech and neo-banking partners.",
      "Embedded liveness detection and facial verification into the digital onboarding and KYC pipeline, blocking fraudulent applications ahead of credit scoring and underwriting.",
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

/* How the products above get built — the stack, and the custom Claude Code
   skills Prem wrote to ship them. */
export const buildKit = [
  {
    group: "Tech Stack",
    items: ["Claude Code", "Next.js / TS", "Stripe", "Supabase", "Vercel"],
  },
  {
    group: "Skills Used",
    items: ["/code-review", "/design-taste-frontend", "/ship-check"],
    note: "Custom Claude Code skills I built",
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
