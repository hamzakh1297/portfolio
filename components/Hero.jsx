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
            I build things and I sell them — 6+ years running two businesses end to end.
            Co-founded Naxotop PVT LTD, delivering web platforms for international
            clients across France and India, and NayaBazar.pk, a delivery startup I
            grew to 30,000+ app downloads from scratch.
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
