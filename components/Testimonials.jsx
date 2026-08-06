import Reveal from "./Reveal";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote: "Testimonial from a client or colleague will go here — a short, impactful statement about working together.",
    name: "Client Name",
    role: "Role / Company",
  },
  {
    quote: "Another testimonial will go here — highlighting a different aspect of the work, delivery quality, or collaboration.",
    name: "Client Name",
    role: "Role / Company",
  },
  {
    quote: "A third testimonial — could be about project management, technical skill, or business sense.",
    name: "Client Name",
    role: "Role / Company",
  },
];

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Feedback</p>
          <h2 className="section-title">What people say</h2>
          <p className="section-sub">
            Words from clients, colleagues, and collaborators I&apos;ve worked with.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 100} className={styles.card}>
              <svg className={styles.quoteIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z"/>
              </svg>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.name.charAt(0)}</div>
                <div>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.role}>{t.role}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
