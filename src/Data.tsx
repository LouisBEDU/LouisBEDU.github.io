import type { Experience, NavItem, Project, StackMap } from "./Types";

export const NAV: NavItem[] = [
  { id: "about", label: "À PROPOS" },
  { id: "stack", label: "STACK" },
  { id: "experience", label: "EXPÉRIENCE" },
  { id: "projects", label: "PROJETS" },
  { id: "contact", label: "CONTACT" },
];

export const STACK: StackMap = {
  Langages: ["Java", "C", "JavaScript", "TypeScript", "HTML", "CSS", "Lua"],
  Frontend: ["React", "React Router", "Next.js", "Tailwind CSS", "Bootstrap"],
  Backend: ["Spring Boot", "Node.js", "Express", "NestJS", "REST APIs"],
  "Bases de données": ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
  "DevOps & Outils": ["Docker", "GitHub Actions", "Git", "Linux", "Windows"],
};

export const EXPERIENCE: Experience[] = [
  {
    title: "Developer Full Stack",
    company: "@Resalib",
    type: "Alternance",
    period: "Août 2025 — Présent",
    active: true,
    bullets: [
      "Développement et amélioration de fonctionnalités sur une application SaaS B2B avec Sails.js et AngularJS/Vue.js.",
      "Identification et correction de bugs afin d’améliorer la stabilité et l’expérience utilisateur.",
      "Participation à la maintenance du code legacy et aux revues de code.",
    ],
    tags: [
      "JavaScript",
      "Sails.js",
      "Waterline",
      "AngularJS",
      "Vue.js",
      "Docker",
      "PostgreSQL",
    ],
  },
  {
    title: "Developer Full Stack",
    company: "@Resalib",
    type: "Stage",
    period: "Avr 2025 — Juin 2025",
    active: false,
    bullets: [
      "Intégration dans une équipe de développement sur une application SaaS B2B existante.",
      "Réalisation de premières corrections de bugs et implémentations simples sous encadrement.",
      "Apprentissage des outils et pratiques professionnelles : Git, revues de code, organisation de projet.",
    ],
    tags: [
      "JavaScript",
      "Sails.js",
      "Waterline",
      "AngularJS",
      "Vue.js",
      "Docker",
      "PostgreSQL",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    emoji: "🧘",
    color: "blue",
    title: "Resalib",
    desc: "Plateforme SaaS B2B de mise en relation dans le domaine du bien-être. Participation à l'évolution produit : ajout de fonctionnalités, correction de bugs et maintenance d'une application existante.",
    tags: [
      "JavaScript",
      "Sails.js",
      "AngularJS",
      "Vue.js",
      "PostgreSQL",
      "Docker",
    ],
    live: "https://resalib.fr",
  },
  {
    emoji: "🔍",
    color: "orange",
    title: "C'Cheky",
    desc: "Projet universitaire réalisé en équipe en 5 jours : développement d'une plateforme de mise en relation où des clients publient des demandes de services et des professionnels peuvent y répondre. Contribution au backend avec Spring Boot (API, logique métier, gestion des données).",
    tags: [
      "Spring Boot",
      "React",
      "Tailwind CSS",
      "H2",
      "PostgreSQL",
      "Docker",
    ],
    live: "https://ccheky.fr/",
  },
  {
    emoji: "📊",
    color: "purple",
    title: "ClassiGit",
    desc: "Projet réalisé dans le cadre de ma formation en BUT : application de visualisation et de classification de données avec l’algorithme k-NN. Permet de charger des jeux de données, explorer des projections, classifier des points et évaluer les performances selon le choix de k.",
    tags: ["Java", "Data Visualization", "k-NN", "CSV"],
  },
  {
    emoji: "🎲",
    color: "accent",
    title: "Pédagopic",
    desc: "Projet réalisé dans le cadre de ma formation en BUT : jeu de plateau éducatif (1 à 7 joueurs) basé sur une progression par niveaux. Les joueurs répondent à des questions pour avancer, avec une difficulté croissante et un système de progression bloquée favorisant l’apprentissage continu.",
    tags: ["Game Design", "Java", "Education", "UI/UX"],
  },
  {
    emoji: "💬",
    color: "red",
    title: "CampusTalk",
    desc: "Projet réalisé dans le cadre de ma formation en BUT : application de messagerie avec fils de discussion. Permet de créer des comptes, publier et interagir avec des messages (likes, réponses), gérer les participants et modérer les contenus, avec une suppression automatique des messages après 24h.",
    tags: ["Java", "Tomcat", "Messaging", "Backend", "Authentication", "CRUD"],
    live: "",
  },
];
