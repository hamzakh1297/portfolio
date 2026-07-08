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
            Available for immediate joining — full-time, field or office, open to
            relocation.
          </p>
        </Reveal>

        <p className={styles.meta}>Mian Channu, Punjab, Pakistan · © {new Date().getFullYear()} Hamza Khalid</p>
      </div>
    </footer>
  );
}
