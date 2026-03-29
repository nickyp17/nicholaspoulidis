import { projects } from "../data/portfolio";
import styles from "./ProjectsPanel.module.css";

export default function ProjectsPanel() {
  return (
    <section className={styles.panel}>
      <h2 className={styles.heading}>
        <span className={styles.prefix}>~/</span>projects
      </h2>
      <div className={styles.grid}>
        {projects.map((p) => (
          <article key={p.title} className={styles.card}>
            <div className={styles.cardTop}>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <div className={styles.cardActions}>
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer" className={styles.cardLink}>
                    repo ↗
                  </a>
                )}
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className={styles.cardLink}>
                    live ↗
                  </a>
                )}
              </div>
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
