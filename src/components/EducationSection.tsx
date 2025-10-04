import { GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

const education = [
  {
    degree: "Développement Web & Mobile Fullstack",
    degreeEn: "Fullstack Web & Mobile Development",
    school: "Orange Digital Center",
    location: "Dakar, Sénégal",
    period: "En cours",
    periodEn: "In Progress",
    description: "Formation complète en développement web et mobile, couvrant les technologies frontend et backend modernes",
    descriptionEn: "Complete training in web and mobile development, covering modern frontend and backend technologies",
    status: "En cours",
    statusEn: "In Progress",
  },
  {
    degree: "BTS Développement Web Frontend",
    degreeEn: "BTS Frontend Web Development",
    school: "Bakeli School of Technology",
    location: "Dakar, Sénégal",
    period: "2023 - 2024",
    description: "Spécialisation en développement frontend avec focus sur les frameworks modernes et UX/UI",
    descriptionEn: "Specialization in frontend development with focus on modern frameworks and UX/UI",
    status: "Diplômé",
    statusEn: "Graduated",
  },
  {
    degree: "Licence en Informatique de Gestion",
    degreeEn: "Bachelor's in Management Information Systems",
    school: "ENSUP Afrique",
    location: "Dakar, Sénégal",
    period: "2020 - 2023",
    description: "Fondamentaux de l'informatique et de la gestion des systèmes d'information",
    descriptionEn: "Computer science fundamentals and information systems management",
    status: "Diplômé",
    statusEn: "Graduated",
  },
];

const skills = [
  {
    category: "Soft Skills",
    categoryEn: "Soft Skills",
    items: [
      { name: "Autonomie & auto-apprentissage", nameEn: "Autonomy & self-learning" },
      { name: "Capacité de vulgarisation (tutorat)", nameEn: "Teaching ability (tutoring)" },
      { name: "Esprit d'équipe & collaboration", nameEn: "Teamwork & collaboration" },
      { name: "Discipline & organisation", nameEn: "Discipline & organization" },
      { name: "Résolution de problèmes complexes", nameEn: "Complex problem solving" },
    ],
  },
  {
    category: "Langues",
    categoryEn: "Languages",
    items: [
      { name: "Français - Courant", nameEn: "French - Fluent" },
      { name: "Anglais - Niveau B1", nameEn: "English - B1 Level" },
      { name: "Wolof - Courant", nameEn: "Wolof - Fluent" },
    ],
  },
];

export const EducationSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-accent">{t("education.title")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("education.subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Academic Education */}
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-6 hover-lift hover-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center shadow-glow-accent flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-accent-foreground" />
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <h3 className="text-2xl font-bold">
                        {language === "fr" ? edu.degree : edu.degreeEn}
                      </h3>
                      <span className="text-muted-foreground">{language === "fr" ? edu.period : edu.periodEn}</span>
                    </div>

                    <div className="text-accent font-medium">
                      {edu.school} • {edu.location}
                    </div>

                    <p className="text-muted-foreground">
                      {language === "fr" ? edu.description : edu.descriptionEn}
                    </p>

                    <Badge variant="secondary" className="bg-accent/10 text-accent">
                      {language === "fr" ? edu.status : edu.statusEn}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Skills & Languages */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center flex items-center justify-center gap-2">
              <Award className="h-6 w-6 text-accent" />
              {t("education.certifications")}
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {skills.map((skillGroup, index) => (
                <Card
                  key={index}
                  className="p-6 hover-lift hover-glow animate-scale-in"
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <h4 className="font-bold text-lg mb-4 text-accent">
                    {language === "fr" ? skillGroup.category : skillGroup.categoryEn}
                  </h4>
                  <ul className="space-y-3">
                    {skillGroup.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          {language === "fr" ? item.name : item.nameEn}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
