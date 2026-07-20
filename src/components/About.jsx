import { education } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="about container">
      <div className="section-header reveal">
        <span className="section-tag">À propos</span>
        <h2 className="section-title">
          Mon <span className="text-gradient">Parcours</span>
        </h2>
        <p className="section-subtitle">
          Découvrez mon cursus académique en génie logiciel.
        </p>
      </div>

      <div className="about__timeline reveal">
        <h3 className="about__timeline-title">
          <i className="fas fa-graduation-cap" /> Formation & Études
        </h3>
        <div className="timeline__list">
          {education.map((edu, i) => (
            <div key={`edu-${i}`} className="timeline__item">
              <div className="timeline__dot timeline__dot--edu" />
              <div className="timeline__content">
                <div className="timeline__header">
                  <h4>{edu.degree}</h4>
                  <span className="timeline__badge">{edu.period}</span>
                </div>
                <p className="timeline__company">{edu.school}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
