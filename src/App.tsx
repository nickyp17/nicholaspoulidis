import { useState, useEffect } from "react";
import ProjectsPanel from "./components/ProjectsPanel";
import ExperiencePanel from "./components/ExperiencePanel";
import { name, title, about, email, github, linkedin } from "./data/portfolio";
import styles from "./App.module.css";

type Tab = "projects" | "experience";
type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return "light";
}

export default function App() {
  const [tab, setTab] = useState<Tab>("experience");
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [activeReport, setActiveReport] = useState<{ title: string; url: string } | null>(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={styles.root}>
      <div className={styles.layout}>
        <header className={styles.hero}>
          <div className={styles.heroInfo}>
            <div className={styles.identity}>
              <div className={styles.avatar}>NP</div>
              <div>
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.titleText}>{title}</p>
              </div>
              <nav className={styles.tabs}>
                <button
                  className={`${styles.tab} ${tab === "experience" ? styles.active : ""}`}
                  onClick={() => { setTab("experience"); setActiveReport(null); }}
                >
                  experience
                </button>
                <button
                  className={`${styles.tab} ${tab === "projects" ? styles.active : ""}`}
                  onClick={() => setTab("projects")}
                >
                  projects
                </button>
              </nav>
            </div>
            {!activeReport && (
              <>
                <p className={styles.about}>{about}</p>
                <div className={styles.links}>
                  <a href={`mailto:${email}`} className={styles.link}>
                    <span className={styles.linkIcon}>✉</span>{email}
                  </a>
                  <a href={github} target="_blank" rel="noreferrer" className={styles.link}>
                    <span className={styles.linkIcon}>⌥</span>github
                  </a>
                  <a href={linkedin} target="_blank" rel="noreferrer" className={styles.link}>
                    <span className={styles.linkIcon}>◈</span>linkedin
                  </a>
                </div>
              </>
            )}
          </div>
          <button
            className={styles.themeToggle}
            onClick={() => setTheme(t => t === "light" ? "dark" : "light")}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? "dark" : "light"}
          </button>
        </header>
        <main className={styles.panel}>
          {tab === "projects"
            ? <ProjectsPanel activeReport={activeReport} setActiveReport={setActiveReport} />
            : <ExperiencePanel />
          }
        </main>
      </div>
    </div>
  );
}
