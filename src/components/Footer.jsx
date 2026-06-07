import { profile } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <span className="footer__logo">
            <span className="footer__logo-bracket">&lt;</span>
            A.Sow
            <span className="footer__logo-bracket"> /&gt;</span>
          </span>
          <p>Concevoir. Développer. Innover.</p>
        </div>

        <div className="footer__socials">
          <a href={profile.github} target="_blank" rel="noreferrer" title="GitHub">
            <i className="fab fa-github" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
            <i className="fab fa-linkedin" />
          </a>
          <a href={`mailto:${profile.email}`} title="Email">
            <i className="fas fa-envelope" />
          </a>
        </div>

        <div className="footer__copy">
          <p>&copy; {new Date().getFullYear()} Aliou Sow — Conçu avec passion.</p>
        </div>
      </div>
    </footer>
  );
}
