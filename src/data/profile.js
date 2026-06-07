export const profile = {
  name: "Aliou Sow",
  title: "Développeur Full-Stack Junior",
  summary:
    "Étudiant en Licence 3 d'Informatique (Génie Logiciel) et développeur passionné par l'Intelligence Artificielle et le développement de solutions logicielles innovantes. Rigoureux et orienté résultats, je m'efforce de concevoir des architectures performantes répondant à des problématiques complexes.",
  location: "Thiès, Sénégal",
  email: "sow8.aliou@gmail.com",
  phone: "+221 77 727 06 90",
  github: "https://github.com/sow-aliou",
  linkedin: "https://www.linkedin.com/in/aliou-sow-9a8a233a7/",
  cvUrl: import.meta.env.DEV
    ? "http://localhost:5174/"
    : "https://cv-aliou-sow.vercel.app/",
};

export const navItems = [
  { id: "home", label: "Accueil", icon: "fas fa-home" },
  { id: "about", label: "Parcours", icon: "fas fa-user" },
  { id: "experience", label: "Expérience", icon: "fas fa-briefcase" },
  { id: "skills", label: "Compétences", icon: "fas fa-layer-group" },
  { id: "projects", label: "Projets", icon: "fas fa-briefcase" },
  { id: "extras", label: "Certifications & Activités", icon: "fas fa-award" },
  { id: "contact", label: "Contact", icon: "fas fa-envelope" },
];
