import { useState } from "react";
import ProjectsPanel from "./components/ProjectsPanel";
import ExperiencePanel from "./components/ExperiencePanel";
import { name, title, about, email, github, linkedin } from "./data/portfolio";
import styles from "./App.module.css";

type Tab = "projects" | "experience";

export default function App() {
  const [tab, setTab] = useState<Tab>("experience");

  return (
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
                onClick={() => setTab("experience")}
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
        </div>
      </header>
      <main className={styles.panel}>
        {tab === "projects" ? <ProjectsPanel /> : <ExperiencePanel />}
      </main>
    </div>
  );
}
