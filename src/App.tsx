import { useEffect } from 'react'
import { Navbar, Footer } from './components/layout'
import {
  HeroSection,
  ProjectsSection,
  ExperienceSection,
  AboutSection,
  SkillsSection,
  ContactSection,
} from './components/sections'
import './i18n/config'

/**
 * Main App component
 * Orchestrates all sections and layout components
 * Manages scroll behavior for smooth navigation
 */
function App() {
  useEffect(() => {
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Navbar />

      {/* Main content areas */}
      <main>
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
