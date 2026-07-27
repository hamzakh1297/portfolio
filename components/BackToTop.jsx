"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function updateOnScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setVisible(scrollTop > window.innerHeight * 0.6);
    }
    window.addEventListener("scroll", updateOnScroll, { passive: true });
    updateOnScroll();
    return () => window.removeEventListener("scroll", updateOnScroll);
  }, []);

  return (
    <button
      className={`back-to-top ${visible ? "visible" : ""}`}
      aria-label="Back to top"
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
