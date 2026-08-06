import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <a className={styles.logo} href="#top">
          H<span>K</span>.
        </a>
        <p className={styles.tagline}>
          Full Stack Web Developer &amp; Sales Professional
        </p>
        <p className={styles.meta}>
          &copy; {new Date().getFullYear()} Hamza Khalid
        </p>
      </div>
    </footer>
  );
}
