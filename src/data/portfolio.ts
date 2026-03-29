export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export const name = "Nicholas Poulidis";
export const title = "Software Engineer";
export const tagline = "Building reliable systems and thoughtful interfaces.";
export const email = "nicholas@poulidis.dev";
export const github = "https://github.com/nicholaspoulidis";
export const linkedin = "https://linkedin.com/in/nicholaspoulidis";

export const about = `Software engineer with a focus on backend systems, developer tooling,
and clean architecture. I enjoy turning complex problems into simple,
well-documented solutions.`;

export const experience: Experience[] = [
  {
    company: "Acme Corp",
    role: "Software Engineer",
    period: "2023 — Present",
    bullets: [
      "Led migration of monolithic service to event-driven microservices",
      "Reduced p99 API latency by 40% through query optimisation and caching",
      "Maintained CI/CD pipelines across 12 services using GitHub Actions",
    ],
  },
  {
    company: "Startup XYZ",
    role: "Junior Developer",
    period: "2021 — 2023",
    bullets: [
      "Built RESTful APIs in Go consumed by web and mobile clients",
      "Designed and shipped internal admin dashboard with React + TypeScript",
      "Collaborated with design team to implement accessible UI components",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Brewer",
    description:
      "A terminal task manager built in Rust. Supports recurring tasks, tagging, and export to JSON/CSV.",
    tags: ["Rust", "CLI", "TUI"],
    repo: "https://github.com/nicholaspoulidis/brewer",
  },
  {
    title: "Grind",
    description:
      "Lightweight HTTP load testing tool with a live dashboard. Configurable ramp-up and concurrency profiles.",
    tags: ["Go", "HTTP", "Observability"],
    repo: "https://github.com/nicholaspoulidis/grind",
  },
  {
    title: "Roast",
    description:
      "Static site generator with hot-reload, Markdown + MDX support, and a zero-config plugin system.",
    tags: ["TypeScript", "Node.js", "SSG"],
    repo: "https://github.com/nicholaspoulidis/roast",
  },
  {
    title: "Drip",
    description:
      "Minimal webhook relay with retry logic, fan-out delivery, and a web UI for inspecting payloads.",
    tags: ["Go", "Webhooks", "Docker"],
    repo: "https://github.com/nicholaspoulidis/drip",
  },
];

export const skills: Skill[] = [
  { category: "Languages", items: ["Go", "TypeScript", "Rust", "Python", "SQL"] },
  { category: "Backend",   items: ["PostgreSQL", "Redis", "gRPC", "REST", "Kafka"] },
  { category: "Frontend",  items: ["React", "Vite", "CSS Modules", "TailwindCSS"] },
  { category: "Infra",     items: ["Docker", "Kubernetes", "GitHub Actions", "AWS"] },
];
