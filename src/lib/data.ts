export const config = {
  name: "Prem Kumar",
  role: "Forward Deployed Engineer",
  siteUrl: "https://premkumar95.com",
  tagline:
    "Forward Deployed Engineer building applications, SaaS products and production AI systems for startups and organisations, from first prototype to live deployment.",
  email: "premstroke95@gmail.com",
  github: "https://github.com/Prem95",
  twitter: "https://x.com/defichemist95",
  linkedin: "https://www.linkedin.com/in/premstrk/",
  booking: "https://cal.com/prem-kumar-95/30min",
  availability: "Open to Forward Deployed Engineer roles · Remote / SEA",
};

export const about = {
  // First line is the lead; the rest render as supporting paragraphs
  bio: [
    "Forward deployed engineer with 8 years building applications, SaaS products and production systems for startups and organisations.",
    "Most of my work now is agentic development: AI agents, RAG pipelines and multi-agent workflows on LangGraph, OpenAI and AWS Bedrock.",
    "I work close to the people using the software: scoping the problem with them, building it full stack, and handling the deployment, infrastructure and monitoring until it runs in production.",
  ],
};

export const experience = [
  {
    company: "Chromia",
    url: "https://chromia.com",
    role: "Forward Deployed Engineer",
    location: "Sweden (Remote)",
    range: "2026 — Present",
    start: 2026,
    end: null,
    description: [
      "Architect and deploy the Chromia AI backend for AI and robotics projects, taking servers, services and open-source AI stacks from prototype to production.",
      "Run Chromia's AI Labs, including the Eval Engine for evaluating AI models and agents.",
      "Build secure Web3 AI agent applications focused on data and privacy, integrating Atbash tool-call guards and Decenchro's self-hosted, auditable agents.",
      "Embed with developers and teams building on Chromia: scope their problems with them, then ship proofs of concept, MVPs and developer tools such as a vector database research agent.",
    ],
  },
  {
    company: "Ancileo",
    url: "https://ancileo.com",
    role: "Senior AI Engineer",
    location: "Singapore (Remote)",
    range: "July 2024 — 2026",
    start: 2024,
    end: 2026,
    description: [
      "Developed an internal claims-assessment AI engine built on LangGraph, the OpenAI SDK, and an in-house AI library. Runs end-to-end, assessing the peril for claim approval against policy.",
      "Designed the foundation of a multi-tenant insurance conversational agent on AWS Strands and Bedrock AgentCore, provisioned via Terraform (IaC). Connected on WhatsApp via Twilio.",
      "Owned the Flowable BPM workflow manager automating claims assessment for the Ops and AI teams; led a cross-functional team of 3 engineers and QAs through to production.",
    ],
  },
  {
    company: "Azara AI",
    url: "https://www.getorchestrator.com/",
    role: "AI Engineer",
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
    description: [
      "Consulted the CEO on eKYC architecture for payments and BNPL, turning market demands into technical requirements, project plans and deadlines.",
      "Built a complete machine learning pipeline (data collection, model training and evaluation) for the existing system, and set up the AI training servers on AWS and on-premise.",
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

export const products = [
  {
    name: "Agentica",
    shot: "/products/agentica.jpg",
    url: "https://agentica.my",
    description: "All-In-One POS, ERP and AI for your Business Operations",
    highlights: [
      ["agenticaPOS", "Customisable POS for your business"],
      ["agenticaERP", "Handles stock, invoices, receipts, payroll, staffing and more", "EPF, SOCSO, EIS and PCB"],
      ["agenticaAI", "24/7 AI assistant that monitors your business"],
    ],
    tech: ["Next.js", "Supabase", "Prisma", "Telegram Bot API"],
    status: "Waitlist",
    featured: true,
    image: null,
    hue: 150,
  },
  {
    name: "Decenchro",
    shot: "/products/decenchro.jpg",
    url: "https://decenchro.com",
    description:
      "Deploy secure, auditable AI agents that run 24/7 on your own private servers. Every action is logged immutably, with rule-based guards that pause risky operations for approval.",
    tech: ["OpenRouter", "Self-hosted"],
    status: "Live",
    featured: false,
    image: null,
    hue: 178,
    points: [
      "AI agents running 24/7 on your own servers",
      "Every action logged immutably",
      "Rule-based guards pause risky operations",
    ],
  },
  {
    name: "Thirdspace",
    shot: "/products/thirdspace.jpg",
    url: "https://thirdspace.my",
    description:
      "An iPhone app for Malaysia that turns cafés' quiet hours into event space.",
    tech: ["Expo", "React Native", "Supabase"],
    status: "Live",
    featured: false,
    image: null,
    hue: 125,
    points: [
      "Cafés open slots in their quiet hours",
      "Organisers request a slot and publish an event page",
      "Visitors find events nearby and join them",
    ],
  },
  {
    name: "Hiregents",
    shot: "/products/hiregents.jpg",
    url: "https://hiregents.com",
    description:
      "Pick an agent. Connect your Telegram bot. Agent is live and running on its own private server in minutes.",
    tech: ["AI Agents", "Telegram Bot API", "Infrastructure"],
    status: "Live",
    featured: false,
    image: "/og/hiregents.png",
    hue: 25,
    points: [
      "Pick an agent, connect your Telegram bot",
      "Runs on its own private server",
      "Live in minutes",
    ],
  },
  {
    name: "SaaSClips",
    shot: "/products/saasclips.jpg",
    url: "https://saasclips.com",
    description:
      "Launch-video generator for SaaS founders. Paste a URL, get a square MP4 in sixty seconds.",
    tech: ["Next.js", "FFmpeg", "AI Voiceover"],
    status: "Live",
    featured: false,
    image: "/og/saasclips.png",
    hue: 320,
    points: [
      "Paste a URL, get a launch video",
      "Square MP4 in about sixty seconds",
      "AI voiceover built in",
    ],
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

export const references = [
  {
    name: "Alex Kshutashvili",
    position: "CTO & Co-Founder",
    company: "Neofin",
    location: "United States",
    email: "oleksandr@neofin.global",
  },
  {
    name: "Chern Loon Lim",
    position: "Tech Lead",
    company: "WISE AI",
    location: "Malaysia",
    email: "chernloon@wise.ai",
  },
  {
    name: "Shahid",
    position: "COO / Finance",
    company: "Azara AI",
    location: "United States",
    email: "shahid@raising1bn.com",
  },
  {
    name: "Joshua Smith",
    position: "CEO",
    company: "Tekkis",
    location: "Malaysia",
    email: "joshsmith.htp@gmail.com",
  },
];
