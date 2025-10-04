"use client"

import type React from "react"

import { createContext, useContext, useState } from "react"

type Language = "fr" | "en"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.projects": "Projets",
    "nav.experience": "Expérience",
    "nav.education": "Formation",
    "nav.skills": "Compétences",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Salut, je suis",
    "hero.role": "Développeur Web & Mobile Full-Stack",
    "hero.description":
      "Développeur passionné par les nouvelles technologies, curieux et en constante évolution. Capable de concevoir et développer des applications complètes, de la modélisation UML au déploiement en production.",
    "hero.cta.projects": "Découvrir mes projets",
    "hero.cta.contact": "Me contacter",
    "hero.cta.download": "Télécharger CV",

    // Projects
    "projects.title": "Projets Réalisés",
    "projects.subtitle": "Découvrez mes dernières créations",
    "projects.viewDemo": "Voir la démo",
    "projects.viewCode": "Code source",

    // Experience
    "experience.title": "Expérience Professionnelle",
    "experience.subtitle": "Mon parcours professionnel",
    "experience.present": "Présent",

    // Education
    "education.title": "Formation",
    "education.subtitle": "Mon parcours académique",
    "education.certifications": "Compétences & Certifications",

    // Skills
    "skills.title": "Compétences",
    "skills.subtitle": "Technologies que je maîtrise",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.tools": "Outils & DevOps",

    // Contact
    "contact.title": "Contactez-moi",
    "contact.subtitle": "Discutons de votre projet",
    "contact.name": "Nom",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Envoyer",
    "contact.sending": "Envoi...",
    "contact.success": "Message envoyé avec succès !",
    "contact.error": "Erreur lors de l'envoi. Réessayez.",

    // Footer

    // AI Assistant
    "ai.title": "Assistant IA",
    "ai.subtitle": "Posez vos questions sur Moustapha",
    "ai.placeholder": "Votre question...",
    "ai.welcome":
      "Bonjour! Je suis l'assistant virtuel de Moustapha. Posez-moi des questions sur son profil professionnel, ses compétences ou ses projets.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.role": "Full-Stack Web & Mobile Developer",
    "hero.description":
      "Passionate developer about new technologies, curious and constantly evolving. Able to design and develop complete applications, from UML modeling to production deployment.",
    "hero.cta.projects": "View my projects",
    "hero.cta.contact": "Contact me",
    "hero.cta.download": "Download CV",

    // Projects
    "projects.title": "Featured Projects",
    "projects.subtitle": "Check out my latest work",
    "projects.viewDemo": "View demo",
    "projects.viewCode": "Source code",

    // Experience
    "experience.title": "Work Experience",
    "experience.subtitle": "My professional journey",
    "experience.present": "Present",

    // Education
    "education.title": "Education",
    "education.subtitle": "My academic background",
    "education.certifications": "Skills & Certifications",

    // Skills
    "skills.title": "Skills",
    "skills.subtitle": "Technologies I master",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.tools": "Tools & DevOps",

    // Contact
    "contact.title": "Get in Touch",
    "contact.subtitle": "Let's discuss your project",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send",
    "contact.sending": "Sending...",
    "contact.success": "Message sent successfully!",
    "contact.error": "Error sending message. Please try again.",

    // Footer
    "footer.rights": "All rights reserved",
    "footer.built": "Built with",
    "footer.and": "and",

    // AI Assistant
    "ai.title": "AI Assistant",
    "ai.subtitle": "Ask questions about Moustapha",
    "ai.placeholder": "Your question...",
    "ai.welcome":
      "Hello! I'm Moustapha's virtual assistant. Ask me questions about his professional profile, skills or projects.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language") as Language
    return saved || "fr"
  })

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used within LanguageProvider")
  return context
}
