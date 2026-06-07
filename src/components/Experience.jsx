import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="experience container">
      <div className="section-header reveal">
        <span className="section-tag">Expérience</span>
        <h2 className="section-title">
          Mon <span className="text-gradient">Expérience</span>
        </h2>
        <p className="section-subtitle">
          Mes expériences professionnelles et engagements en génie logiciel.
        </p>
      </div>

      <div className="experience__timeline reveal">
        <div className="timeline__list">
          {experience.map((exp, i) => (
            <div key={i} className="timeline__item">
              <div className="timeline__dot" />
              <div className="timeline__content">
                <div className="timeline__header">
                  <h4>{exp.title}</h4>
                  <span className="timeline__badge">{exp.period}</span>
                </div>
                <p className="timeline__company">{exp.company}</p>
                <p className="timeline__desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
