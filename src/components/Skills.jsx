import { skillCategories, softSkills, languages } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="skills container">
      <div className="section-header reveal">
        <span className="section-tag">Compétences</span>
        <h2 className="section-title">
          Mon <span className="text-gradient">Expertise</span> Technique
        </h2>
        <p className="section-subtitle">
          Technologies et outils que je maîtrise au quotidien.
        </p>
      </div>

      {/* Technical Skills Grid */}
      <div className="skills__grid">
        {skillCategories.map((cat, i) => (
          <div
            key={i}
            className="skills__card reveal"
            style={{ "--card-accent": cat.color }}
          >
            <div className="skills__card-header">
              <div
                className="skills__card-icon"
                style={{ background: `${cat.color}15`, color: cat.color }}
              >
                <i className={cat.icon} />
              </div>
              <h3>{cat.title}</h3>
            </div>
            <div className="skills__tags">
              {cat.tags.map((tag) => (
                <span key={tag} className="skills__tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Row: Soft Skills + Languages */}
      <div className="skills__bottom reveal">
        <div className="skills__soft">
          <h3>
            <i className="fas fa-heart" /> Soft Skills
          </h3>
          <div className="skills__soft-grid">
            {softSkills.map((skill, i) => (
              <div key={i} className="skills__soft-item">
                <i className={skill.icon} />
                <span>{skill.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills__languages">
          <h3>
            <i className="fas fa-language" /> Langues
          </h3>
          <div className="skills__lang-list">
            {languages.map((lang, i) => (
              <div key={i} className="skills__lang-item">
                <div className="skills__lang-info">
                  <span className="skills__lang-name">{lang.name}</span>
                  <span className="skills__lang-level">{lang.level}</span>
                </div>
                <div className="skills__lang-bar">
                  <div
                    className="skills__lang-fill"
                    style={{ "--fill-width": `${lang.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
