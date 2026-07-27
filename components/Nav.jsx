"use client";

import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

const links = [
  { href: "#about", label: "Profile" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function updateOnScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
      setScrolled(scrollTop > 30);
    }
    window.addEventListener("scroll", updateOnScroll, { passive: true });
    updateOnScroll();
    return () => window.removeEventListener("scroll", updateOnScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      <nav className={`${styles.siteNav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.navInner}>
          <a className={styles.navLogo} href="#top">
            H<span>K</span>.
          </a>

          <ul className={`${styles.navLinks} ${open ? styles.open : ""}`}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.navActions}>
            <a className={styles.navResumeBtn} href="/Hamza_Khalid_Resume.pdf" download>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="M7 10l5 5 5-5" />
                <path d="M12 15V3" />
              </svg>
              Resume
            </a>
            <button
              className={`${styles.navToggle} ${open ? styles.active : ""}`}
              aria-label="Toggle navigation menu"
              type="button"
              onClick={() => setOpen((v) => !v)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
