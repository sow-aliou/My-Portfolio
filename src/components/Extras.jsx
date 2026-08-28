import { certifications, activities, researchInterests } from "../data/portfolioData";

export default function Extras() {
  return (
    <section id="extras" className="extras container">
      <div className="section-header reveal">
        <span className="section-tag">Hors-parcours</span>
        <h2 className="section-title">
          Certifications & <span className="text-gradient">Activités</span>
        </h2>
        <p className="section-subtitle">
          Découvrez mes certifications académiques, mon engagement communautaire et mes axes de recherche.
        </p>
      </div>

      <div className="extras__grid">
        {/* Certifications Section */}
        <div className="extras__card extras__card--certs reveal">
          <h3>
            <i className="fas fa-certificate text-gradient" /> Certifications & Formations
          </h3>
          <div className="extras__list">
            {certifications.map((cert, i) => (
              <div key={i} className="extras__item">
                <div className="extras__item-icon">
                  <i className={cert.icon} />
                </div>
                <div className="extras__item-content">
                  <h4>{cert.title}</h4>
                  <p>
                    {cert.issuer} • <span>{cert.date}</span>
                  </p>
                  {cert.image && (
                    <a
                      href={cert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="extras__cert-link"
                    >
                      <i className="fas fa-eye" /> Voir l'attestation
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Co-curricular Activities Section */}
        <div className="extras__card extras__card--activities reveal">
          <h3>
            <i className="fas fa-handshake text-gradient" /> Activités Co-pédagogiques
          </h3>
          <div className="extras__list">
            {activities.map((act, i) => (
              <div key={i} className="extras__item">
                <div className="extras__item-icon extras__item-icon--activity">
                  <i className={act.icon} />
                </div>
                <div className="extras__item-content">
                  <h4>{act.title}</h4>
                  <p>{act.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Research Section */}
      <div className="extras__research reveal">
        <div className="extras__research-card">
          <div className="extras__research-icon">
            <i className="fas fa-microscope" />
          </div>
          <div className="extras__research-content">
            <h3>Intérêt de recherche & Innovation</h3>
            {researchInterests.map((interest, i) => (
              <div key={i}>
                <h4>{interest.title}</h4>
                <p>{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
