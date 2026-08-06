import Reveal from "./Reveal";
import styles from "./About.module.css";

const stats = [
  { value: "50+", label: "Web projects managed at Naxotop PVT LTD" },
  { value: "0 → 1", label: "Built & managed the NayaBazar app from scratch" },
  { value: "100–150", label: "Daily deliveries — full system operated" },
  { value: "100+", label: "Local shops onboarded via direct field visits" },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Profile</p>
          <h2 className="section-title">Two ventures, one operator</h2>
          <p className="section-sub">
            Full-stack web developer &amp; sales professional with 6+ years
            building and running two businesses — from writing the code to
            closing the sale and running logistics on the ground.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <p className={styles.summary}>
            Co-founded <strong>Naxotop PVT LTD</strong> (web development company)
            managing international client projects, and{" "}
            <strong>NayaBazar.pk</strong> (local delivery startup) — handling
            everything from app design and launch to onboarding 100+ shops,
            30,000+ downloads, and 100–150 daily deliveries. Alongside that, I
            build software myself: most recently <strong>MorEazy POS</strong>, a
            complete offline restaurant point-of-sale system — an Electron.js
            desktop app paired with a PHP/MySQL licensing &amp; management
            website — designed, coded, and shipped solo. Skilled in full-stack
            development, project management, team building, marketing, and
            end-to-end operations.
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
