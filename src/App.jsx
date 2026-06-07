import { useEffect, useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Extras from "./components/Extras";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // ─── IntersectionObserver: scroll-spy ─────────────────────────────────
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // ─── IntersectionObserver: reveal animations ──────────────────────────
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add("visible");
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  // ─── Smooth scroll handler ────────────────────────────────────────────
  const handleNavClick = useCallback((event, targetId) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (!target) return;
    const offset = 90;
    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />
      <main>
        <Hero onNavClick={handleNavClick} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Extras />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
