import { name, title, tagline, email, github, linkedin, about, skills } from "../data/portfolio";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.identity}>
        <div className={styles.avatar}>NP</div>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.title}>{title}</p>
        <p className={styles.tagline}>{tagline}</p>
      </div>

      <p className={styles.about}>{about}</p>

      <div className={styles.skills}>
        {skills.map((group) => (
          <div key={group.category} className={styles.skillGroup}>
            <span className={styles.skillCategory}>{group.category}</span>
            <div className={styles.skillItems}>
              {group.items.map((item) => (
                <span key={item} className={styles.tag}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.links}>
        <a href={`mailto:${email}`} className={styles.link}>
          <span className={styles.linkIcon}>✉</span>
          {email}
        </a>
        <a href={github} target="_blank" rel="noreferrer" className={styles.link}>
          <span className={styles.linkIcon}>⌥</span>
          github
        </a>
        <a href={linkedin} target="_blank" rel="noreferrer" className={styles.link}>
          <span className={styles.linkIcon}>◈</span>
          linkedin
        </a>
      </div>
    </aside>
  );
}
