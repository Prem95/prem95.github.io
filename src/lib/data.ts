export const config = {
  name: "Prem Kumar",
  role: "AI Engineer & Builder",
  tagline:
    "I build agentic AI systems for the insurance industry and ship SaaS products that make work simpler.",
  email: "premkumar@premstroke.com",
  github: "https://github.com/Prem95",
  twitter: "https://twitter.com/premstroke95",
  linkedin: "https://linkedin.com/in/prem-kumar",
  resume: "/resume.pdf",
  availability: "Open to consulting & partnerships",
};

export const about = {
  bio: [
    "I'm a Generative AI Engineer at Ancileo, where I design and ship agentic systems for the insurance industry — autonomous agents that handle claims processing, policy recommendations, and customer interactions end-to-end.",
    "Outside of Ancileo, I build the Simpler product suite: SaaS tools that solve real problems for freelancers and small businesses. Started as scratch-my-own-itch projects, now used by real people.",
    "I care about performance, clean interfaces, and systems that stay out of the way.",
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
    role: "Generative AI Engineer",
    location: "Singapore (Remote)",
    range: "February 2024 — Present",
    start: 2024,
    end: null,
    description: [
      "Developed automated travel insurance claim process using LangGraph AI Agent and RAG in Azure cluster.",
      "Optimised AI Agent to run 24/7 at $2/hour, reducing claims processing time by 60%.",
      "Applied advanced prompt engineering techniques using LangChain, LlamaIndex and DSPy frameworks.",
      "Cross-evaluated open source LLMs on HuggingFace including Mixtral, Qwen and Llama models.",
      "Deployed AI Agents on Kubernetes clusters with auto-scaling worker pods for scalability.",
      "Implemented CI/CD pipelines for model deployment on Azure cloud infrastructure.",
    ],
    tech: ["LangGraph", "LangChain", "Azure", "Kubernetes", "Python"],
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
      "Delivered Enterprise AI Agents with task-based workflows, enhancing operational efficiency.",
      "Pioneered the development of the first RAG pipeline for AI Chatbots with document retrieval and summarisation.",
      "Integrated AI agents with WhatsApp and Gmail — increased customer engagement by 35%.",
      "Deployed LLM-Ops infrastructure on AWS using LangSmith, Grafana, Jaeger, and Prometheus for monitoring.",
      "Evaluated multiple LLMs using synthetic data with RAGAS, improving output quality by 35%.",
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
      "Developed Face Anti-Spoofing (Passive Liveness Detection) algorithm using state-of-the-art Deep Learning for eKYC.",
      "Built 2D/3D Face Detector (3DDFA) using TensorFlow, deployed as a SaaS service.",
      "Developed a web dashboard to track ML model performance on evaluation datasets.",
      "Conducted applied research on Deep Learning papers to improve production model accuracy.",
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
      "Worked on core Software Electronics development for next-generation robotics in Singapore and Malaysia.",
      "Designed and tested Electronics Circuit Boards.",
      "Wrote scripts to perform autonomous testing on products, showcasing engineering initiative.",
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
      "Developed Liveness Detection for e-KYC, serving private and governmental clients across Malaysia.",
      "Built Facial Recognition models using DepthMap, 3DDFA and FaceNet technologies.",
      "Led data collection for model training, aggregating data from 30+ global sources.",
      "Achieved ISO 30107-3 Facial Recognition certification — first company in Southeast Asia to meet this standard.",
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
      "Developed multi-class Palm Seed Classification algorithm for Sime Darby Plantation.",
      "Built stage-wise image classification using CNN (AlexNet) with SVM as the final classifier.",
      "Created representative data visualisations and presented research results to stakeholders.",
    ],
    tech: ["AlexNet", "SVM", "Python", "Computer Vision"],
  },
];

export const products = [
  {
    name: "Simpler Invoices",
    url: "https://simplerinvoices.com",
    description:
      "Professional invoice generation for freelancers and small businesses. Create, send, and track invoices in seconds — no accounting degree required.",
    tech: ["Next.js", "Supabase", "Stripe", "Resend"],
    status: "Live",
    featured: true,
  },
  {
    name: "Simpler Infographics",
    url: "https://simplerinfographics.com",
    description:
      "AI-powered PDF to infographic converter. Transform documents into stunning, print-ready infographics in seconds — Executive, Visual, or Minimal styles.",
    tech: ["Next.js", "OpenAI", "Vercel"],
    status: "Live",
    featured: false,
  },
  {
    name: "Simpler Outreach",
    url: "https://simpleroutreach.com",
    description:
      "AI-powered cold email tool that writes personalised outreach at scale. Built on Claude Haiku for speed and efficiency.",
    tech: ["Node.js", "OpenRouter", "Resend", "Stripe"],
    status: "Live",
    featured: false,
  },
  {
    name: "Simpler Disputes",
    url: "https://simplerdisputes.com",
    description:
      "Automated dispute letter generator for consumers. Turn a frustrating chargeback process into a two-minute task.",
    tech: ["HTML", "Vercel", "Stripe"],
    status: "Live",
    featured: false,
  },
];

export const otherProjects = [
  {
    name: "Health Trend Keeper",
    description:
      "Web app that tracks health metrics by extracting data from medical reports and visualising trends over time.",
    tech: ["React", "OpenAI", "TypeScript", "Tailwind"],
    github: "https://github.com/Prem95/health-trend-keeper",
    external: null,
  },
  {
    name: "Face Recognition System",
    description:
      "Production-grade face recognition pipeline with real-time detection, embedding storage, and REST API.",
    tech: ["TensorFlow", "OpenCV", "Keras", "FastAPI"],
    github: "https://github.com/Prem95",
    external: null,
  },
  {
    name: "Overcooking",
    description:
      "Browser-based 3D cooking game inspired by Overcooked, built with Three.js. Features 3D kitchen environment with interactive stations.",
    tech: ["Three.js", "Node.js", "JavaScript"],
    github: "https://github.com/Prem95/Overcooking",
    external: null,
  },
  {
    name: "Catering Chatbot",
    description:
      "Catering order chatbot for Caterspot using LangChain and OpenAI. Handles order flow end-to-end.",
    tech: ["LangChain", "OpenAI", "React", "Node.js"],
    github: null,
    external: null,
  },
];
