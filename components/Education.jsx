import Reveal from "./Reveal";
import styles from "./Education.module.css";

const education = [
  { title: "Web Development", sub: "Online Resources", year: "2020" },
  { title: "Intermediate (Incomplete)", sub: "Divisional Public School", year: "2018" },
  { title: "AutoCAD — Technical Drafting", sub: "TEVTA, Cami", year: "2017" },
];

const languages = [
  { name: "Urdu", level: "Native" },
  { name: "English", level: "Professional" },
];

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className={styles.split}>
          <Reveal>
            <p className="eyebrow">Education</p>
            <h2 className="section-title">Manifest of learning</h2>
            <ul className={styles.list}>
              {education.map((item) => (
                <li className={styles.item} key={item.title}>
                  <div>
                    <span className={styles.itemTitle}>{item.title}</span>
                    <span className={styles.itemSub}>{item.sub}</span>
                  </div>
                  <span className={styles.itemYear}>{item.year}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow">Languages</p>
            <h2 className="section-title">Spoken</h2>
            <div className={styles.langs}>
              {languages.map((lang) => (
                <div className={styles.lang} key={lang.name}>
                  <span className={styles.langName}>{lang.name}</span>
                  <span className={styles.langLevel}>{lang.level}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
