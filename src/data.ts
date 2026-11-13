const env = import.meta.env;

export const profile = {
  name: "Ibrahim Ramzan",
  title: "Senior AI Product Engineer",
  roles: ["Agentic AI", "LLM Apps", "AI Automation", "Full-Stack SaaS"],
  location: "Pakistan · open to remote & relocation (EU, USA, Canada, Australia)",
  // Private/personal values come from environment variables (see .env.example)
  email: env.VITE_EMAIL ?? "",
  phone: env.VITE_PHONE ?? "",
  linkedin: env.VITE_LINKEDIN ?? "",
  cvUrl: env.VITE_CV_URL ?? "",
  photoUrl: env.VITE_PHOTO_URL || "/avatar.svg",
  summary:
    "AI Product Engineer and Associate Team Lead with 5+ years shipping production software for US insurance and healthcare platforms and building generative-AI SaaS products end to end. I design agentic applications, LLM-powered features and n8n AI automations on TypeScript, Next.js, Node.js, Supabase and Stripe — using a spec-first, AI-assisted workflow (Claude Code, Cursor, MCP) that ships fast without sacrificing quality.",
};

export const stats = [
  { value: "5+", label: "Years shipping" },
  { value: "12", label: "Engineers led" },
  { value: "~10k", label: "Patients covered by eligibility API" },
  { value: "40s→10s", label: "Load-time cut" },
];

export const projects = [
  { name: "LooksCraft", url: "https://lookscraft.com", tag: "Generative Media", color: "#a78bfa",
    desc: "AI video & creative platform orchestrating Kling, Sora, Veo 3, ElevenLabs and Suno in one canvas workflow for UGC creators and marketers. Launched Dec 2025, Shopify app May 2026.",
    metric: "~200 registered users", stack: ["Next.js", "Node.js", "TypeScript"] },
  { name: "Orzaqo", url: "https://orzaqo.com", tag: "Agentic Commerce", color: "#5eead4",
    desc: "Agentic storefront engine that makes WooCommerce stores readable to AI shopping assistants: structured data, feeds for Google, Bing and OpenAI, llms.txt, and a catalog-aware assistant.",
    metric: "AI-shopping ready stores", stack: ["Node.js", "TypeScript"] },
  { name: "VirtualTry", url: "https://virtualtry.shop", tag: "3D / AR", color: "#f0abfc",
    desc: "3D/AR virtual try-on for eyewear retailers on Shopify and WooCommerce, with a GLB/GLTF model pipeline and a companion GLB Aligner tool.",
    metric: "121 Shopify installs · 59 active stores · 4.0★ · 269 Woo subs", stack: ["Node.js", "React", "TypeScript"] },
  { name: "Elaviqo", url: "https://elaviqo.com", tag: "SaaS", color: "#fbbf24",
    desc: "Salon management SaaS covering bookings, POS, client records, staff pay, reports and a salon website.",
    metric: "End-to-end product", stack: ["Next.js", "Supabase", "PostgreSQL"] },
];

export const experience = [
  { role: "Technical Lead, HRMIS", org: "Zeki Expert Solutions", period: "Jun 2026 – Present",
    points: ["Lead a 12-person team building the internal HR platform on Next.js + Supabase with module-based, SOP-driven delivery.",
      "Introduced an AI-assisted, spec-driven workflow (Claude Code, Cursor) pairing speed with reviewable code."] },
  { role: "Dedicated Engineer — SelectQuote (US client)", org: "Zeki Expert Solutions", period: "Oct 2021 – Jul 2026",
    points: ["Built a token-authenticated eligibility endpoint covering ~10,000 patients that blocks ineligible enrollments.",
      "Re-architected a slow vendor API into an event-driven flow with real-time WebSockets, removing 30s timeouts.",
      "Shipped an AWS Lambda service bringing an AI voice agent's health risk assessments into the CRM; automated TCPA consent carry-over.",
      "Cut life-quote Step 1 load time from 40–50s to ~10s via a stored-procedure move."] },
  { role: "Full-Stack Developer (contract)", org: "speel.app & prosp.io", period: "Mar 2025 – Mar 2026",
    points: ["Sole developer of speel.app, an AI video generation app on Veo-class models — designed, launched and operated in production.",
      "Maintained and extended prosp.io, a production SaaS."] },
  { role: "Freelance Software Engineer", org: "Upwork", period: "2019 – 2024",
    points: ["Stripe Subscription & Invoice API implementations (both rated 5.0), Node.js fixes, React dashboards, AI-assisted MVPs."] },
];

export const skills: Record<string, string[]> = {
  "Agentic AI & LLMs": ["AI Agents", "Agentic Workflows", "OpenAI / Claude APIs", "Tool Calling", "MCP", "RAG", "Guardrails"],
  "AI Automation": ["n8n", "Webhooks", "CRM / Email / DB integrations"],
  "Generative Media": ["Veo 3", "Kling", "Sora", "ElevenLabs", "Suno"],
  "Full-Stack & Cloud": ["TypeScript", "Next.js", "React", "Node.js", "Supabase", "PostgreSQL", "AWS Lambda", "Cognito"],
  "Payments & 3D": ["Stripe", "Braintree", "Shopify apps", "WooCommerce", "GLB / GLTF", "AR"],
  "AI-Assisted Delivery": ["Claude Code", "Cursor", "Antigravity", "Spec-driven dev", "CI/CD"],
};

export const caseStudies = [
  { title: "Voice Agent", desc: "Streaming voice agent with barge-in, designed for a sub-500 ms target.", stack: "LiveKit · Deepgram · Llama 3.3 70B (Groq/Cerebras) · Cartesia" },
  { title: "Document Intelligence", desc: "Visual PDF page search: RAG over page images, MaxSim multivector re-ranking, VLM answers with bounding-box citations.", stack: "Multivector retrieval · VLM" },
  { title: "Agent Red-Teamer", desc: "Adversarial scanner that attacks AI agents in disposable Docker sandboxes, logging and scoring every tool call.", stack: "Docker · Agent security" },
];
