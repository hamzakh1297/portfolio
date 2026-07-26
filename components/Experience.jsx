import Reveal from "./Reveal";
import styles from "./Experience.module.css";

const stops = [
  {
    role: "Co-Founder & Project Manager",
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
          <h2 className="section-title">Career, mapped like a delivery run</h2>
          <p className="section-sub">
            Two ventures, six years, one route — from international client
            delivery on the web to daily operations on the ground.
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
