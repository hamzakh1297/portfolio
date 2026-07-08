import Reveal from "./Reveal";
import styles from "./About.module.css";

const stats = [
  { value: "6 yrs", label: "Running Naxotop.com" },
  { value: "100+", label: "Shops onboarded in 1.5 months" },
  { value: "30,000+", label: "App downloads in year one" },
  { value: "100–150", label: "Daily deliveries managed" },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Profile</p>
          <h2 className="section-title">Two ventures, one operator</h2>
          <p className="section-sub">
            Sales &amp; operations professional with hands-on experience building
            two businesses from zero. Started in field sales, grew into full
            operations management.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <p className={styles.summary}>
            Co-founded <strong>Naxotop</strong> (web development company, 6 years) and{" "}
            <strong>NayaBazar.pk</strong> (local delivery startup) — onboarding 100+
            shops, crossing 30,000+ app downloads, and running 100–150 daily
            deliveries. I move fast, I&apos;m comfortable with AI and dev tools, and
            I thrive when the pressure is on.
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
