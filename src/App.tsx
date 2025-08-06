import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Hook para inicializar y manejar el scroll suave
  useEffect(() => {
    // Inicializamos Lenis con algunas opciones para un feeling más suave
    const lenis = new Lenis({
      duration: 0.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing suave
    });

    // Función que se ejecuta en cada frame para actualizar el scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Empezamos el loop de animación
    requestAnimationFrame(raf);

    // Limpieza: es importante destruir la instancia de Lenis si el componente se desmonta
    return () => {
      lenis.destroy();
    };
  }, []); // El array vacío asegura que esto se ejecute solo una vez

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;