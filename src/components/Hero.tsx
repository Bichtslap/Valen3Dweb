import React, { useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      window.addEventListener('resize', listener);
      return () => window.removeEventListener('resize', listener);
    }
  }, [matches, query]);
  return matches;
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2);
      const y = (e.clientY - window.innerHeight / 2);
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDesktop]);

  // Objeto de parallax expandido con los nuevos textos
  const parallaxFactor = {
    grid: -0.005,
    cyanSquare: 0.015,
    redSquare: -0.012,
    yellowSquare: 0.01,
    autodidacta: 0.02,
    detalle: -0.018,
    flexible: -0.025,
    desarrollo: 0.022,
    empatico: 0.018,
    adaptable: -0.02,
  };

  return (
    <section id="home" className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* --- VIDEO DE FONDO --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/1100939144?h=ad8dcb0b09&autoplay=1&loop=1&muted=1&background=1"
          frameBorder="0"
          allow="autoplay; fullscreen"
          className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
        ></iframe>
      </div>
      
      {/* --- EFECTOS PARALLAX (SOLO DESKTOP) --- */}
      {isDesktop && (
        <>
          {/* Grid y elementos gráficos */}
          <div className="absolute inset-0 opacity-20 z-10" style={{ transform: `translate(${mousePosition.x * parallaxFactor.grid}px, ${mousePosition.y * parallaxFactor.grid}px)`}}>
            <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`, backgroundSize: '50px 50px'}}></div>
          </div>
          <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 animate-pulse z-10" style={{ transform: `translate(${mousePosition.x * parallaxFactor.cyanSquare}px, ${mousePosition.y * parallaxFactor.cyanSquare}px)` }}></div>
          <div className="absolute top-40 right-32 w-1 h-8 bg-red-500 opacity-60 z-10" style={{ transform: `translate(${mousePosition.x * parallaxFactor.redSquare}px, ${mousePosition.y * parallaxFactor.redSquare}px)` }}></div>
          <div className="absolute bottom-32 left-16 w-4 h-1 bg-yellow-400 z-10" style={{ transform: `translate(${mousePosition.x * parallaxFactor.yellowSquare}px, ${mousePosition.y * parallaxFactor.yellowSquare}px)` }}></div>

          {/* ===== NUEVOS TEXTOS FLOTANTES ===== */}
          <div className="absolute text-cyan-400 font-mono text-xs opacity-30 z-10" style={{ transform: `translate(${mousePosition.x * parallaxFactor.autodidacta}px, ${mousePosition.y * parallaxFactor.autodidacta}px)`, top: '15%', left: '10%' }}>
            {'{ AUTODIDACTA }'}
          </div>
          <div className="absolute text-red-400 font-mono text-xs opacity-30 z-10" style={{ transform: `translate(${mousePosition.x * parallaxFactor.detalle}px, ${mousePosition.y * parallaxFactor.detalle}px)`, top: '70%', right: '15%' }}>
            {'<ATENCION_AL_DETALLE />'}
          </div>
          <div className="absolute text-yellow-400 font-mono text-xs opacity-30 z-10" style={{ transform: `translate(${mousePosition.x * parallaxFactor.flexible}px, ${mousePosition.y * parallaxFactor.flexible}px)`, top: '25%', right: '20%' }}>
            {'const flexible = true;'}
          </div>
          <div className="absolute text-green-400 font-mono text-xs opacity-30 z-10" style={{ transform: `translate(${mousePosition.x * parallaxFactor.desarrollo}px, ${mousePosition.y * parallaxFactor.desarrollo}px)`, bottom: '20%', left: '18%' }}>
            {'// DESARROLLO_CONTINUO'}
          </div>
          <div className="absolute text-pink-400 font-mono text-xs opacity-30 z-10" style={{ transform: `translate(${mousePosition.x * parallaxFactor.empatico}px, ${mousePosition.y * parallaxFactor.empatico}px)`, bottom: '15%', right: '25%' }}>
            {'empathy.level = 100'}
          </div>
           <div className="absolute text-purple-400 font-mono text-xs opacity-30 z-10" style={{ transform: `translate(${mousePosition.x * parallaxFactor.adaptable}px, ${mousePosition.y * parallaxFactor.adaptable}px)`, top: '65%', left: '22%' }}>
            {'<Adaptable />'}
          </div>
        </>
      )}
      
      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="relative z-20 text-center px-6 flex flex-col items-center">
        {/* ... (el resto del contenido, logo, etc. no cambia) ... */}
        <div className="mb-8 w-full">
          <div className="text-cyan-400 font-mono text-sm mb-4 animate-fade-in-up">
            <Terminal className="inline w-4 h-4 mr-2" />
            ~/hacelo-valer
          </div>
          <div className="w-full max-w-lg mx-auto glitch-text" data-text="VALER STUDIO">
            <svg id="Layer_4" data-name="Layer 4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 572.86 212.05" className="w-full h-auto" fill="white">
                <g id="VALER"><path d="M-1915.18,485.6V365.53h28.62v97.38h56.19V485.6Z" transform="translate(2167.82 -363.74)"/><polygon points="353.86 121.86 446.88 121.86 446.88 100.21 382.3 100.21 382.3 72.12 437.28 72.12 437.28 50.65 382.3 50.65 382.3 50.65 353.86 50.65 353.86 121.86"/><path d="M-1725.17,365.53H-1814v17.94a3.7,3.7,0,0,0,3.7,3.7h89.32V369.75A4.22,4.22,0,0,0-1725.17,365.53Z" transform="translate(2167.82 -363.74)"/><path d="M-1991.84,399-2003,369a1.62,1.62,0,0,0-3,0L-2052,483a1.62,1.62,0,0,0,1.5,2.23h25.88" transform="translate(2167.82 -363.74)"/><path d="M-1953.57,485.19h27a1.63,1.63,0,0,0,1.52-2.2l-44.15-116.83a1.63,1.63,0,0,0-1.52-1.05h-23.78a1.62,1.62,0,0,0-1.51,2.2q4,10.68,8.09,21.36Z" transform="translate(2167.82 -363.74)"/><path d="M-1999.41,440.85l-5.67,18a2.69,2.69,0,0,0,2.55,3.5l32.15.15-4.85-19.06a3.21,3.21,0,0,0-3.09-2.42Z" transform="translate(2167.82 -363.74)"/><path d="M-1640.26,442.52l17.4,43.08h24.21a3.69,3.69,0,0,0,3.39-5.16L-1612,441.9a3.7,3.7,0,0,1,1.65-4.72,26.53,26.53,0,0,0,8.64-7.08,28.31,28.31,0,0,0,5.32-12.13,76.28,76.28,0,0,0,1.31-14.22,74.12,74.12,0,0,0-1.57-16.06,28.14,28.14,0,0,0-5.68-11.95q-4.1-5-12-7.59t-20.33-2.62h-64.57v14.93a6.53,6.53,0,0,0,6.54,6.53h46.34a89.86,89.86,0,0,1,12.74.7,19.22,19.22,0,0,1,6.72,2,6.37,6.37,0,0,1,2.88,3.91,27.91,27.91,0,0,1,.69,6.92,25,25,0,0,1-.78,6.78,7.91,7.91,0,0,1-3,4.34q-2.17,1.6-6.8,2.16a109.77,109.77,0,0,1-12.66.56h-52.7V485.6h28.62V442.49" transform="translate(2167.82 -363.74)"/><g id="logo_valer" data-name="logo valer"><path d="M-2115.07,484.27c1.89-4,3.33-6.9,4.89-10q26.49-53.26,52.94-106.55c1.27-2.56,2.66-3.64,5.6-3.55,7.38.23,14.77.07,22.62.07-.49,1.29-.74,2.24-1.18,3.1q-28.87,57.32-57.85,114.6c-.55,1.08-1.89,2.48-2.9,2.51C-2098.73,484.64-2106.52,484.27-2115.07,484.27Z" transform="translate(2167.82 -363.74)"/><path d="M-2117.1,463.75-2167.82,364c6.36,0,12.72-.27,17.67-.15,6.92.28,10.64,1.84,13.71,8.34,9.87,20.87,20.54,41.36,31,61.95,1,1.9,1.22,3.38.2,5.38C-2109.2,447.31-2112.94,455.19-2117.1,463.75Z" transform="translate(2167.82 -363.74)"/><path d="M-2128.13,363.8h16.82c7.79,0,15.59-.15,23.37.07a7,7,0,0,1,4.57,2.31,116.29,116.29,0,0,1,7.09,10.31c2.18,3.4-1.86,9.69-6.12,9.68-10,0-20,0-30-.07-1.24,0-3.13-.41-3.61-1.2C-2120.08,378.14-2123.9,371.24-2128.13,363.8Z" transform="translate(2167.82 -363.74)"/></g></g><path d="M-2020.43,575.8q-3.71,0-8-.15t-8.4-.5c-2.74-.23-5.2-.45-7.4-.65v-5.6q3.49.3,7.5.6t7.8.45q3.79.15,6.6.15a74,74,0,0,0,8.55-.4,15.82,15.82,0,0,0,5.85-1.8,6,6,0,0,0,2.6-2.75,12.43,12.43,0,0,0,1-4c.13-1.5.2-3.12.2-4.85q0-3.9-.2-6.3a6.76,6.76,0,0,0-1.2-3.65,6,6,0,0,0-3.2-1.85,40.28,40.28,0,0,0-6.1-1l-17.6-1.9a22.45,22.45,0,0,1-7.6-1.9,9.75,9.75,0,0,1-4.15-3.6,12.73,12.73,0,0,1-1.71-5.2,60,60,0,0,1-.35-6.8,25.49,25.49,0,0,1,1.55-9.7,12,12,0,0,1,4.61-5.65,19.32,19.32,0,0,1,7.6-2.65,69.68,69.68,0,0,1,10.55-.7c2.53,0,5.11.06,7.75.2s5.1.3,7.4.5a42.14,42.14,0,0,1,5.65.8v5.4q-2.7-.4-6.15-.65c-2.3-.17-4.64-.3-7-.4s-4.59-.15-6.65-.15a66,66,0,0,0-9.55.55,13.11,13.11,0,0,0-5.75,2.05,6.08,6.08,0,0,0-3,4.1,29.29,29.29,0,0,0-.6,6.3,28.43,28.43,0,0,0,.6,6.65,4.94,4.94,0,0,0,2.55,3.35,17.44,17.44,0,0,0,6,1.4l17,1.9a52.08,52.08,0,0,1,6.9,1,13.11,13.11,0,0,1,5,2.1,8.72,8.72,0,0,1,3,4.45,14.61,14.61,0,0,1,.75,2.9c.16,1.07.28,2.27.35,3.6s.1,2.8.1,4.4a34.74,34.74,0,0,1-1,9.3,14.08,14.08,0,0,1-3,5.85,12.43,12.43,0,0,1-4.85,3.2,24.24,24.24,0,0,1-6.3,1.35Q-2016.33,575.8-2020.43,575.8Z" transform="translate(2167.82 -363.74)"/><path d="M-1964.43,575V512h-22.4v-5.8h51.2V512H-1958v63Z" transform="translate(2167.82 -363.74)"/><path d="M-1896.53,575.8a67.73,67.73,0,0,1-11.8-.85,18.62,18.62,0,0,1-7.5-2.85,12.72,12.72,0,0,1-4.3-5.5,28.55,28.55,0,0,1-1.95-8.75q-.45-5.25-.45-12.65v-39h6.4v42.2a87.68,87.68,0,0,0,.55,11,13.58,13.58,0,0,0,2.35,6.6,9.64,9.64,0,0,0,5.8,3.25,52,52,0,0,0,10.9.9,50.46,50.46,0,0,0,10.8-.9A9.8,9.8,0,0,0-1880,566a12.73,12.73,0,0,0,2.3-6.6,107.78,107.78,0,0,0,.45-11V506.2h6.4v39q0,7.39-.4,12.65a28.74,28.74,0,0,1-1.85,8.75,12.41,12.41,0,0,1-4.25,5.5,18.62,18.62,0,0,1-7.5,2.85A67,67,0,0,1-1896.53,575.8Z" transform="translate(2167.82 -363.74)"/><path d="M-1850.43,575V506.2h21.3a100.3,100.3,0,0,1,13.6.75,20.27,20.27,0,0,1,8.4,2.8,12,12,0,0,1,4.6,5.9,33.55,33.55,0,0,1,1.9,9.9q.41,6,.4,15.05t-.4,15a33.69,33.69,0,0,1-1.9,9.9,12.08,12.08,0,0,1-4.6,5.9,20.27,20.27,0,0,1-8.4,2.8,100.3,100.3,0,0,1-13.6.75Zm6.4-5.7h13.2q6.9,0,11.4-.3a18.87,18.87,0,0,0,7.1-1.6,7.8,7.8,0,0,0,3.8-4.4,29.51,29.51,0,0,0,1.55-8.5q.36-5.4.35-13.9t-.35-13.9a27.4,27.4,0,0,0-1.6-8.45,8.16,8.16,0,0,0-3.9-4.4,18.51,18.51,0,0,0-7.1-1.65q-4.44-.3-11.25-.3H-1844Z" transform="translate(2167.82 -363.74)"/><path d="M-1781.33,575V506.2h6.4V575Z" transform="translate(2167.82 -363.74)"/><path d="M-1728.22,575.8a88,88,0,0,1-13-.8,19.19,19.19,0,0,1-8.15-2.9,12,12,0,0,1-4.41-6.05,38.64,38.64,0,0,1-1.8-10.15q-.39-6.2-.4-15.3t.4-15.3a38.56,38.56,0,0,1,1.8-10.15,12,12,0,0,1,4.41-6,19.19,19.19,0,0,1,8.15-2.9,86.64,86.64,0,0,1,13-.8,86.82,86.82,0,0,1,13,.8,19.29,19.29,0,0,1,8.15,2.9,12,12,0,0,1,4.4,6,38.56,38.56,0,0,1,1.8,10.15q.39,6.19.4,15.3t-.4,15.3a38.64,38.64,0,0,1-1.8,10.15,12.08,12.08,0,0,1-4.4,6.05,19.29,19.29,0,0,1-8.15,2.9A88.17,88.17,0,0,1-1728.22,575.8Zm0-5.7q6,0,9.9-.3a14.05,14.05,0,0,0,6.2-1.7,8.71,8.71,0,0,0,3.5-4.55,29.79,29.79,0,0,0,1.5-8.7q.3-5.55.3-14.25t-.3-14.25a29.79,29.79,0,0,0-1.5-8.7,8.71,8.71,0,0,0-3.5-4.55,13.92,13.92,0,0,0-6.2-1.7q-3.9-.3-9.9-.3c-3.94,0-7.2.1-9.8.3a14.32,14.32,0,0,0-6.26,1.7,8.43,8.43,0,0,0-3.5,4.55,32.75,32.75,0,0,0-1.5,8.7q-.35,5.55-.34,14.25t.34,14.25a32.75,32.75,0,0,0,1.5,8.7,8.43,8.43,0,0,0,3.5,4.55,14.46,14.46,0,0,0,6.26,1.7C-1735.42,570-1732.16,570.1-1728.22,570.1Z" transform="translate(2167.82 -363.74)"/></svg>
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
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <a href="#work" className="px-8 py-4 bg-cyan-400 text-black font-bold rounded-lg hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25 font-mono tracking-wider">[VER PROYECTOS]</a>
          <a href="#contact" className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 font-mono tracking-wider">[HABLEMOS]</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;