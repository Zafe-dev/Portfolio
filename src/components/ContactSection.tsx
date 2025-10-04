import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export const ContactSection = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "seckmoustapha238@gmail.com",
      href: "mailto:seckmoustapha238@gmail.com",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+221 77 786 77 40",
      href: "tel:+221777867740",
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Petit Mbao, Dakar",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/feed",
    },
  ];




  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">{t("contact.title")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <Card className="p-8 glass-card space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>

            {contactInfo.map((info, index) => (
              <p
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                  <info.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{info.label}</div>
                  <div className="font-medium">{info.value}</div>
                </div>
              </p>
            ))}

            {/* Social Links */}
            <div className="pt-6 border-t border-border/50">
              <h4 className="text-lg font-semibold mb-4">Réseaux sociaux</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    asChild
                    className="hover-glow"
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Responsive styles for mobile */}
      <style>{`
        @media (max-width: 640px) {
          section#contact {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          .glass-card {
            padding: 1rem !important;
          }
          h2.text-4xl {
            font-size: 1.75rem !important;
          }
          h3.text-2xl {
            font-size: 1.25rem !important;
          }
          .max-w-5xl {
            max-width: 100% !important;
          }
          .max-h-[300px] {
            max-height: 200px !important;
          }
          .space-y-6 > * + * {
            margin-top: 1rem !important;
          }
          .p-8 {
            padding: 1rem !important;
          }
          .text-lg {
            font-size: 0.875rem !important;
          }
          .text-sm {
            font-size: 0.75rem !important;
          }
          .rounded-lg {
            border-radius: 0.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
