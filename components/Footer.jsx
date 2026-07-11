import Reveal from "./Reveal";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.copy}>
          <p className="eyebrow">Next Stop</p>
          <h2 className={styles.title}>Let&apos;s get to work</h2>
          <p className={styles.text}>
            Open to sales, operations, and project management roles — reach out
            and let&apos;s talk about what you&apos;re building.
          </p>
        </Reveal>

        <Reveal delay={100} className={styles.contacts}>
          <a className="btn btn-primary" href="mailto:hamza@naxotop.com">
            hamza@naxotop.com
          </a>
          <a className="btn btn-ghost" href="tel:+923051958846">
            +92 305 195 8846
          </a>
          <a
            className="btn btn-ghost"
            href="https://www.linkedin.com/in/m-hamza-kh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/m-hamza-kh
          </a>
        </Reveal>

        <p className={styles.meta}>Mian Channu, Punjab, Pakistan · © {new Date().getFullYear()} Hamza Khalid</p>
      </div>
    </footer>
  );
}
