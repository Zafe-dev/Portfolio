import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative px-4">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 md:w-96 md:h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto relative z-10 pt-20 md:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="order-1 space-y-4 md:space-y-6 animate-fade-in">
            {/* Removed greeting text and icon as per user request */}

            <h1 className="text-xl md:text-7xl font-bold leading-tight">
              Moustapha Seck
              <span className="block text-gradient mt-1 md:mt-2">
                {t("hero.role")}
              </span>
            </h1>

            <p className="text-xs md:text-lg text-muted-foreground max-w-xl">
              {t("hero.description")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Button
                size="sm"
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-primary hover:shadow-glow group"
              >
                {t("hero.cta.projects")}
                <ArrowRight className="ml-1 md:ml-2 h-4 md:h-5 w-4 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="sm"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="hover-glow"
              >
                {t("hero.cta.contact")}
              </Button>

              <Button
                size="sm"
                variant="outline"
                asChild
                className="hover-glow"
              >
                <a href="/MoustaphaCv.pdf" download>
                  <Download className="mr-1 md:mr-2 h-4 md:h-5 w-4 md:w-5" />
                  {t("hero.cta.download")}
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 md:gap-4 pt-3 md:pt-4">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="hover-glow"
              >
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 md:h-5 w-4 md:w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="hover-glow"
              >
                <a href="https://www.linkedin.com/feed" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 md:h-5 w-4 md:w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="hover-glow"
              >
                
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-2 relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full max-w-xs md:max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-glow" />
              <img
                src="/professional-developer-portrait.png"
                alt="Moustapha"
              className="relative rounded-full w-full shadow-glow hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-glow" />
        </div>
      </div>
    </section>
  );
};
