import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const experiences = [
  {
    title: "Encadreur Bootcamp HTML & CSS",
    titleEn: "HTML & CSS Bootcamp Instructor",
    company: "Formation Professionnelle",
    location: "Dakar, Sénégal",
    period: "Janvier 2023 - Présent",
    periodEn: "January 2023 - Present",
    description: "Formation de débutants aux bases du développement web : HTML, CSS, responsive design. Création et correction de projets déployés sur GitHub.",
    descriptionEn: "Training beginners in web development basics: HTML, CSS, responsive design. Creation and correction of projects deployed on GitHub.",
    achievements: [
      "Suivi et accompagnement des apprenants via Google Meet et Google Classroom",
      "Création de projets pédagogiques adaptés aux débutants",
      "Correction et feedback détaillés sur les projets GitHub",
    ],
    achievementsEn: [
      "Student monitoring and support via Google Meet and Google Classroom",
      "Creation of educational projects adapted for beginners",
      "Detailed correction and feedback on GitHub projects",
    ],
  },
  {
    title: "Développeur Freelance – Web",
    titleEn: "Freelance Web Developer",
    company: "Indépendant",
    location: "Dakar, Sénégal",
    period: "2023 - Présent",
    periodEn: "2023 - Present",
    description: "Création de sites vitrines, portfolios et dashboards administratifs avec HTML, CSS, Tailwind, JavaScript, PHP.",
    descriptionEn: "Creation of showcase websites, portfolios and administrative dashboards with HTML, CSS, Tailwind, JavaScript, PHP.",
    achievements: [
      "Utilisation de GitHub/GitLab pour la gestion de version",
      "Intégration responsive et optimisation des performances",
      "SEO basique et bonnes pratiques web",
    ],
    achievementsEn: [
      "Using GitHub/GitLab for version control",
      "Responsive integration and performance optimization",
      "Basic SEO and web best practices",
    ],
  },
  {
    title: "Assistant Développeur Web",
    titleEn: "Web Developer Assistant",
    company: "Projet Collaboratif",
    location: "Dakar, Sénégal",
    period: "Décembre 2023",
    periodEn: "December 2023",
    description: "Participation à la réalisation de projets web en équipe, intégration d'interfaces utilisateurs et aide à l'installation des environnements de développement.",
    descriptionEn: "Participation in team web project development, user interface integration and assistance in setting up development environments.",
    achievements: [
      "Travail collaboratif en équipe de développeurs",
      "Intégration d'interfaces utilisateurs responsive",
      "Configuration d'environnements de développement",
    ],
    achievementsEn: [
      "Collaborative work in development team",
      "Integration of responsive user interfaces",
      "Setup of development environments",
    ],
  },
];

export const ExperienceSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">{t("experience.title")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("experience.subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 hover-lift hover-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Timeline Indicator */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                    <Briefcase className="h-6 w-6 text-primary-foreground" />
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-primary mt-4 hidden md:block" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-2xl font-bold">
                      {language === "fr" ? exp.title : exp.titleEn}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">
                        {language === "fr" ? exp.period : exp.periodEn}
                      </span>
                    </div>
                  </div>

                  <div className="text-primary font-medium">
                    {exp.company} • {exp.location}
                  </div>

                  <p className="text-muted-foreground">
                    {language === "fr" ? exp.description : exp.descriptionEn}
                  </p>

                  <ul className="space-y-2 pt-2">
                    {(language === "fr" ? exp.achievements : exp.achievementsEn).map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
