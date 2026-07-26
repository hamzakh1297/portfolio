import Reveal from "./Reveal";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={`container ${styles.inner}`}>
        <Reveal>
          <p className="eyebrow">Next Stop</p>
          <h2 className={styles.title}>Let&apos;s get to work</h2>
          <p className={styles.text}>
            Open to sales, operations, and project management roles — reach out
            and let&apos;s talk about what you&apos;re building.
          </p>
        </Reveal>

        <Reveal delay={100} className={styles.contacts}>
          <a className="btn btn-primary" href="mailto:hamza@naxotop.com">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
              <path d="m22 6-10 7L2 6" />
            </svg>
            hamza@naxotop.com
          </a>
          <a className="btn btn-ghost" href="tel:+923051958846">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +92 305 195 8846
          </a>
          <a
            className="btn btn-ghost"
            href="https://www.linkedin.com/in/m-hamza-kh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18V9.75H5.67V18h2.67zm-1.33-9.4c.93 0 1.5-.62 1.5-1.38-.02-.78-.57-1.37-1.48-1.37s-1.5.6-1.5 1.37c0 .76.57 1.38 1.48 1.38zM18.34 18v-4.7c0-2.52-1.35-3.69-3.14-3.69-1.45 0-2.1.8-2.46 1.36V9.75h-2.67c.03.7 0 8.25 0 8.25h2.67v-4.6c0-.25.02-.5.1-.68.2-.5.66-1.03 1.43-1.03 1 0 1.4.77 1.4 1.9V18h2.67z" />
            </svg>
            linkedin.com/in/m-hamza-kh
          </a>
        </Reveal>

        <p className={styles.meta}>Mian Channu, Punjab, Pakistan · © {new Date().getFullYear()} Hamza Khalid</p>
      </div>
    </footer>
  );
}
