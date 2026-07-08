import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={`eyebrow ${styles.eyebrow}`}>Dispatch Manifest &middot; Mian Channu, Punjab, PK</p>

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

          <div className={styles.actions}>
            <a className="btn btn-primary" href="mailto:hamza@naxotop.com">
              Email Me
            </a>
            <a
              className="btn btn-ghost"
              href="https://www.linkedin.com/in/m-hamza-kh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a className="btn btn-ghost" href="tel:+923051958846">
              +92 305 195 8846
            </a>
          </div>

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
            <span>Verified</span>
            <span>Operator</span>
          </span>
        </div>
      </div>

      <div className={styles.perforation} aria-hidden="true" />
    </header>
  );
}
