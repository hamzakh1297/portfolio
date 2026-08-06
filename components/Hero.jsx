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

          <p className={styles.role}>Full Stack Web Developer &amp; Sales Professional</p>

          <p className={styles.intro}>
            I build things and I sell them — 6+ years running two businesses end
            to end, and hands-on building the software behind them. Co-founded
            Naxotop PVT LTD, delivering web platforms for local &amp;
            international clients, and NayaBazar.pk, a delivery startup I grew
            to 30,000+ app downloads. More recently, I designed and built{" "}
            <strong>MorEazy POS</strong> — a complete offline restaurant
            point-of-sale system — end to end, solo.
          </p>

          <div className={styles.actions}>
            <a className="btn btn-primary" href="#contact">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
                <path d="m22 6-10 7L2 6" />
              </svg>
              Get in Touch
            </a>
            <a className="btn btn-ghost" href="#developed">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              View My Work
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
            <span>Full-Stack</span>
            <span>&amp; Sales</span>
          </span>
        </div>
      </div>

      <div className={styles.perforation} aria-hidden="true" />
    </header>
  );
}
