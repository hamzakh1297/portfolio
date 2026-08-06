"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import styles from "./DevelopedProjects.module.css";

const developedProjects = [
  {
    id: "pos-app",
    kind: "Desktop App",
    title: "MorEazy POS",
    subtitle: "Offline Restaurant Point-of-Sale · Electron.js + Node.js",
    stack: ["Electron.js", "Node.js", "better-sqlite3", "Thermal Printing", "Offline-First"],
    overview:
      "A fully offline-capable point-of-sale app for Pakistani restaurants. I designed and built the entire product solo: the SQLite data layer, Electron shell, every screen, and the sync logic that talks to the licensing website. Internet is only needed for license activation and periodic cloud syncing — never for daily operations.",
    cover: "https://i.ibb.co/k6DLKt9Y/billing.png",
    pages: [
      { name: "Billing", tag: "MorEazy POS — Billing", img: "https://i.ibb.co/k6DLKt9Y/billing.png", desc: "Search products, build a customer's order, calculate totals, and print a thermal receipt — the core screen cashiers use for every single order." },
      { name: "Table Management", tag: "MorEazy POS — Tables", img: "https://i.ibb.co/LXBTwSXG/Tables.png", desc: "A color-coded floor view showing which tables are free, occupied, or waiting for a bill, organized by apartment/section." },
      { name: "Product Management", tag: "MorEazy POS — Products", img: "https://i.ibb.co/9mhLc6ps/products.png", desc: "Add, edit, and organize the full menu — categories, images, and stock tracking, with support for product variants." },
      { name: "Add Product (Variants)", tag: "MorEazy POS — Add Product", img: "https://i.ibb.co/kgGnC8Jb/Add-product.png", desc: "The product creation flow — every size/option combination gets its own price and stock count, updated automatically as orders come in." },
      { name: "Sales Reports", tag: "MorEazy POS — Reports", img: "https://i.ibb.co/Rk9KqW03/Reports.png", desc: "Daily, weekly, and monthly sales history with date-range filtering, order status, and the ability to reopen any past receipt." },
      { name: "Receipt Preview", tag: "MorEazy POS — Receipt", img: "https://i.ibb.co/Y4r3yzj8/Receipt.png", desc: "A live preview of exactly what prints on the thermal receipt for a completed order." },
      { name: "Store Settings", tag: "MorEazy POS — Settings", img: "https://i.ibb.co/DPsvvyQc/Store-settings.png", desc: "Configure the shop's name, address, and receipt footer text — everything on the printed receipt, editable without touching code." },
      { name: "Printer Settings", tag: "MorEazy POS — Printer", img: "https://i.ibb.co/PGL37DTS/Printer-Settings.png", desc: "Choose the receipt paper width (58mm/80mm) and select which physical printer to use." },
      { name: "Staff Login", tag: "MorEazy POS — Staff Login", img: "https://i.ibb.co/tMp0y0KZ/Staff-Login.png", desc: "A PIN-based, multi-user login screen — each team member gets their own 4-digit code with full order accountability." },
      { name: "Cloud Backup", tag: "MorEazy POS — Backup", img: "https://i.ibb.co/MktsbSLd/Cloud-Backup.png", desc: "One-click sync that uploads a secure snapshot of the local database to the cloud — only the latest 3 backups are kept." },
    ],
  },
  {
    id: "licensing-website",
    kind: "Web App",
    title: "MorEazy Website",
    subtitle: "Licensing & Management Portal · PHP / MySQL",
    stack: ["PHP", "MySQL", "Bootstrap 5", "jQuery", "REST API"],
    overview:
      "The customer-facing counterpart — where restaurant owners discover MorEazy POS, purchase a license, manage staff and subscriptions, and download the installer. I built the full PHP/MySQL backend, customer dashboard, and the REST API that issues license keys, verifies activations, and receives cloud backups.",
    cover: "https://i.ibb.co/YT351XDK/screencapture-localhost-my-moreazy-v1-home-2026-08-06-15-34-18.png",
    pages: [
      { name: "Home Page", tag: "moreazy.com", img: "https://i.ibb.co/YT351XDK/screencapture-localhost-my-moreazy-v1-home-2026-08-06-15-34-18.png", desc: "The public landing page — product overview, feature highlights, pricing, and a contact form for new leads." },
      { name: "POS Demo", tag: "moreazy.com/pos-demo", img: "https://i.ibb.co/zWd53Y4h/pos-demo.png", desc: "A dedicated page for prospective customers to see the product before buying — screenshot gallery and feature walkthrough." },
      { name: "Dashboard", tag: "my.moreazy.com/dashboard", img: "https://i.ibb.co/0pyT2fzQ/Dashboard.png", desc: "The landing page after login — at-a-glance summary of license status, plan, and account." },
      { name: "My License", tag: "my.moreazy.com/license", img: "https://i.ibb.co/sprZ8yzF/License.png", desc: "License key (masked, with copy button), active device, and full subscription timeline — activation, expiry, and grace period." },
      { name: "Payments", tag: "my.moreazy.com/payments", img: "https://i.ibb.co/k66YXgLm/payments.png", desc: "Full payment history with status filtering and downloadable PDF invoices for every transaction." },
      { name: "Settings", tag: "my.moreazy.com/settings", img: "https://i.ibb.co/39v2gH4D/settings.png", desc: "Profile info, password, photo (auto-cropped), and restaurant details used on POS receipts." },
      { name: "Staff Management", tag: "my.moreazy.com/staff", img: "https://i.ibb.co/S4CmT4yz/Staff-Management.png", desc: "Add, edit, and deactivate POS staff logins — set PINs and page-level permissions, synced to the POS app." },
      { name: "Cloud Backups", tag: "my.moreazy.com/backups", img: "https://i.ibb.co/GmxsDJD/Cloud-Backup.png", desc: "History of automatic POS database backups — filename, size, and timestamp for each of the latest 3." },
      { name: "Downloads", tag: "my.moreazy.com/downloads", img: "https://i.ibb.co/vCKnV0hy/downloads.png", desc: "Where customers grab the latest POS desktop app installer." },
      { name: "Support", tag: "my.moreazy.com/support", img: "https://i.ibb.co/27pq3FBm/support.png", desc: "Ticket form for customers to reach support directly — feeds into the admin queue." },
    ],
  },
];

export default function DevelopedProjects() {
  const [active, setActive] = useState(null);

  const activeProject = active ? developedProjects[active.proj] : null;
  const activePage = activeProject ? activeProject.pages[active.page] : null;
  const totalPages = activeProject ? activeProject.pages.length : 0;

  const closeLightbox = () => setActive(null);
  const showPrev = () =>
    setActive((a) => a === null ? null : { proj: a.proj, page: (a.page - 1 + totalPages) % totalPages });
  const showNext = () =>
    setActive((a) => a === null ? null : { proj: a.proj, page: (a.page + 1) % totalPages });

  useEffect(() => {
    if (!active) return;
    document.body.style.overflow = "hidden";
    function onKeyDown(e) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <section className="section" id="developed">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Independent Build</p>
          <h2 className="section-title">Projects I&apos;ve developed</h2>
          <p className="section-sub">
            Full-stack products I designed, coded, and shipped end-to-end
            myself — architecture, backend, and every pixel of the UI.
          </p>
        </Reveal>

        <div className={styles.projectsRow}>
          {developedProjects.map((project, projIndex) => (
            <Reveal key={project.id} delay={projIndex * 120} className={styles.projectCard}>
              <div className={styles.cardHead}>
                <span className={styles.devBadge}>Developed Solo</span>
                <p className={styles.kind}>{project.kind}</p>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.subtitle}>{project.subtitle}</p>
              </div>

              <button
                type="button"
                className={styles.coverBtn}
                onClick={() => setActive({ proj: projIndex, page: 0 })}
                aria-label={`View ${project.title} screenshots`}
              >
                <div className={styles.mock}>
                  <div className="browser-bar">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                    <span className="browser-url">{project.id === "pos-app" ? "MorEazy POS" : "moreazy.com"}</span>
                  </div>
                  <div className={styles.coverThumb}>
                    <Image
                      src={project.cover}
                      alt={`${project.title} main screen`}
                      fill
                      sizes="(max-width: 860px) 100vw, 460px"
                      unoptimized
                      style={{ objectFit: project.id === "licensing-website" ? "fill" : "contain" }}
                    />
                    <div className={styles.coverOverlay}>
                      <span className={styles.coverCta}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /><path d="M11 8v6M8 11h6" /></svg>
                        View {project.pages.length} Screens
                      </span>
                    </div>
                  </div>
                </div>
              </button>

              <p className={styles.overview}>{project.overview}</p>

              <div className={styles.stack}>
                {project.stack.map((item) => (
                  <span className="tag" key={item}>{item}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Curved Connector */}
        <Reveal delay={100} className={styles.connector}>
          <div className={styles.connectorVisual}>
            <div className={styles.connectorNode}>
              <span className={styles.nodeIcon}>🖥️</span>
              <span>Desktop App</span>
            </div>
            <div className={styles.connectorCurve}>
              <svg viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.curveSvg}>
                <path d="M0 40 C75 40, 75 10, 150 10 S225 40, 300 40" stroke="var(--amber)" strokeWidth="2" strokeDasharray="8 6" className={styles.curvePath} />
              </svg>
              <span className={styles.curveLabel}>REST API</span>
            </div>
            <div className={styles.connectorNode}>
              <span className={styles.nodeIcon}>🌐</span>
              <span>Licensing Website</span>
            </div>
          </div>
          <p className={styles.connectorText}>
            Connected through a custom REST API
            (<code>/api/activate</code>, <code>/api/verify</code>,{" "}
            <code>/api/staff</code>, <code>/api/backup</code>) — secured with a
            shared app secret, per-IP rate limiting, and strict
            one-license-per-device enforcement. Every activation, verification,
            staff sync, and backup is logged server-side for a full audit trail.
          </p>
        </Reveal>
      </div>

      {/* Lightbox */}
      <div className={`lightbox ${active ? "open" : ""}`} aria-hidden={!active}>
        <div className="lightbox-backdrop" onClick={closeLightbox}></div>
        <div className="lightbox-panel" role="dialog" aria-modal="true" aria-label="Screen preview">
          <button className="lightbox-close" aria-label="Close preview" type="button" onClick={closeLightbox}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </button>

          <div className="lightbox-frame">
            <div className="browser-bar">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="browser-url">{activePage?.tag}</span>
            </div>

            <button className="lightbox-arrow lightbox-prev" aria-label="Previous screen" type="button" onClick={showPrev}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button className="lightbox-arrow lightbox-next" aria-label="Next screen" type="button" onClick={showNext}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>

            <div className="lightbox-image-wrap">
              {activePage && (
                <Image src={activePage.img} alt={`${activePage.name} screenshot`} fill unoptimized />
              )}
            </div>
            {active && (
              <div className="lightbox-counter">{active.page + 1} / {totalPages}</div>
            )}
          </div>

          <div className="lightbox-info">
            <p className={styles.lightboxEyebrow}>{activeProject?.title}</p>
            <h3>{activePage?.name}</h3>
            <p>{activePage?.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
