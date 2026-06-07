import { useState, useMemo } from "react";
import { profile } from "../data/portfolioData";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const submitButtonText = useMemo(() => {
    if (isSubmitting) return "Envoi en cours...";
    if (submitError) return "Erreur d'envoi";
    return "Envoyer le message";
  }, [isSubmitting, submitError]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("https://formspree.io/f/xnjblgnp", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du formulaire.");
      }

      setIsSubmitted(true);
      setFormValues({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
      if (submitError) {
        setTimeout(() => setSubmitError(""), 4000);
      }
    }
  };

  return (
    <section id="contact" className="contact container">
      <div className="section-header reveal">
        <span className="section-tag">Contact</span>
        <h2 className="section-title">
          Travaillons <span className="text-gradient">ensemble</span>
        </h2>
        <p className="section-subtitle">
          Un projet en tête ? Discutons-en !
        </p>
      </div>

      <div className="contact__wrapper reveal">
        {/* Info Side */}
        <div className="contact__info">
          <h3>Mes coordonnées</h3>
          <p>
            Basé à Thiès, Sénégal. Disponible pour des projets freelance, des stages
            et des collaborations.
          </p>

          <div className="contact__info-list">
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <i className="fas fa-envelope" />
              </div>
              <div>
                <span className="contact__info-label">Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
            </div>

            <div className="contact__info-item">
              <div className="contact__info-icon">
                <i className="fas fa-phone" />
              </div>
              <div>
                <span className="contact__info-label">Téléphone</span>
                <a href={`tel:${profile.phone}`}>{profile.phone}</a>
              </div>
            </div>

            <div className="contact__info-item">
              <div className="contact__info-icon">
                <i className="fas fa-map-marker-alt" />
              </div>
              <div>
                <span className="contact__info-label">Localisation</span>
                <span>{profile.location}</span>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href={profile.github} target="_blank" rel="noreferrer" title="GitHub">
              <i className="fab fa-github" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>

        {/* Form Side */}
        <div className="contact__form-wrapper">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="contact__form">
              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="name">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    required
                    value={formValues.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="votre@email.com"
                    required
                    value={formValues.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="subject">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Collaboration, Projet, etc."
                  required
                  value={formValues.subject}
                  onChange={handleInputChange}
                />
              </div>

              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Parlez-moi de votre projet..."
                  required
                  value={formValues.message}
                  onChange={handleInputChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn--primary btn--full"
                disabled={isSubmitting}
              >
                <span>{submitButtonText}</span>
                <i
                  className={
                    isSubmitting
                      ? "fas fa-spinner fa-spin"
                      : "fas fa-paper-plane"
                  }
                />
              </button>

              {submitError && (
                <p className="contact__error">{submitError}</p>
              )}
            </form>
          ) : (
            <div className="contact__success">
              <div className="contact__success-icon">
                <i className="fas fa-check-circle" />
              </div>
              <h3>Message envoyé !</h3>
              <p>Merci ! Je vous répondrai dans les plus brefs délais.</p>
              <button
                className="btn btn--primary"
                onClick={() => setIsSubmitted(false)}
              >
                <i className="fas fa-redo" /> Nouveau message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
