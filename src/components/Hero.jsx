import { profile } from "../data/portfolioData";
import profileImage from "../../profile.jpg";

export default function Hero({ onNavClick }) {
  return (
    <section id="home" className="hero">
      {/* Animated background elements */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid-pattern" />
      </div>

      <div className="hero__content container">
        <div className="hero__text">
          <div className="hero__badge reveal">
            <span className="hero__badge-dot" />
            Disponible pour de nouveaux projets
          </div>

          <h1 className="hero__title reveal">
            Salut, je suis{" "}
            <span className="hero__title-highlight">{profile.name}</span>
          </h1>

          <h2 className="hero__subtitle reveal">{profile.title}</h2>

          <p className="hero__description reveal">{profile.summary}</p>

          <div className="hero__actions reveal">
            <a
              href="#projects"
              className="btn btn--primary"
              onClick={(e) => onNavClick(e, "projects")}
            >
              <span>Voir mes projets</span>
              <i className="fas fa-arrow-right" />
            </a>
            <a
              href="#contact"
              className="btn btn--outline"
              onClick={(e) => onNavClick(e, "contact")}
            >
              <i className="fas fa-envelope" />
              <span>Me contacter</span>
            </a>
          </div>

          <div className="hero__socials reveal">
            <a href={profile.github} target="_blank" rel="noreferrer" title="GitHub">
              <i className="fab fa-github" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>

        <div className="hero__visual reveal">
          <div className="hero__avatar-wrapper">
            <div className="hero__avatar-ring" />
            <div className="hero__avatar">
              <img src={profileImage} alt={profile.name} />
            </div>
          </div>
          <div className="hero__floating-card hero__floating-card--1">
            <i className="fab fa-react" />
            <span>React</span>
          </div>
          <div className="hero__floating-card hero__floating-card--2">
            <i className="fab fa-laravel" />
            <span>Laravel</span>
          </div>
          <div className="hero__floating-card hero__floating-card--3">
            <i className="fab fa-python" />
            <span>Python</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
