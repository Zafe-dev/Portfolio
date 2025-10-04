import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          {/* Removed footer built text and heart icon as requested */}
          <p className="text-sm text-muted-foreground">
           © {currentYear} Moustapha Seck. {t("Tous droits réservés")}.
          </p>
        </div>
      </div>
    </footer>
  );
};
