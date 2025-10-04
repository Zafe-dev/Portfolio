import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { ExperienceSection } from "@/components/ExperienceSection"
import { EducationSection } from "@/components/EducationSection"
import { SkillsSection } from "@/components/SkillsSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"
import { AIAssistant } from "@/components/AIAssistant"
import { ThemeProvider } from "@/contexts/ThemeContext"
import { LanguageProvider } from "@/contexts/LanguageContext"

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen">
          <Navigation />
          <main>
            <HeroSection />
            <ProjectsSection />
            <ExperienceSection />
            <EducationSection />
            <SkillsSection />
            <ContactSection />
          </main>
          <Footer />
          <AIAssistant />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default Index
