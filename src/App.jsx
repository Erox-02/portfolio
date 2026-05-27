import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import LabNotes from './components/LabNotes.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Particles from './components/Particles.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import { useActiveSection } from './hooks/useActiveSection.js';

function App() {
  const [loading, setLoading] = useState(true);
  const { activeSection, setActiveSection } = useActiveSection();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative bg-background min-h-screen">
      <Particles />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <About />
        <Projects />
        <LabNotes />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;