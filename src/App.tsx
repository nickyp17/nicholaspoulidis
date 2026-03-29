import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ProjectsPanel from "./components/ProjectsPanel";
import ExperiencePanel from "./components/ExperiencePanel";
import styles from "./App.module.css";

type Tab = "projects" | "experience";

export default function App() {
  const [tab, setTab] = useState<Tab>("experience");

  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
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
        <div className={styles.panel}>
          {tab === "projects" ? <ProjectsPanel /> : <ExperiencePanel />}
        </div>
      </main>
    </div>
  );
}
