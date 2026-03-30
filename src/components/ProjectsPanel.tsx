import { projects, type Project } from "../data/portfolio";
import styles from "./ProjectsPanel.module.css";

interface Props {
  activeReport: { title: string; url: string } | null;
  setActiveReport: (r: { title: string; url: string } | null) => void;
}

function handleCardClick(p: Project, setActiveReport: (r: { title: string; url: string }) => void) {
  if (p.report) {
    setActiveReport({ title: p.title, url: p.report });
  } else if (p.repo) {
    window.open(p.repo, "_blank", "noreferrer");
  } else if (p.link) {
    window.open(p.link, "_blank", "noreferrer");
  }
}

export default function ProjectsPanel({ activeReport, setActiveReport }: Props) {

  if (activeReport) {
    return (
      <div className={styles.viewer}>
        <div className={styles.viewerHeader}>
          <button className={styles.backBtn} onClick={() => setActiveReport(null)}>
            ← back
          </button>
          <span className={styles.viewerTitle}>{activeReport.title} — report</span>
          <a href={activeReport.url} target="_blank" rel="noreferrer" className={styles.openBtn}>
            open ↗
          </a>
        </div>
        {/* Desktop: inline iframe */}
        <iframe
          src={activeReport.url}
          className={styles.pdfFrame}
          title={`${activeReport.title} report`}
        />
        {/* Mobile: hand off to native PDF viewer */}
        <div className={styles.pdfFallback}>
          <p className={styles.fallbackTitle}>{activeReport.title}</p>
          <p className={styles.fallbackHint}>PDFs are best viewed in your device's native viewer.</p>
          <a
            href={activeReport.url}
            target="_blank"
            rel="noreferrer"
            className={styles.fallbackBtn}
          >
            open report ↗
          </a>
        </div>
      </div>
    );
  }

  return (
    <section className={styles.panel}>
      <h2 className={styles.heading}>
        <span className={styles.prefix}>~/</span>projects
      </h2>
      <div className={styles.grid}>
        {projects.map((p) => (
          <article
            key={p.title}
            className={`${styles.card} ${p.repo || p.link || p.report ? styles.clickable : ""}`}
            onClick={() => handleCardClick(p, setActiveReport)}
          >
            <div className={styles.cardTop}>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <span className={styles.cardHint}>
                {p.report ? "report ↗" : p.repo ? "repo ↗" : p.link ? "live ↗" : ""}
              </span>
            </div>
            <p className={styles.cardDesc}>{p.description}</p>
            <div className={styles.tags}>
              {p.tags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
