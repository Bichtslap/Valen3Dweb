import valerLogoUrl from '../assets/valer_studios_white_text.svg';
import React, { useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2);
      const y = (e.clientY - window.innerHeight / 2);
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  

  const parallaxFactor = {
    grid: -0.005,
    cyanSquare: 0.015,
    redSquare: -0.012,
    yellowSquare: 0.01,
    renderText: 0.02,
    vfxText: -0.018,
    graphicsText: -0.025,
    creativityText: 0.022,
  };

  return (
    <section id="home" className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/1100939144?h=ad8dcb0b09&autoplay=1&loop=1&muted=1&background=1"
          frameBorder="0"
          allow="autoplay; fullscreen"
          className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
        ></iframe>
      </div>
      <div 
        className="absolute inset-0 opacity-20 z-10"
        style={{
          transform: `translate(${mousePosition.x * parallaxFactor.grid}px, ${mousePosition.y * parallaxFactor.grid}px)`,
        }}
      >
        <div className="absolute inset-0 animated-grid-background" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Elementos animados con movimiento */}
      <div 
        className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 animate-pulse z-10"
        style={{ transform: `translate(${mousePosition.x * parallaxFactor.cyanSquare}px, ${mousePosition.y * parallaxFactor.cyanSquare}px)` }}
      ></div>
      <div 
        className="absolute top-40 right-32 w-1 h-8 bg-red-500 opacity-60 z-10"
        style={{ transform: `translate(${mousePosition.x * parallaxFactor.redSquare}px, ${mousePosition.y * parallaxFactor.redSquare}px)` }}
      ></div>
      <div 
        className="absolute bottom-32 left-16 w-4 h-1 bg-yellow-400 z-10"
        style={{ transform: `translate(${mousePosition.x * parallaxFactor.yellowSquare}px, ${mousePosition.y * parallaxFactor.yellowSquare}px)` }}
      ></div>
      
      {/* Bloques de código flotantes con movimiento */}
      <div 
        className="absolute text-cyan-400 font-mono text-xs opacity-30 z-10"
        style={{ transform: `translate(${mousePosition.x * parallaxFactor.renderText}px, ${mousePosition.y * parallaxFactor.renderText}px)`, top: '15%', left: '10%' }}
      >
        {'{ render: true }'}
      </div>
      <div 
        className="absolute text-red-400 font-mono text-xs opacity-30 z-10"
        style={{ transform: `translate(${mousePosition.x * parallaxFactor.vfxText}px, ${mousePosition.y * parallaxFactor.vfxText}px)`, top: '70%', right: '15%' }}
      >
        {'</VFX>'}
      </div>
      <div 
        className="absolute text-yellow-400 font-mono text-xs opacity-30 z-10"
        style={{ transform: `translate(${mousePosition.x * parallaxFactor.graphicsText}px, ${mousePosition.y * parallaxFactor.graphicsText}px)`, top: '25%', right: '20%' }}
      >
        {'{ 3D GRAPHICS }'}
      </div>
      <div 
        className="absolute text-green-400 font-mono text-xs opacity-30 z-10"
        style={{ transform: `translate(${mousePosition.x * parallaxFactor.creativityText}px, ${mousePosition.y * parallaxFactor.creativityText}px)`, bottom: '20%', left: '18%' }}
      >
        {'{ creativity: adaptable }'}
      </div>
      
      {/* Contenido Principal */}
      <div className="relative z-20 text-center px-6 flex flex-col items-center">
        <div className="mb-8">
          <div className="text-cyan-400 font-mono text-sm mb-4 animate-fade-in-up">
            <Terminal className="inline w-4 h-4 mr-2" />
            ~/hacelo valer/~
          </div>
          
          <div className="logo-crt-container">
            <img src={valerLogoUrl} alt="Valer Studios Logo" style={{ width: '100%' }} />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-gray-400 mb-6 font-mono leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <span className="text-cyan-400">&gt;</span> Un estudio creativo que fusiona la cultura global en 
            <span className="text-red-400"> VFX</span>, 
            <span className="text-yellow-400"> 3D</span>, y  
            <span className="text-green-400"> motion design </span> rompiendo barreras con eficiencia y resultados impactantes.
          </p>
          <div className="text-sm text-gray-500 font-mono animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <span className="text-cyan-400">Status:</span> ONLINE | 
            <span className="text-green-400"> Open for Work </span>
          </div>
        </div>
        
        {/* ===== BOTONES MODIFICADOS AQUÍ ===== */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <a 
            href="#work"
            className="px-8 py-4 bg-cyan-400 text-black font-bold rounded-lg hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25 font-mono tracking-wider"
          >
            [VER PROYECTOS]
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 font-mono tracking-wider"
          >
            [HABLEMOS]
          </a>
        </div>
        {/* ===================================== */}

      </div>
    </section>
  );
};

export default Hero;