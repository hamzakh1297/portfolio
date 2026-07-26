"use client";

import { useRef } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "NayaBazar",
    img: "https://i.ibb.co/wFkfTQrb/image-1.png",
    desc: "Local delivery & e-commerce platform — led the customer app, seller POS, and admin systems from zero to 30,000+ downloads.",
  },
  {
    title: "NaxoTop",
    img: "https://i.ibb.co/7dQHwQm8/image-2-1.png",
    desc: "Web development company — led delivery of client projects for international and local businesses across multiple industries.",
  },
  {
    title: "DayCare Web App",
    img: "https://i.ibb.co/Jjt6TDDV/image-5.png",
    desc: "Web platform built for a France-based daycare network — led requirements, development coordination, and delivery of the web app, contract signing system, and employee tracking tool.",
  },
  {
    title: "AI Page Builder",
    img: "https://i.ibb.co/PvtwG24X/image-3-1.png",
    desc: "Web-based page builder that uses AI to help users generate and customize website pages quickly.",
  },
  {
    title: "Web Video Editor",
    img: "https://naxotop.com/wp-content/uploads/2023/03/1.webp",
    desc: "Browser-based video editing tool built from scratch for an India-based company, from concept through delivery.",
  },
  {
    title: "Online Image Editor",
    img: "https://naxotop.com/wp-content/uploads/2022/09/Final-min.jpg",
    desc: "Web-based image editing tool delivered alongside the video editor as part of the same company's product suite.",
  },
  {
    title: "Online Resume Builder",
    img: "https://naxotop.com/wp-content/uploads/2022/10/thumbnail-min-1.webp",
    desc: "Web app that lets users build, customize, and export professional resumes directly in the browser.",
  },
  {
    title: "Blogger (Blog Builder)",
    img: "https://naxotop.com/wp-content/uploads/2022/09/a87ff679a2f3e71d9181a67b7542122c.png",
    desc: "Web-based blogging platform letting users create, format, and publish blog posts with a clean, simple editor.",
  },
  {
    title: "Cloth Designing Web App",
    img: "https://naxotop.com/wp-content/uploads/2023/10/Cloth-Designing-Web-Application.jpg",
    desc: "Web application for designing custom clothing — letting users customize patterns, colors, and styles online.",
  },
  {
    title: "Expense Tracker",
    img: "https://i.ibb.co/vCPw6tcS/image-4.png",
    desc: "Web app for tracking personal or business expenses — categorizing spending and visualizing budgets in real time.",
  },
];

export default function Projects() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const card = slider.querySelector(`.${styles.card}`);
    const gap = 22;
    const amount = card ? card.getBoundingClientRect().width + gap : 300;
    slider.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal className={`section-head ${styles.head}`}>
          <div>
            <p className="eyebrow">Project Manifest</p>
            <h2 className="section-title">Projects I&apos;ve led</h2>
            <p className="section-sub">
              Web platforms and tools I managed end-to-end as the lead — from
              requirements and design through to launch.
            </p>
          </div>
          <div className={styles.nav}>
            <button
              className={styles.navBtn}
              type="button"
              aria-label="Scroll to previous projects"
              onClick={() => scroll(-1)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              className={styles.navBtn}
              type="button"
              aria-label="Scroll to next projects"
              onClick={() => scroll(1)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </Reveal>

        <Reveal delay={100} className={styles.sliderWrap}>
          <div className={styles.slider} ref={sliderRef}>
            {projects.map((project) => (
              <article className={styles.card} key={project.title}>
                <div className={styles.thumb}>
                  <span className={styles.badge}>Led</span>
                  <Image
                    src={project.img}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="280px"
                    unoptimized
                  />
                </div>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.desc}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
