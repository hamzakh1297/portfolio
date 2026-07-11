import Reveal from "./Reveal";
import styles from "./Skills.module.css";

const groups = [
  {
    label: "Sales & Business Dev",
    items: [
      "Field Sales",
      "B2B Acquisition",
      "Lead Generation",
      "Negotiation",
      "Client Relations",
      "Cold Outreach",
    ],
  },
  {
    label: "Operations & Management",
    items: [
      "Startup Operations",
      "Team Management",
      "Project Management",
      "Order Management",
      "Process Improvement",
      "Hiring & HR",
      "Vendor Coordination",
    ],
  },
  {
    label: "Marketing & Growth",
    items: ["App Growth Marketing", "Social Media Ads", "Content Creation", "Video Editing", "Launch Planning"],
  },
  {
    label: "Technology & Tools",
    items: [
      "AI Tools (ChatGPT, Claude, Gemini)",
      "HTML / CSS / JS",
      "UI/UX Design (Web Apps)",
      "Google Sheets & Docs",
      "GitHub",
      "Trello",
      "ClickUp",
      "HR Management Software",
    ],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Toolkit</p>
          <h2 className="section-title">What I bring to the floor</h2>
        </Reveal>

        <div className={styles.grid}>
          {groups.map((group, i) => (
            <Reveal key={group.label} delay={i * 100} className={styles.group}>
              <h3 className={styles.groupLabel}>{group.label}</h3>
              <div className={styles.tags}>
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
