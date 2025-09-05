import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Workflow from './components/Workflow';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectPopup from './components/ProjectPopup';

// Definimos el tipo para Lenis para que TypeScript esté contento
type LenisInstance = Lenis | null;

function App() {
  const [lenis, setLenis] = useState<LenisInstance>(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const openPopup = (project: any) => setSelectedProject(project);
  const closePopup = () => setSelectedProject(null);

  useEffect(() => {
    // 1. Inicializamos Lenis y lo guardamos en el estado
    const lenisInstance = new Lenis({
      duration: 0.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    setLenis(lenisInstance);

    // 2. Sincronizamos el scroll
    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 3. Manejador de clics para scroll suave en el menú
    const handleLinkClick = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const hash = target.hash;
      if (hash) {
        e.preventDefault();
        lenisInstance.scrollTo(hash, { offset: 0, duration: 1.5 });
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => link.addEventListener('click', handleLinkClick));

    // 4. Limpieza
    return () => {
      anchorLinks.forEach(link => link.removeEventListener('click', handleLinkClick));
      lenisInstance.destroy();
      setLenis(null);
    };
  }, []);

  // ===== INICIO DE LA SOLUCIÓN =====
  // Este nuevo useEffect controla el scroll cuando el popup se abre o se cierra.
  useEffect(() => {
    if (lenis) {
      if (selectedProject) {
        lenis.stop(); // Pausamos el scroll de Lenis
        document.body.style.overflow = 'hidden'; // Y bloqueamos el overflow del body
      } else {
        lenis.start(); // Reanudamos el scroll de Lenis
        document.body.style.overflow = 'auto'; // Y restauramos el overflow
      }
    }
  }, [selectedProject, lenis]);
  // ===== FIN DE LA SOLUCIÓN =====

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio onProjectSelect={openPopup} />
        <Workflow />
        <Contact />
      </main>
      <Footer />
      {/* El popup ahora se renderiza aquí, controlado por el estado de App */}
      {selectedProject && <ProjectPopup project={selectedProject} onClose={closePopup} />}
    </div>
  );
}

export default App;
