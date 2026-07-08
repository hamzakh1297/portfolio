import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <h1 className={styles.name}>
            Hamza <span>Khalid</span>
          </h1>

          <p className={styles.role}>Sales &amp; Operations Professional</p>

          <p className={styles.intro}>
            I build things and I sell them — hands-on operator with two ventures behind me:
            a web development company and a local delivery startup that put 100+ shops
            and 30,000+ app downloads on the map. Fast executor, tech-savvy, and calm
            under pressure.
          </p>

          <ul className={styles.badges}>
            <li>Immediate joining</li>
            <li>Full-time</li>
            <li>Field / Office</li>
            <li>Open to relocation</li>
          </ul>
        </div>

        <div className={styles.photoWrap}>
          <div className={styles.photoFrame}>
            <Image
              src="https://i.ibb.co/ksF76qTm/Chat-GPT-Image-Jun-21-2026-09-02-53-PM-1-1.webp"
              alt="Portrait of Hamza Khalid"
              fill
              priority
              sizes="(max-width: 720px) 220px, 340px"
              className={styles.photo}
            />
          </div>
          <span className={styles.stamp}>
            <span>Available</span>
            <span>for Hire</span>
          </span>
        </div>
      </div>

      <div className={styles.perforation} aria-hidden="true" />
    </header>
  );
}
