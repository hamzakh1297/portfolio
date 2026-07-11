import Reveal from "./Reveal";
import styles from "./About.module.css";

const stats = [
  { value: "6+ yrs", label: "Running Naxotop PVT LTD" },
  { value: "140+", label: "Daycares served — France client" },
  { value: "11,000+", label: "Products listed on NayaBazar" },
  { value: "30,000+", label: "App downloads in year one" },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Profile</p>
          <h2 className="section-title">Two ventures, one operator</h2>
          <p className="section-sub">
            Sales &amp; operations professional with 6+ years building and
            running two businesses — from international client delivery to
            local logistics on the ground.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <p className={styles.summary}>
            Co-founded <strong>Naxotop PVT LTD</strong> (web development company)
            managing international client projects, and{" "}
            <strong>NayaBazar.pk</strong> (local delivery startup) — handling
            everything from app design and launch to onboarding 100+ shops,
            30,000+ downloads, and 100–150 daily deliveries. Skilled in project
            management, team building, marketing, and end-to-end operations.
          </p>
        </Reveal>

        <div className={styles.stats}>
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90} className={styles.statCard}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
