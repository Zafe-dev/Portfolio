import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/contexts/LanguageContext";

const skills = {
  frontend: [
    { name: "HTML / CSS", level: 95 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React (en cours)", level: 75 },
    { name: "Angular", level: 80 },
    { name: "Tailwind CSS", level: 90 },
  ],
  backend: [
    { name: "PHP", level: 90 },
    { name: "Laravel", level: 85 },
    { name: "Node.js / Express", level: 88 },
    { name: "Java / Spring Boot", level: 75 },
    { name: "MySQL / PostgreSQL", level: 90 },
    { name: "JWT & Auth", level: 88 },
  ],
  tools: [
    { name: "Git / GitHub", level: 95 },
    { name: "Docker", level: 85 },
    { name: "GitHub Actions", level: 80 },
    { name: "UML / Figma", level: 85 },
    { name: "Railway / Render", level: 82 },
    { name: "Supabase", level: 80 },
  ],
};

export const SkillsSection = () => {
  const { t } = useLanguage();

  const categories = [
    { key: "frontend", title: t("skills.frontend"), data: skills.frontend, color: "primary" },
    { key: "backend", title: t("skills.backend"), data: skills.backend, color: "accent" },
    { key: "tools", title: t("skills.tools"), data: skills.tools, color: "primary" },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">{t("skills.title")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {categories.map((category, catIndex) => (
            <Card
              key={category.key}
              className="p-6 hover-lift hover-glow animate-scale-in"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <div className={`w-1 h-8 bg-gradient-${category.color} rounded-full`} />
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.data.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2"
                      style={{
                        animationDelay: `${(catIndex * 6 + index) * 0.1}s`,
                      }}
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="p-8 glass-card">
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "REST API",
                "GraphQL",
                "Socket.io",
                "JWT",
                "OAuth",
                "Webpack",
                "Vite",
                "POO",
                "SOLID",
                "MVC",
                "UML",
                "Responsive Design",
                "SEO",
                "Agile",
                "CI/CD",
                "InfinityFree",
              ].map((tech, index) => (
                <div
                  key={tech}
                  className="px-4 py-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1 cursor-default animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
