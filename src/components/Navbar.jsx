import { useState, useEffect } from "react";
import { navItems, profile } from "../data/portfolioData";

export default function Navbar({ activeSection, onNavClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a
          href="#home"
          className="navbar__logo"
          onClick={(e) => onNavClick(e, "home")}
        >
          <span className="navbar__logo-bracket">&lt;</span>
          A.Sow
          <span className="navbar__logo-bracket"> /&gt;</span>
        </a>

        <nav className="navbar__links navbar__links--desktop">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`navbar__link ${activeSection === item.id ? "navbar__link--active" : ""}`}
              onClick={(e) => onNavClick(e, item.id)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__link navbar__link--cv"
          >
            <i className="fas fa-file-alt" /> CV
          </a>
        </nav>

        <button
          className={`navbar__burger ${mobileOpen ? "navbar__burger--open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${mobileOpen ? "navbar__mobile--open" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`navbar__mobile-link ${activeSection === item.id ? "navbar__mobile-link--active" : ""}`}
            onClick={(e) => {
              onNavClick(e, item.id);
              setMobileOpen(false);
            }}
          >
            <i className={item.icon} />
            {item.label}
          </a>
        ))}
        <a
          href={profile.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__mobile-link"
        >
          <i className="fas fa-file-alt" /> CV
        </a>
      </div>
    </header>
  );
}
