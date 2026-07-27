import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <header className={styles.hero} id="top">
      <div className={`container ${styles.inner}`}>
        <div>
          <h1 className={styles.name}>
            Hamza <span>Khalid</span>
          </h1>

          <p className={styles.role}>Sales &amp; Operations Professional</p>

          <p className={styles.intro}>
            I build things and I sell them — 6+ years running two businesses end to end.
            Co-founded Naxotop PVT LTD, delivering web platforms for local &amp;
            international clients across the world, and NayaBazar.pk, a delivery
            startup I grew to 30,000+ app downloads from scratch.
          </p>

          <div className={styles.actions}>
            <a className="btn btn-primary" href="/Hamza_Khalid_Resume.pdf" download>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="M7 10l5 5 5-5" />
                <path d="M12 15V3" />
              </svg>
              Download Resume
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
            <span>Sales</span>
            <span>Expert</span>
          </span>
        </div>
      </div>

      <div className={styles.perforation} aria-hidden="true" />
    </header>
  );
}
