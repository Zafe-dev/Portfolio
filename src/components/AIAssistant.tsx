"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useLanguage } from "@/contexts/LanguageContext"

type Message = {
  role: "user" | "assistant"
  content: string
}

export const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { language } = useLanguage()

  const systemPrompt = `Tu es l'assistant virtuel de Moustapha Seck, un développeur web et mobile full-stack passionné basé à Dakar, Sénégal. Tu réponds aux questions sur son profil professionnel de manière amicale et professionnelle.

INFORMATIONS SUR MOUSTAPHA:

PROFIL:
- Nom: Moustapha Seck
- Rôle: Développeur Web & Mobile Full-Stack
- Localisation: Dakar, Sénégal
- Email: contact@moustapha.dev
- GitHub: https://github.com/moustapha
- LinkedIn: https://linkedin.com/in/moustapha
- Description: Développeur passionné par les nouvelles technologies, curieux et en constante évolution. Capable de concevoir et développer des applications complètes, de la modélisation UML au déploiement en production.

COMPÉTENCES TECHNIQUES:

Frontend:
- HTML/CSS (95%)
- JavaScript ES6+ (90%)
- TypeScript (85%)
- React (75% - en cours d'apprentissage)
- Angular (80%)
- Tailwind CSS (90%)

Backend:
- PHP (90%)
- Laravel (85%)
- Node.js/Express (88%)
- Java/Spring Boot (75%)
- MySQL/PostgreSQL (90%)
- JWT & Auth (88%)

Outils & DevOps:
- Git/GitHub (95%)
- Docker (85%)
- GitHub Actions (80%)
- UML/Figma (85%)
- Railway/Render (82%)
- Supabase (80%)

Technologies additionnelles: REST API, GraphQL, Socket.io, OAuth, Webpack, Vite, POO, SOLID, MVC, Responsive Design, SEO, Agile, CI/CD, InfinityFree

PROJETS PRINCIPAUX:

1. AppWoyofal (2025)
   - Microservice PHP orienté objet simulant le prépaiement d'électricité
   - Achat de codes Woyofal, gestion des comptes utilisateurs
   - API REST sécurisée avec PostgreSQL, Docker et déploiement sur Render
   - Technologies: PHP, POO, PostgreSQL, Docker, REST API, Render

2. GP du Monde (2025)
   - Application de gestion de cargaisons en TypeScript et PHP
   - Organisation par catégories (alimentaire, chimique, matériel fragile/incassable)
   - Respect strict des règles métiers
   - Technologies: TypeScript, PHP, Gestion, Logistique

3. MaxITSA Framework (2024-2025)
   - Mini-framework PHP maison avec authentification
   - Système de validation personnalisé
   - Migrations MySQL/PostgreSQL
   - Architecture en couches respectant les principes SOLID
   - Technologies: PHP, MVC, SOLID, MySQL, PostgreSQL

4. API Endpoints Sécurisée (2025)
   - API Express.js avec CRUD complet
   - Authentification JWT (Access & Refresh Tokens)
   - Documentation claire et respect des bonnes pratiques REST
   - Technologies: Node.js, Express, JWT, REST, Documentation

EXPÉRIENCE PROFESSIONNELLE:

1. Encadreur Bootcamp HTML & CSS (Janvier 2023 - Présent)
   - Formation de débutants aux bases du développement web
   - Suivi via Google Meet et Google Classroom
   - Création de projets pédagogiques adaptés
   - Correction et feedback détaillés sur GitHub

2. Développeur Freelance Web (2023 - Présent)
   - Création de sites vitrines, portfolios et dashboards
   - Utilisation de GitHub/GitLab pour la gestion de version
   - Intégration responsive et optimisation des performances
   - SEO basique et bonnes pratiques web

3. Assistant Développeur Web (Décembre 2023)
   - Participation à des projets web en équipe
   - Intégration d'interfaces utilisateurs responsive
   - Configuration d'environnements de développement

INSTRUCTIONS:
- Réponds en ${language === "fr" ? "français" : "anglais"} selon la langue actuelle du portfolio
- Sois concis mais informatif
- Si on te demande des informations qui ne sont pas dans ce profil, dis poliment que tu ne peux répondre qu'aux questions concernant le profil professionnel de Moustapha
- Encourage les visiteurs à contacter Moustapha directement pour des opportunités professionnelles
- Reste professionnel mais amical`

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Simulate AI response (in production, this would call an API)
      const response = await simulateAIResponse([...messages, userMessage], systemPrompt)
      const assistantMessage: Message = { role: "assistant", content: response }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error:", error)
      const errorMessage: Message = {
        role: "assistant",
        content:
          language === "fr"
            ? "Désolé, une erreur s'est produite. Veuillez réessayer."
            : "Sorry, an error occurred. Please try again.",
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-glow bg-gradient-primary hover:scale-110 transition-transform z-50"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Dialog */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-gradient-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <div>
                <h3 className="font-semibold">{language === "fr" ? "Assistant IA" : "AI Assistant"}</h3>
                <p className="text-xs opacity-90">
                  {language === "fr" ? "Posez vos questions sur Moustapha" : "Ask questions about Moustapha"}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hover:bg-primary-foreground/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground text-sm py-8">
                {language === "fr"
                  ? "Bonjour! Je suis l'assistant virtuel de Moustapha. Posez-moi des questions sur son profil professionnel, ses compétences ou ses projets."
                  : "Hello! I'm Moustapha's virtual assistant. Ask me questions about his professional profile, skills or projects."}
              </div>
            )}
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-secondary text-secondary-foreground rounded-lg p-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
                      <div
                        className="w-2 h-2 bg-current rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      />
                      <div
                        className="w-2 h-2 bg-current rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={language === "fr" ? "Votre question..." : "Your question..."}
                disabled={isLoading}
                className="flex-1"
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                size="icon"
                className="bg-gradient-primary"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  )
}

// Simulate AI response (in production, replace with actual API call)
async function simulateAIResponse(messages: Message[], systemPrompt: string): Promise<string> {
  // This is a simple simulation. In production, you would call an AI API here
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const lastMessage = messages[messages.length - 1].content.toLowerCase()

  // Simple keyword-based responses
  if (lastMessage.includes("compétence") || lastMessage.includes("skill") || lastMessage.includes("technologie")) {
    return "Moustapha maîtrise un large éventail de technologies:\n\n• Frontend: HTML/CSS, JavaScript, TypeScript, React, Angular, Tailwind\n• Backend: PHP, Laravel, Node.js, Express, Java/Spring Boot\n• Bases de données: MySQL, PostgreSQL\n• DevOps: Docker, Git, GitHub Actions, Railway, Render\n\nIl est particulièrement fort en PHP (90%) et JavaScript (90%)."
  }

  if (lastMessage.includes("projet") || lastMessage.includes("project") || lastMessage.includes("réalisation")) {
    return "Moustapha a réalisé plusieurs projets notables:\n\n1. AppWoyofal - Microservice PHP pour le prépaiement d'électricité\n2. GP du Monde - Application de gestion de cargaisons\n3. MaxITSA Framework - Framework PHP maison avec architecture SOLID\n4. API Endpoints Sécurisée - API Express.js avec JWT\n\nTous ces projets sont disponibles sur son GitHub!"
  }

  if (lastMessage.includes("expérience") || lastMessage.includes("experience") || lastMessage.includes("travail")) {
    return "Moustapha a une expérience variée:\n\n• Encadreur Bootcamp HTML & CSS depuis janvier 2023\n• Développeur Freelance Web depuis 2023\n• Assistant Développeur Web en décembre 2023\n\nIl forme des débutants et crée des applications web complètes."
  }

  if (lastMessage.includes("contact") || lastMessage.includes("email") || lastMessage.includes("joindre")) {
    return "Vous pouvez contacter Moustapha via:\n\n• Email: contact@moustapha.dev\n• GitHub: github.com/moustapha\n• LinkedIn: linkedin.com/in/moustapha\n\nN'hésitez pas à le contacter pour discuter d'opportunités professionnelles!"
  }

  if (lastMessage.includes("qui") || lastMessage.includes("who") || lastMessage.includes("présent")) {
    return "Moustapha Seck est un développeur web et mobile full-stack basé à Dakar, Sénégal. Passionné par les nouvelles technologies, il est capable de concevoir et développer des applications complètes, de la modélisation UML au déploiement en production. Il maîtrise aussi bien le frontend que le backend."
  }

  return "Je suis l'assistant virtuel de Moustapha. Je peux vous renseigner sur ses compétences, ses projets, son expérience professionnelle et comment le contacter. Que souhaitez-vous savoir?"
}
