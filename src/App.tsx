import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Clients from './components/Clients';
import Portfolio from './components/Portfolio';
import Services from './components/Services'; // <-- DESCOMENTAR O AÑADIR SI NO ESTÁ
import Workflow from './components/Workflow';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectPopup from './components/ProjectPopup';

type LenisInstance = any | null;

function App() {
  const [lenis, setLenis] = useState<LenisInstance>(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const openPopup = (project: any) => setSelectedProject(project);
  const closePopup = () => setSelectedProject(null);

  useEffect(() => {
    // ... (el código de Lenis se mantiene igual)
    let lenisInstance: any = null;
    let animationFrameId: number;
    const initLenis = async () => {
        try {
            const { default: Lenis } = await import('lenis');
            lenisInstance = new Lenis({ duration: 0.7, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), });
            setLenis(lenisInstance);
            function raf(time: number) {
                if(lenisInstance) {
                    lenisInstance.raf(time);
                    animationFrameId = requestAnimationFrame(raf);
                }
            }
            animationFrameId = requestAnimationFrame(raf);
            const anchorLinks = document.querySelectorAll('a[href^="#"]');
            const handleLinkClick = (e: Event) => {
              const target = e.currentTarget as HTMLAnchorElement;
              const hash = target.hash;
              if (hash && lenisInstance) {
                e.preventDefault();
                lenisInstance.scrollTo(hash, { offset: 0, duration: 1.5 });
              }
            };
            anchorLinks.forEach(link => link.addEventListener('click', handleLinkClick));
        } catch(e) {
            console.warn("Could not load Lenis, smooth scroll disabled.", e);
        }
    };
    initLenis();
    return () => {
        if (lenisInstance) {
            lenisInstance.destroy();
        }
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
    };
  }, []);

  useEffect(() => {
    if (lenis) {
      if (selectedProject) {
        lenis.stop();
        document.body.style.overflow = 'hidden';
      } else {
        lenis.start();
        document.body.style.overflow = 'auto';
      }
    }
  }, [selectedProject, lenis]);

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Clients />
        <Portfolio onProjectSelect={openPopup} />
        <Services /> {/* <-- AQUÍ ESTÁ, DE VUELTA EN EL FLUJO */}
        <Workflow />
        <Contact />
      </main>
      <Footer />
      <ProjectPopup project={selectedProject} onClose={closePopup} />
    </div>
  );
}

export default App;