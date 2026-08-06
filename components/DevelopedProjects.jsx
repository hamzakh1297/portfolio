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
    subtitle: "Offline Restaurant Point-of-Sale (Electron.js)",
    stack: ["Electron.js", "Node.js", "better-sqlite3", "Thermal Printing", "Offline-First"],
    overview:
      "A fully offline-capable point-of-sale app for Pakistani restaurants — internet is only needed for license activation and periodic cloud syncing, never for daily operations. I designed and built the entire product: the SQLite data layer, the Electron shell, every screen in the UI, and the sync logic that talks to the licensing website.",
    barType: "app",
    cover: "https://i.ibb.co/k6DLKt9Y/billing.png",
    pages: [
      {
        name: "Billing",
        tag: "MorEazy POS — Billing",
        img: "https://i.ibb.co/k6DLKt9Y/billing.png",
        desc: "Search products, build a customer's order, calculate totals, and print a thermal receipt — the core screen cashiers use for every single order.",
      },
      {
        name: "Table Management",
        tag: "MorEazy POS — Tables",
        img: "https://i.ibb.co/LXBTwSXG/Tables.png",
        desc: "A color-coded floor view showing which tables are free, occupied, or waiting for a bill, organized by apartment/section — staff know table status at a glance without walking the floor.",
      },
      {
        name: "Product Management",
        tag: "MorEazy POS — Products",
        img: "https://i.ibb.co/9mhLc6ps/products.png",
        desc: "Add, edit, and organize the full menu — categories, images, and stock tracking, with support for product variants (e.g. Half/Full, Small/Large) each carrying its own price.",
      },
      {
        name: "Add Product (Variants)",
        tag: "MorEazy POS — Add Product",
        img: "https://i.ibb.co/kgGnC8Jb/Add-product.png",
        desc: "The product creation flow, including variant management — every size/option combination gets its own price and stock count, updated automatically as orders come in.",
      },
      {
        name: "Sales Reports",
        tag: "MorEazy POS — Reports",
        img: "https://i.ibb.co/Rk9KqW03/Reports.png",
        desc: "Daily, weekly, and monthly sales history with date-range filtering, order status, and the ability to reopen any past receipt — gives the owner a clear picture of business performance.",
      },
      {
        name: "Receipt Preview",
        tag: "MorEazy POS — Receipt",
        img: "https://i.ibb.co/Y4r3yzj8/Receipt.png",
        desc: "A live preview of exactly what prints on the thermal receipt for a completed order — used to confirm formatting before handing it to the customer.",
      },
      {
        name: "Receipt & Store Settings",
        tag: "MorEazy POS — Store Settings",
        img: "https://i.ibb.co/DPsvvyQc/Store-settings.png",
        desc: "Configure the shop's name, address, and receipt footer text — everything that appears on a printed receipt, editable without touching any code.",
      },
      {
        name: "Printer Settings",
        tag: "MorEazy POS — Printer",
        img: "https://i.ibb.co/PGL37DTS/Printer-Settings.png",
        desc: "Choose the receipt paper width (58mm/80mm) and select which physical printer to use — accounts for the different hardware setups restaurants already have.",
      },
      {
        name: "Staff Login",
        tag: "MorEazy POS — Staff Login",
        img: "https://i.ibb.co/tMp0y0KZ/Staff-Login.png",
        desc: "A PIN-based, multi-user login screen — each team member gets their own 4-digit code for fast shift-time access, with every order tagged to the staff member who created it for full accountability.",
      },
      {
        name: "Cloud Backup",
        tag: "MorEazy POS — Backup",
        img: "https://i.ibb.co/MktsbSLd/Cloud-Backup.png",
        desc: "One-click sync that uploads a secure snapshot of the local database to the cloud via the website's API — only the latest 3 backups are kept, protecting against data loss or a damaged machine.",
      },
    ],
  },
  {
    id: "licensing-website",
    kind: "Web App",
    title: "MorEazy — Licensing & Management",
    subtitle: "Customer Portal & Admin Backend (PHP / MySQL)",
    stack: ["PHP", "MySQL", "Bootstrap 5", "jQuery", "REST API"],
    overview:
      "The customer-facing counterpart to the POS app — where restaurant owners discover MorEazy POS, purchase a license, manage staff and subscriptions, and download the installer. I built the full PHP/MySQL backend, the customer dashboard, and the REST API layer that issues license keys, verifies activations, and receives cloud backups from the desktop app.",
    barType: "browser",
    cover: "https://i.ibb.co/YT351XDK/screencapture-localhost-my-moreazy-v1-home-2026-08-06-15-34-18.png",
    pages: [
      {
        name: "Home Page",
        tag: "moreazy.com",
        img: "https://i.ibb.co/YT351XDK/screencapture-localhost-my-moreazy-v1-home-2026-08-06-15-34-18.png",
        desc: "The public landing page — product overview, feature highlights, pricing, and a contact form for new leads.",
      },
      {
        name: "POS Demo Page",
        tag: "moreazy.com/pos-demo",
        img: "https://i.ibb.co/zWd53Y4h/pos-demo.png",
        desc: "A dedicated page for prospective customers to see the product before buying — screenshot gallery and feature walkthrough of the desktop app.",
      },
      {
        name: "Customer Dashboard",
        tag: "my.moreazy.com/dashboard",
        img: "https://i.ibb.co/0pyT2fzQ/Dashboard.png",
        desc: "The landing page after login — an at-a-glance summary of the customer's license status, plan, and account.",
      },
      {
        name: "My License",
        tag: "my.moreazy.com/license",
        img: "https://i.ibb.co/sprZ8yzF/License.png",
        desc: "Shows the customer's license key (masked, with a one-click copy button), the active device it's locked to, and a full subscription timeline — activation date, expiry, and grace period.",
      },
      {
        name: "Payments & Invoices",
        tag: "my.moreazy.com/payments",
        img: "https://i.ibb.co/k66YXgLm/payments.png",
        desc: "Full payment history with status filtering (Pending/Completed) and downloadable PDF invoices for every transaction.",
      },
      {
        name: "Account Settings",
        tag: "my.moreazy.com/settings",
        img: "https://i.ibb.co/39v2gH4D/settings.png",
        desc: "Manage personal profile info, password, profile photo (auto-cropped on upload), and restaurant details used on POS receipts.",
      },
      {
        name: "Staff Management",
        tag: "my.moreazy.com/staff",
        img: "https://i.ibb.co/S4CmT4yz/Staff-Management.png",
        desc: "Add, edit, and deactivate POS staff logins directly from the dashboard — set each staff member's 4-digit PIN and page-level permissions, which the POS app pulls in with a single \"Get Updates\" sync.",
      },
      {
        name: "Cloud Backups",
        tag: "my.moreazy.com/backups",
        img: "https://i.ibb.co/GmxsDJD/Cloud-Backup.png",
        desc: "A simple history of the customer's automatic POS database backups — filename, size, and timestamp for each of the latest 3 uploads.",
      },
      {
        name: "Downloads",
        tag: "my.moreazy.com/downloads",
        img: "https://i.ibb.co/vCKnV0hy/downloads.png",
        desc: "Where customers grab the latest installer for the POS desktop app.",
      },
      {
        name: "Support",
        tag: "my.moreazy.com/support",
        img: "https://i.ibb.co/27pq3FBm/support.png",
        desc: "A simple ticket form for customers to reach the support team directly from their dashboard — feeds into the admin's Customer Inquiries queue.",
      },
    ],
  },
];

export default function DevelopedProjects() {
  const [active, setActive] = useState(null); // { proj, page }

  const activeProject = active ? developedProjects[active.proj] : null;
  const activePage = activeProject ? activeProject.pages[active.page] : null;

  const closeLightbox = () => setActive(null);
  const showPrev = () =>
    setActive((a) =>
      a === null
        ? null
        : { proj: a.proj, page: (a.page - 1 + developedProjects[a.proj].pages.length) % developedProjects[a.proj].pages.length }
    );
  const showNext = () =>
    setActive((a) =>
      a === null ? null : { proj: a.proj, page: (a.page + 1) % developedProjects[a.proj].pages.length }
    );

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

        {developedProjects.map((project, projIndex) => (
          <Reveal key={project.id} delay={100} className={`${styles.block} ${projIndex % 2 === 1 ? styles.reverse : ""}`}>
            <div className={styles.identity}>
              <span className={styles.devBadge}>Developed Solo</span>
              <p className={styles.kind}>{project.kind}</p>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.subtitle}>{project.subtitle}</p>
              <p className={styles.overview}>{project.overview}</p>
              <div className={styles.stack}>
                {project.stack.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.coverWrap}>
              <div className={`${styles.mock} ${project.barType === "app" ? styles.appMock : ""}`}>
                {project.barType === "browser" ? (
                  <div className="browser-bar">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                    <span className="browser-url">moreazy.com</span>
                  </div>
                ) : (
                  <div className={styles.appBar}>
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                    <span className={styles.appTitle}>MorEazy POS</span>
                  </div>
                )}
                <div className={styles.coverThumb}>
                  <Image
                    src={project.cover}
                    alt={`${project.title} main screen`}
                    fill
                    sizes="(max-width: 860px) 100vw, 480px"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </Reveal>
        ))}

        {developedProjects.map((project, projIndex) => (
          <Reveal key={`${project.id}-screens`} delay={80} className={styles.screensSection}>
            <p className={styles.screensLabel}>
              <span>{project.title}</span> — {project.pages.length} screens
            </p>
            <div className={styles.screensGrid}>
              {project.pages.map((page, pageIndex) => (
                <button
                  type="button"
                  className={styles.screenCard}
                  key={page.name}
                  onClick={() => setActive({ proj: projIndex, page: pageIndex })}
                >
                  <div className={styles.screenThumb}>
                    <Image
                      src={page.img}
                      alt={`${page.name} screenshot`}
                      fill
                      sizes="220px"
                      unoptimized
                    />
                    <span className={styles.screenZoom}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="7" />
                        <path d="m21 21-4.3-4.3" />
                        <path d="M11 8v6M8 11h6" />
                      </svg>
                    </span>
                  </div>
                  <span className={styles.screenName}>{page.name}</span>
                </button>
              ))}
            </div>
          </Reveal>
        ))}

        <Reveal delay={120} className={styles.connector}>
          <div className={styles.connectorNode}>Desktop App</div>
          <div className={styles.connectorLine}>
            <span>REST API</span>
          </div>
          <div className={styles.connectorNode}>Licensing Website</div>
          <p className={styles.connectorText}>
            The two are tied together through a custom REST API
            (<code>/api/activate</code>, <code>/api/verify</code>,{" "}
            <code>/api/staff</code>, <code>/api/backup</code>), secured with a
            shared app secret, per-IP rate limiting, and a strict
            one-license-per-device rule. Every activation, verification, staff
            sync, and backup attempt is logged server-side for a full audit
            trail of device activity.
          </p>
        </Reveal>
      </div>

      <div className={`lightbox ${active ? "open" : ""}`} aria-hidden={!active}>
        <div className="lightbox-backdrop" onClick={closeLightbox}></div>
        <div className="lightbox-panel" role="dialog" aria-modal="true" aria-label="Screen preview">
          <button className="lightbox-close" aria-label="Close preview" type="button" onClick={closeLightbox}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          <div className="lightbox-frame">
            <div className="browser-bar">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="browser-url">{activePage?.tag}</span>
            </div>

            <button className="lightbox-arrow lightbox-prev" aria-label="Previous screen" type="button" onClick={showPrev}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="lightbox-arrow lightbox-next" aria-label="Next screen" type="button" onClick={showNext}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <div className="lightbox-image-wrap">
              {activePage && (
                <Image src={activePage.img} alt={`${activePage.name} screenshot`} fill unoptimized />
              )}
            </div>
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
