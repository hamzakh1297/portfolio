import Nav from "@/components/Nav";
import BackToTop from "@/components/BackToTop";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <BackToTop />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Footer />
      </main>
    </>
  );
}
