import { FloatingNav } from './components/shared/Navbar';
import HeroSection from './components/sections/Hero';
import { AboutSection } from './components/sections/About';
import { ProjectsSection } from './components/sections/Projects';
import { ContactSection } from './components/sections/Contact';
import { Footer } from './components/sections/Footer'

export default function Portfolio() {
  return (
    <main className="relative">
      <FloatingNav />
      
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer/>
    </main>
  )
}