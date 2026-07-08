import Reveal from "./Reveal";
import styles from "./Experience.module.css";

const stops = [
  {
    role: "Co-Founder",
    org: "Naxotop.com",
    href: "https://naxotop.com",
    tag: "Web Development Co. · Pakistan",
    period: "2020 — 2026",
    points: [
      "Co-founded and ran a web development company for 6 years.",
      "Managed client projects end-to-end as the main link between clients and the dev team.",
      "Tracked deadlines and deliverables to ensure on-time project delivery.",
    ],
  },
  {
    role: "Co-Founder & Operations Lead",
    org: "NayaBazar.pk",
    href: "https://nayabazar.pk",
    tag: "Local E-Commerce & Delivery Startup · Mian Channu",
    period: "2023 — 2026",
    points: [
      "Co-founded a local delivery app connecting shops with customers.",
      "Onboarded 100+ shops in 1.5 months via direct field visits.",
      "Grew the app to 30,000+ downloads in one year through hands-on marketing.",
      "Managed 100–150 daily deliveries and full operations end-to-end.",
      "Gathered customer feedback and coordinated with the tech team to improve the app.",
    ],
  },
  {
    role: "Salesman",
    org: "General Store, Shah Alam Market",
    tag: "Lahore",
    period: "2017 — 2018",
    points: [],
  },
  {
    role: "Production Staff",
    org: "NTN Fabric Textile",
    tag: "Gajjumata, Lahore",
    period: "2018 — 2019",
    points: [],
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">The Route</p>
          <h2 className="section-title">Career, mapped like a delivery run</h2>
          <p className="section-sub">
            Every stop built on the last — from selling on the shop floor to
            running two companies at once.
          </p>
        </Reveal>

        <Reveal className={styles.timeline}>
          {stops.map((stop, i) => (
            <div className={styles.stop} style={{ "--i": i }} key={stop.role + stop.period}>
              <div className={styles.stopHead}>
                <h3 className={styles.stopRole}>{stop.role}</h3>
                <span className={styles.stopPeriod}>{stop.period}</span>
              </div>
              <div className={styles.stopOrg}>
                {stop.href ? (
                  <a href={stop.href} target="_blank" rel="noopener noreferrer">
                    {stop.org}
                  </a>
                ) : (
                  stop.org
                )}
                <span className={styles.stopTag}> · {stop.tag}</span>
              </div>
              {stop.points.length > 0 && (
                <ul className={styles.points}>
                  {stop.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
