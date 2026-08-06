"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import styles from "./Contact.module.css";

// Get a free access key at https://web3forms.com (sign up with hamza@naxotop.com)
// then paste it below. This lets the form send real emails with no backend server.
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/m-hamza-kh/", icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18V9.75H5.67V18h2.67zm-1.33-9.4c.93 0 1.5-.62 1.5-1.38-.02-.78-.57-1.37-1.48-1.37s-1.5.6-1.5 1.37c0 .76.57 1.38 1.48 1.38zM18.34 18v-4.7c0-2.52-1.35-3.69-3.14-3.69-1.45 0-2.1.8-2.46 1.36V9.75h-2.67c.03.7 0 8.25 0 8.25h2.67v-4.6c0-.25.02-.5.1-.68.2-.5.66-1.03 1.43-1.03 1 0 1.4.77 1.4 1.9V18h2.67z" /></svg> },
  { label: "Instagram", href: "https://www.instagram.com/m_hamza_khalid_/", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg> },
  { label: "Facebook", href: "https://www.facebook.com/hamzakh06/", icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> },
  { label: "Email", href: "mailto:hamza@naxotop.com", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" /><path d="m22 6-10 7L2 6" /></svg> },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null); // { type: "success" | "error", text: string }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const showToast = (type, text) => {
    setToast({ type, text });
    setTimeout(() => setToast(null), 4500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio Contact: ${form.name}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();

      if (data.success) {
        showToast("success", "Message sent successfully! I'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      } else {
        showToast("error", "Couldn't send right now — please email me directly.");
      }
    } catch (err) {
      showToast("error", "Couldn't send right now — please email me directly.");
    } finally {
      setSending(false);
    }
  };

  const whatsappMsg = encodeURIComponent("Hi Hamza! I found your portfolio and would like to connect.");
  const whatsappUrl = `https://wa.me/923051958846?text=${whatsappMsg}`;

  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Get in Touch</p>
          <h2 className="section-title">Let&apos;s work together</h2>
          <p className="section-sub">
            Have a project in mind, need a developer, or just want to say hello?
            Drop me a message and I&apos;ll get back to you.
          </p>
        </Reveal>

        <div className={styles.grid}>
          <Reveal delay={80} className={styles.formWrap}>
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>Send a Message</h3>
              <form className={styles.formInner} onSubmit={handleSubmit}>
                <div className={styles.field}>
                  <label htmlFor="contact-name" className={styles.label}>Your Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className={styles.input}
                    placeholder="e.g. Ali Khan"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-email" className={styles.label}>Your Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className={styles.input}
                    placeholder="e.g. ali@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-message" className={styles.label}>Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className={`${styles.input} ${styles.textarea}`}
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formActions}>
                  <button type="submit" className="btn btn-primary" disabled={sending}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                  <a className={`btn btn-primary ${styles.whatsappBtn}`} href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Talk on WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </Reveal>

          <Reveal delay={160} className={styles.infoWrap}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Contact Info</h3>
              <div className={styles.infoItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" /><path d="m22 6-10 7L2 6" /></svg>
                <div>
                  <span className={styles.infoLabel}>Email</span>
                  <a href="mailto:hamza@naxotop.com">hamza@naxotop.com</a>
                </div>
              </div>
              <div className={styles.infoItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                <div>
                  <span className={styles.infoLabel}>Phone</span>
                  <a href="tel:+923051958846">+92 305 195 8846</a>
                </div>
              </div>
              <div className={styles.infoItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <div>
                  <span className={styles.infoLabel}>Location</span>
                  <span>Mian Channu, Punjab, Pakistan</span>
                </div>
              </div>
            </div>

            <div className={styles.socialsCard}>
              <h3 className={styles.infoTitle}>Find Me Online</h3>
              <div className={styles.socialLinks}>
                {socials.map((s) => (
                  <a key={s.label} className={styles.socialLink} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    {s.icon}
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {toast && (
        <div className={`${styles.toast} ${styles[toast.type]}`} role="status">
          {toast.type === "success" ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
          )}
          <span>{toast.text}</span>
        </div>
      )}
    </section>
  );
}
