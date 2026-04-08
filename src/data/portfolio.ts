export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
  report?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  url?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const name = "Nicholas Poulidis";
export const title = "Data & ML Engineer";
export const tagline = "Building intelligent systems from data pipelines to predictive models.";
export const email = "nicholas.poulidis@gmail.com";
export const github = "https://github.com/nickyp17";
export const linkedin = "https://linkedin.com/in/nickyp17";

export const about = `Software engineer with hands-on experience in machine learning, NLP, and data engineering. I've built data pipelines and deployed algorithms in production at ODAIA Intelligence, and developed features at Geotab across the full stack. I focus on applying ML to real-world problems, from predictive modelling and text classification to semantic search.`;

export const experience: Experience[] = [
  {
    company: "ODAIA Intelligence Inc.",
    role: "Contract Data Engineer",
    period: "Nov 2025 — Mar 2026",
    url: "https://odaia.ai",
    bullets: [
      "Built a synthetic data generation pipeline producing multi-year historical and forward-looking datasets with real-world statistical characteristics.",
      "Implemented configurable, recurring data generation to model incremental data loads and support robust testing workflows.",
    ],
  },
  {
    company: "Geotab Inc.",
    role: "Software Developer Intern",
    period: "Sep 2024 — Apr 2025",
    url: "https://www.geotab.com",
    bullets: [
      "Developed and debugged UI components in TypeScript, JavaScript, HTML, and CSS, delivering feature improvements to a fleet analytics platform.",
      "Improved automated test coverage with XUnit (C#) and Jest (TypeScript), increasing reliability of the test base.",
      "Collaborated on peer reviews and source control workflows using Git.",
    ],
  },
  {
    company: "ODAIA Intelligence Inc.",
    role: "Software Engineer Intern",
    period: "May 2023 — Aug 2023",
    url: "https://odaia.ai",
    bullets: [
      "Developed and deployed data processing algorithms in AWS using Python and MySQL to fulfill customer data requests.",
      "Validated algorithm correctness with PyTest and optimized MySQL queries to reduce response times and improve pipeline performance.",
    ],
  },
  {
    company: "ODAIA Intelligence Inc.",
    role: "Software Engineer Intern",
    period: "May 2022 — Aug 2022",
    url: "https://odaia.ai",
    bullets: [
      "Built and deployed backend algorithms in AWS using Python and MySQL.",
      "Parallelized data processing algorithms using multi-threading and multiprocessing, significantly improving throughput.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Peer.io",
    description:
      "Mobile app matching students with project collaborators using NLP-based semantic similarity scoring and a reputation system. Led development of the core matching algorithm.",
    tags: ["NLP", "Python", "Mobile", "Semantic Search"],
  },
  {
    title: "Tennis Match Predictor",
    description:
      "Predicted ATP match outcomes using feature-engineered FCNN, Random Forest, and ensemble models — achieving 66.79% test accuracy against a 50% baseline.",
    tags: ["PyTorch", "Scikit-learn", "Ensemble Models", "Python"],
    report: "/tennis-report.pdf",
  },
  {
    title: "Cyberbullying Detection",
    description:
      "Binary NLP classifier detecting cyberbullying in tweets. Applied Bag-of-Words feature extraction via CountVectorizer and logistic regression on a balanced 11K-sample dataset.",
    tags: ["NLP", "Scikit-learn", "Text Classification", "Python"],
    repo: "https://github.com/nickyp17/4NL3Group21",
    report: "/cyberbullying-report.pdf",
  },
  {
    title: "Consensus",
    description:
      "Clustered Amazon Alexa reviews using Cohere embeddings, PCA, t-SNE, and K-means to surface key feedback themes — shortlisted at Hack The North 2022 for Best Use of Cohere API.",
    tags: ["Cohere", "K-means", "Embeddings", "NLP"],
    repo: "https://github.com/nickyp17/consensus",
  },
  {
    title: "Lyrics Genre Classifier",
    description:
      "Trained a multi-class classifier to predict song genres (Rock, Hip-Hop, Pop) from lyrical content using scikit-learn on 55K song observations with cross-validation.",
    tags: ["Scikit-learn", "Classification", "Pandas", "Python"],
    repo: "https://github.com/nickyp17/LyricsClassificationChallenge",
  },
];

export const skills: Skill[] = [
  { category: "ML & AI",     items: ["PyTorch", "Scikit-learn", "NLP", "Pandas", "Cohere", "FastAPI"] },
  { category: "Languages",   items: ["Python", "SQL", "TypeScript", "Java", "C#", "C"] },
  { category: "Cloud & Infra", items: ["AWS", "Google Cloud", "Git", "System Architecture"] },
  { category: "Frontend",    items: ["React", "TypeScript", "Jest", "Selenium"] },
];
