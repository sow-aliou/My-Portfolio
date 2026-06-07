import { useState } from "react";
import { projects } from "../data/portfolioData";

function ProjectLinks({ project, className = "", onClick }) {
  if (!project.github && !project.demo) return null;

  const stop = (e) => {
    e.stopPropagation();
    onClick?.(e);
  };

  return (
    <div className={`projects__links ${className}`.trim()}>
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="projects__link projects__link--github"
          onClick={stop}
        >
          <i className="fab fa-github" />
          <span>GitHub</span>
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="projects__link projects__link--demo"
          onClick={stop}
          style={{ "--project-color": project.color }}
        >
          <i className="fas fa-external-link-alt" />
          <span>Voir le projet</span>
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects container">
      <div className="section-header reveal">
        <h2 className="section-title">
          Mes <span className="text-gradient">Réalisations</span>
        </h2>
        <p className="section-subtitle">
          Des projets concrets alliant innovation technique et impact réel. Cliquez sur un projet pour explorer ses détails.
        </p>
      </div>

      <div className="projects__grid">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`projects__card reveal ${project.featured ? "projects__card--featured" : ""}`}
            style={{ "--project-color": project.color }}
            onClick={() => setSelectedProject(project)}
            title="Cliquez pour voir les détails de l'ingénieur"
          >
            <div className="projects__card-accent" />
            <div className="projects__card-content">
              <div
                className="projects__card-icon"
                style={{
                  background: `${project.color}15`,
                  color: project.color,
                }}
              >
                <i className={project.icon} />
              </div>
              <h3 className="projects__card-title">{project.title}</h3>
              <p className="projects__card-desc">{project.description}</p>
              <div className="projects__card-tags">
                {(project.tools || project.tags).slice(0, 3).map((tag) => (
                  <span key={tag} className="projects__tag">
                    {tag}
                  </span>
                ))}
                {(project.tools || project.tags).length > 3 && (
                  <span className="projects__tag">+{(project.tools || project.tags).length - 3}</span>
                )}
              </div>
              <ProjectLinks project={project} className="projects__card-links" />
              <div className="projects__card-more">
                <span>Explorer les détails</span>
                <i className="fas fa-chevron-right" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Modal / Bottom Sheet */}
      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div
            className="project-modal__content"
            onClick={(e) => e.stopPropagation()}
            style={{ "--accent-color": selectedProject.color }}
          >
            <button
              className="project-modal__close"
              onClick={() => setSelectedProject(null)}
              aria-label="Fermer"
            >
              <i className="fas fa-times" />
            </button>

            <div className="project-modal__header">
              <div
                className="project-modal__icon"
                style={{
                  background: `${selectedProject.color}15`,
                  color: selectedProject.color,
                }}
              >
                <i className={selectedProject.icon} />
              </div>
              <div>
                <h2>{selectedProject.title}</h2>
                <div className="project-modal__badge">
                  {selectedProject.featured ? "Projet Principal" : "Projet d'Étude"}
                </div>
              </div>
            </div>

            <div className="project-modal__body">
              {/* Objective */}
              <div className="project-modal__section">
                <h4>
                  <i className="fas fa-bullseye" /> Objectif du projet
                </h4>
                <p>{selectedProject.objective}</p>
              </div>

              {/* Tools */}
              <div className="project-modal__section">
                <h4>
                  <i className="fas fa-tools" /> Technologies & Outils utilisés
                </h4>
                <div className="project-modal__tags">
                  {(selectedProject.tools || selectedProject.tags).map((tool) => (
                    <span
                      key={tool}
                      className="projects__tag projects__tag--modal"
                      style={{
                        borderColor: `${selectedProject.color}30`,
                        background: `${selectedProject.color}05`,
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Approach/Description */}
              <div className="project-modal__section">
                <h4>
                  <i className="fas fa-route" /> Approche & Fonctionnalités
                </h4>
                <p>{selectedProject.description}</p>
              </div>

              {/* Role */}
              <div className="project-modal__section">
                <h4>
                  <i className="fas fa-user-tag" /> Mon Rôle & Contribution
                </h4>
                <p>{selectedProject.role}</p>
              </div>

              {/* Results */}
              <div className="project-modal__section">
                <h4>
                  <i className="fas fa-chart-line" /> Résultats & Livrables
                </h4>
                <p>{selectedProject.outcomes}</p>
              </div>

              {/* Learning Reflection */}
              <div className="project-modal__section project-modal__section--reflection">
                <h4>
                  <i className="fas fa-brain" /> Réflexion & Apprentissages
                </h4>
                <blockquote>
                  <i className="fas fa-quote-left quote-icon" />
                  {selectedProject.reflection}
                </blockquote>
              </div>

              <ProjectLinks
                project={selectedProject}
                className="project-modal__links"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
