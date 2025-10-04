import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  {
    title: "AppWoyofal",
    titleEn: "AppWoyofal",
    description: "Microservice PHP orienté objet simulant le prépaiement d'électricité. Achat de codes Woyofal, gestion des comptes utilisateurs. API REST sécurisée avec PostgreSQL, Docker et déploiement sur Render.",
    descriptionEn: "Object-oriented PHP microservice simulating electricity prepayment. Woyofal code purchase, user account management. Secure REST API with PostgreSQL, Docker and deployment on Render.",
    image: "/appwoyofal-dashboard.jpg",
    tags: ["PHP", "POO", "PostgreSQL", "Docker", "REST API", "Render"],
    github: "https://github.com/ZaffService/App_Woyafal.git",
    year: "2025",
  },
  {
    title: "GP du Monde",
    titleEn: "GP du Monde",
    description: "Application de gestion de cargaisons développée en TypeScript et PHP. Organisation par catégories (alimentaire, chimique, matériel fragile/incassable) avec respect strict des règles métiers.",
    descriptionEn: "Cargo management application developed in TypeScript and PHP. Organization by categories (food, chemical, fragile/unbreakable materials) with strict business rules compliance.",
    image: "/gp-monde-cargo.jpg",
    tags: ["TypeScript", "PHP", "Gestion", "Logistique"],
    github: "https://github.com/ZaffService/Project_Cargaison.git",
    year: "2025",
  },
  {
    title: "MaxITSA Framework",
    titleEn: "MaxITSA Framework",
    description: "Mini-framework PHP maison avec authentification, système de validation personnalisé, migrations MySQL/PostgreSQL, et architecture en couches respectant les principes SOLID.",
    descriptionEn: "Custom PHP mini-framework with authentication, custom validation system, MySQL/PostgreSQL migrations, and layered architecture following SOLID principles.",
    image: "/maxitsa-framework.jpg",
    tags: ["PHP", "MVC", "SOLID", "MySQL", "PostgreSQL"],
    github: "https://github.com/ZaffService/Front_Maxitsa.git",
    year: "2024-2025",
  },
  {
    title: "Projet API – Gestion des Apprenants",
    titleEn: "Learners Management API Project",
    description: "API développée en TypeScript avec Express, Prisma, Zod et MySQL pour gérer apprenants, promotions, profils, compétences, référentiels, tags et niveaux. Technologies utilisées: TypeScript, Express.js, Prisma, Zod, MySQL, Swagger-UI.",
    descriptionEn: "This API was developed in TypeScript with Express, Prisma, Zod and MySQL.\nIt allows managing learners, promotions, profiles, skills, referentials, tags and levels as part of a training management project.\n\nThe goal is to provide a maintainable and modular RESTful API, with a clear and extensible architecture.\n\nTechnologies used\nTypeScript – Strong typing and code structuring\nExpress.js – Minimalist framework for Node.js\nPrisma – Modern ORM for MySQL\nZod – Server-side data validation\nMySQL – Relational database\nSwagger-UI – Interactive API documentation\nDotenv – Environment variables management",
    image: "/api-endpoints-secure.jpg",
    tags: ["TypeScript", "Express.js", "Prisma", "Zod", "MySQL", "Swagger-UI"],
    github: "https://github.com/thiernomoontaga/api_gestion_appprenant_SA.git",
    year: "2025",
  },
];

export const ProjectsSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">{t("projects.title")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-lift hover-glow group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={language === "fr" ? project.title : project.titleEn}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/90 text-primary-foreground">
                    {project.year}
                  </Badge>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">
                  {language === "fr" ? project.title : project.titleEn}
                </h3>
                
                <p className="text-muted-foreground">
                  {language === "fr" ? project.description : project.descriptionEn}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="hover-lift">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="hover-glow flex-1"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      {t("projects.viewCode")}
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
