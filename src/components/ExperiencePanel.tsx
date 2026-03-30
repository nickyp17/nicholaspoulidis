import { experience } from "../data/portfolio";
import styles from "./ExperiencePanel.module.css";

export default function ExperiencePanel() {
  return (
    <section className={styles.panel}>
      <h2 className={styles.heading}>
        <span className={styles.prefix}>~/</span>experience
      </h2>
      <div className={styles.timeline}>
        {experience.map((e, i) => (
          <article
            key={i}
            className={`${styles.entry} ${e.url ? styles.clickable : ""}`}
            onClick={() => e.url && window.open(e.url, "_blank", "noreferrer")}
          >
            <div className={styles.entryHeader}>
              <div>
                <h3 className={styles.company}>{e.company}</h3>
                <p className={styles.role}>{e.role}</p>
              </div>
              <span className={styles.period}>{e.period}</span>
            </div>
            <ul className={styles.bullets}>
              {e.bullets.map((b, j) => (
                <li key={j} className={styles.bullet}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
