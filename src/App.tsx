import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Workflow from './components/Workflow';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // 1. Inicializamos Lenis
    const lenis = new Lenis({
      duration: 0.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // 2. Sincronizamos el scroll con el loop de animación del navegador
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 3. ===== AQUÍ ESTÁ LA MAGIA =====
    // Esta función intercepta los clics en los links del menú
    // y le dice a Lenis que haga el scroll suave.
    const handleLinkClick = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const hash = target.hash;

      if (hash) {
        e.preventDefault();
        lenis.scrollTo(hash, { offset: 0, duration: 1.5 });
      }
    };

    // Aplicamos el listener a todos los links de ancla
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => link.addEventListener('click', handleLinkClick));

    // 4. Limpieza: removemos los listeners cuando el componente se desmonta
    return () => {
      anchorLinks.forEach(link => link.removeEventListener('click', handleLinkClick));
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Workflow /> 
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;