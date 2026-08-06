import Reveal from "./Reveal";
import styles from "./Experience.module.css";

const naxotopLogo =
  "data:image/png;base64,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";

const nayabazarLogo =
  "data:image/png;base64,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";

const stops = [
  {
    role: "Full Stack Developer (Independent)",
    logo: null,
    logoEmoji: "\ud83d\ude80",
    logoAlt: "",
    org: "Independent / Freelance",
    href: null,
    tag: "Full-Stack Product Development",
    period: "Feb 2026 — Present",
    points: [
      "Designed, coded, and shipped MorEazy POS — a complete offline restaurant point-of-sale system built with Electron.js, Node.js, and better-sqlite3, paired with a PHP/MySQL licensing & management website.",
      "Built the entire product architecture solo: local SQLite data layer, Electron shell, every screen in the POS UI, thermal receipt printing, PIN-based multi-user login, table management, product variants, and sales reports.",
      "Developed a companion website with customer dashboard, license activation API, staff sync, cloud backup system, payment tracking, and a support ticket system.",
      "Created a custom REST API (/api/activate, /api/verify, /api/staff, /api/backup) connecting the desktop app and website, secured with a shared app secret, per-IP rate limiting, and one-license-per-device enforcement.",
      "Currently developing additional full-stack web projects — expanding independent product portfolio.",
    ],
  },
  {
    role: "Co-Founder & Project Manager",
    logo: naxotopLogo,
    logoAlt: "Naxotop logo",
    org: "Naxotop.com PVT LTD",
    href: "https://naxotop.com",
    tag: "Web Development Company · Pakistan",
    period: "2020 — 2026",
    points: [
      "Co-founded and managed a web development company for 6 years, overseeing projects from design to delivery.",
      "Sourced new clients by promoting the company's digital products and services on social media.",
      "Documented full functional requirements for each new project and got client sign-off before development began — kept as reference throughout the build.",
      "Guided the development team step-by-step as project manager, acting as the main link between clients and developers.",
      "Personally developed several early-stage projects — including a blogging platform, a school website, and a student management system — using HTML, CSS, JavaScript, and PHP.",
      "Led a major project for a France-based daycare company (140+ daycares) — managed development of their main web application, contract signing system, and employee tracking tool end-to-end.",
      "Managed full-cycle web tool projects for an India-based company — handled design, development coordination, and delivery of video & image editing web tools from scratch.",
      "Built an internal Employee Management Web Tool for Naxotop's own operations, and produced marketing & guide videos published on YouTube.",
    ],
  },
  {
    role: "Co-Founder & Operations Lead",
    logo: nayabazarLogo,
    logoAlt: "NayaBazar logo",
    org: "NayaBazar.pk",
    href: "https://nayabazar.pk",
    tag: "Local E-Commerce & Delivery Startup · Mian Channu",
    period: "2023 — 2026",
    points: [
      "Designed the entire app UI/UX from scratch and coordinated development team throughout build.",
      "Defined requirements and finalized features for the customer-facing mobile app, coordinating with the tech team to deliver a complete working system.",
      "Led product definition and feature finalization for a Manager Dashboard — enabling real-time order and operations monitoring.",
      "Defined and finalized a complete Seller POS System supporting both local and online sales for shop owners on the platform.",
      "Oversaw requirements and finalization of a Super Admin Dashboard with full platform control and management functions.",
      "Created the launch plan, marketing strategy, social media ads, banner designs, and flyer campaigns.",
      "Onboarded 100+ local shops with 11,000+ products listed on the platform.",
      "Grew the app to 30,000+ downloads in one year through hands-on marketing execution.",
      "Managed 100–150 daily deliveries — ensuring on-time, quality order fulfillment.",
      "Handled team hiring, staff management, and all office & daily operations.",
      "Continuously collected customer feedback and improved the platform based on real user data.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">The Route</p>
          <h2 className="section-title">Work experience</h2>
          <p className="section-sub">
            From independent product builds to co-founding two companies —
            six years of shipping software and running operations end to end.
          </p>
        </Reveal>

        <Reveal className={styles.timeline}>
          {stops.map((stop, i) => (
            <div className={styles.stop} style={{ "--i": i }} key={stop.role + stop.period}>
              <div className={styles.stopTop}>
                <div className={styles.stopLogo} aria-hidden="true">
                  {stop.logo ? (
                    <img src={stop.logo} alt={stop.logoAlt} />
                  ) : (
                    <span className={styles.logoEmoji}>{stop.logoEmoji}</span>
                  )}
                </div>
                <div className={styles.stopHeading}>
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
                </div>
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
