import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

// Firebase imports
import { initializeApp } from "firebase/app";
import { getFirestore, Firestore, collection, onSnapshot } from "firebase/firestore";

// Lucide Icons
import { 
    Menu, X, Terminal, Code, Zap, Target, User, Eye, Box, Wand2, Music, Megaphone, 
    Briefcase, ClipboardList, CalendarClock, Rocket, Mail, MessageSquare, MapPin, 
    Send, Instagram, Linkedin, Youtube, ChevronLeft, ChevronRight 
} from 'lucide-react';

// NOTE: We will attempt to import Lenis, but handle it gracefully if it fails.
let Lenis: any = null;
try {
  // @ts-ignore
  Lenis = (await import('lenis')).default;
} catch (e) {
  console.warn("Lenis library not found, smooth scrolling will be disabled.");
}


// =====================================================================================
// === COMPONENT: Header =============================================================
// =====================================================================================
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'INICIO' },
    { href: '#about', label: 'SOBRE MÍ' },
    { href: '#work', label: 'PROYECTOS' },
    { href: '#services', label: 'SERVICIOS' },
    { href: '#workflow', label: 'WORKFLOW' },
    { href: '#contact', label: 'CONTACTO' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
      <div
        className={`container mx-auto mt-4 transition-all duration-300 ${
          isScrolled
            ? 'bg-gray-900/60 backdrop-blur-lg border border-white/10 rounded-2xl'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center">
            <svg id="Layer_4" data-name="Layer 4" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 572.86 212.05"
                 className="h-8 md:h-9 w-auto"
                 fill="white"
            >
             <g id="VALER"><path d="M-1915.18,485.6V365.53h28.62v97.38h56.19V485.6Z" transform="translate(2167.82 -363.74)"/><polygon points="353.86 121.86 446.88 121.86 446.88 100.21 382.3 100.21 382.3 72.12 437.28 72.12 437.28 50.65 382.3 50.65 382.3 50.65 353.86 50.65 353.86 121.86"/><path d="M-1725.17,365.53H-1814v17.94a3.7,3.7,0,0,0,3.7,3.7h89.32V369.75A4.22,4.22,0,0,0-1725.17,365.53Z" transform="translate(2167.82 -363.74)"/><path d="M-1991.84,399-2003,369a1.62,1.62,0,0,0-3,0L-2052,483a1.62,1.62,0,0,0,1.5,2.23h25.88" transform="translate(2167.82 -363.74)"/><path d="M-1953.57,485.19h27a1.63,1.63,0,0,0,1.52-2.2l-44.15-116.83a1.63,1.63,0,0,0-1.52-1.05h-23.78a1.62,1.62,0,0,0-1.51,2.2q4,10.68,8.09,21.36Z" transform="translate(2167.82 -363.74)"/><path d="M-1999.41,440.85l-5.67,18a2.69,2.69,0,0,0,2.55,3.5l32.15.15-4.85-19.06a3.21,3.21,0,0,0-3.09-2.42Z" transform="translate(2167.82 -363.74)"/><path d="M-1640.26,442.52l17.4,43.08h24.21a3.69,3.69,0,0,0,3.39-5.16L-1612,441.9a3.7,3.7,0,0,1,1.65-4.72,26.53,26.53,0,0,0,8.64-7.08,28.31,28.31,0,0,0,5.32-12.13,76.28,76.28,0,0,0,1.31-14.22,74.12,74.12,0,0,0-1.57-16.06,28.14,28.14,0,0,0-5.68-11.95q-4.1-5-12-7.59t-20.33-2.62h-64.57v14.93a6.53,6.53,0,0,0,6.54,6.53h46.34a89.86,89.86,0,0,1,12.74.7,19.22,19.22,0,0,1,6.72,2,6.37,6.37,0,0,1,2.88,3.91,27.91,27.91,0,0,1,.69,6.92,25,25,0,0,1-.78,6.78,7.91,7.91,0,0,1-3,4.34q-2.17,1.6-6.8,2.16a109.77,109.77,0,0,1-12.66.56h-52.7V485.6h28.62V442.49" transform="translate(2167.82 -363.74)"/><g id="logo_valer" data-name="logo valer"><path d="M-2115.07,484.27c1.89-4,3.33-6.9,4.89-10q26.49-53.26,52.94-106.55c1.27-2.56,2.66-3.64,5.6-3.55,7.38.23,14.77.07,22.62.07-.49,1.29-.74,2.24-1.18,3.1q-28.87,57.32-57.85,114.6c-.55,1.08-1.89,2.48-2.9,2.51C-2098.73,484.64-2106.52,484.27-2115.07,484.27Z" transform="translate(2167.82 -363.74)"/><path d="M-2117.1,463.75-2167.82,364c6.36,0,12.72-.27,17.67-.15,6.92.28,10.64,1.84,13.71,8.34,9.87,20.87,20.54,41.36,31,61.95,1,1.9,1.22,3.38.2,5.38C-2109.2,447.31-2112.94,455.19-2117.1,463.75Z" transform="translate(2167.82 -363.74)"/><path d="M-2128.13,363.8h16.82c7.79,0,15.59-.15,23.37.07a7,7,0,0,1,4.57,2.31,116.29,116.29,0,0,1,7.09,10.31c2.18,3.4-1.86,9.69-6.12,9.68-10,0-20,0-30-.07-1.24,0-3.13-.41-3.61-1.2C-2120.08,378.14-2123.9,371.24-2128.13,363.8Z" transform="translate(2167.82 -363.74)"/></g></g><path d="M-2020.43,575.8q-3.71,0-8-.15t-8.4-.5c-2.74-.23-5.2-.45-7.4-.65v-5.6q3.49.3,7.5.6t7.8.45q3.79.15,6.6.15a74,74,0,0,0,8.55-.4,15.82,15.82,0,0,0,5.85-1.8,6,6,0,0,0,2.6-2.75,12.43,12.43,0,0,0,1-4c.13-1.5.2-3.12.2-4.85q0-3.9-.2-6.3a6.76,6.76,0,0,0-1.2-3.65,6,6,0,0,0-3.2-1.85,40.28,40.28,0,0,0-6.1-1l-17.6-1.9a22.45,22.45,0,0,1-7.6-1.9,9.75,9.75,0,0,1-4.15-3.6,12.73,12.73,0,0,1-1.71-5.2,60,60,0,0,1-.35-6.8,25.49,25.49,0,0,1,1.55-9.7,12,12,0,0,1,4.61-5.65,19.32,19.32,0,0,1,7.6-2.65,69.68,69.68,0,0,1,10.55-.7c2.53,0,5.11.06,7.75.2s5.1.3,7.4.5a42.14,42.14,0,0,1,5.65.8v5.4q-2.7-.4-6.15-.65c-2.3-.17-4.64-.3-7-.4s-4.59-.15-6.65-.15a66,66,0,0,0-9.55.55,13.11,13.11,0,0,0-5.75,2.05,6.08,6.08,0,0,0-3,4.1,29.29,29.29,0,0,0-.6,6.3,28.43,28.43,0,0,0,.6,6.65,4.94,4.94,0,0,0,2.55,3.35,17.44,17.44,0,0,0,6,1.4l17,1.9a52.08,52.08,0,0,1,6.9,1,13.11,13.11,0,0,1,5,2.1,8.72,8.72,0,0,1,3,4.45,14.61,14.61,0,0,1,.75,2.9c.16,1.07.28,2.27.35,3.6s.1,2.8.1,4.4a34.74,34.74,0,0,1-1,9.3,14.08,14.08,0,0,1-3,5.85,12.43,12.43,0,0,1-4.85,3.2,24.24,24.24,0,0,1-6.3,1.35Q-2016.33,575.8-2020.43,575.8Z" transform="translate(2167.82 -363.74)"/><path d="M-1964.43,575V512h-22.4v-5.8h51.2V512H-1958v63Z" transform="translate(2167.82 -363.74)"/><path d="M-1896.53,575.8a67.73,67.73,0,0,1-11.8-.85,18.62,18.62,0,0,1-7.5-2.85,12.72,12.72,0,0,1-4.3-5.5,28.55,28.55,0,0,1-1.95-8.75q-.45-5.25-.45-12.65v-39h6.4v42.2a87.68,87.68,0,0,0,.55,11,13.58,13.58,0,0,0,2.35,6.6,9.64,9.64,0,0,0,5.8,3.25,52,52,0,0,0,10.9.9,50.46,50.46,0,0,0,10.8-.9A9.8,9.8,0,0,0-1880,566a12.73,12.73,0,0,0,2.3-6.6,107.78,107.78,0,0,0,.45-11V506.2h6.4v39q0,7.39-.4,12.65a28.74,28.74,0,0,1-1.85,8.75,12.41,12.41,0,0,1-4.25,5.5,18.62,18.62,0,0,1-7.5,2.85A67,67,0,0,1-1896.53,575.8Z" transform="translate(2167.82 -363.74)"/><path d="M-1850.43,575V506.2h21.3a100.3,100.3,0,0,1,13.6.75,20.27,20.27,0,0,1,8.4,2.8,12,12,0,0,1,4.6,5.9,33.55,33.55,0,0,1,1.9,9.9q.41,6,.4,15.05t-.4,15a33.69,33.69,0,0,1-1.9,9.9,12.08,12.08,0,0,1-4.6,5.9,20.27,20.27,0,0,1-8.4,2.8,100.3,100.3,0,0,1-13.6.75Zm6.4-5.7h13.2q6.9,0,11.4-.3a18.87,18.87,0,0,0,7.1-1.6,7.8,7.8,0,0,0,3.8-4.4,29.51,29.51,0,0,0,1.55-8.5q.36-5.4.35-13.9t-.35-13.9a27.4,27.4,0,0,0-1.6-8.45,8.16,8.16,0,0,0-3.9-4.4,18.51,18.51,0,0,0-7.1-1.65q-4.44-.3-11.25-.3H-1844Z" transform="translate(2167.82 -363.74)"/><path d="M-1781.33,575V506.2h6.4V575Z" transform="translate(2167.82 -363.74)"/><path d="M-1728.22,575.8a88,88,0,0,1-13-.8,19.19,19.19,0,0,1-8.15-2.9,12,12,0,0,1-4.41-6.05,38.64,38.64,0,0,1-1.8-10.15q-.39-6.2-.4-15.3t.4-15.3a38.56,38.56,0,0,1,1.8-10.15,12,12,0,0,1,4.41-6,19.19,19.19,0,0,1,8.15-2.9,86.64,86.64,0,0,1,13-.8,86.82,86.82,0,0,1,13,.8,19.29,19.29,0,0,1,8.15,2.9,12,12,0,0,1,4.4,6,38.56,38.56,0,0,1,1.8,10.15q.39,6.19.4,15.3t-.4,15.3a38.64,38.64,0,0,1-1.8,10.15,12.08,12.08,0,0,1-4.4,6.05,19.29,19.29,0,0,1-8.15,2.9A88.17,88.17,0,0,1-1728.22,575.8Zm0-5.7q6,0,9.9-.3a14.05,14.05,0,0,0,6.2-1.7,8.71,8.71,0,0,0,3.5-4.55,29.79,29.79,0,0,0,1.5-8.7q.3-5.55.3-14.25t-.3-14.25a29.79,29.79,0,0,0-1.5-8.7,8.71,8.71,0,0,0-3.5-4.55,13.92,13.92,0,0,0-6.2-1.7q-3.9-.3-9.9-.3c-3.94,0-7.2.1-9.8.3a14.32,14.32,0,0,0-6.26,1.7,8.43,8.43,0,0,0-3.5,4.55,32.75,32.75,0,0,0-1.5,8.7q-.35,5.55-.34,14.25t.34,14.25a32.75,32.75,0,0,0,1.5,8.7,8.43,8.43,0,0,0,3.5,4.55,14.46,14.46,0,0,0,6.26,1.7C-1735.42,570-1732.16,570.1-1728.22,570.1Z" transform="translate(2167.82 -363.74)"/></svg>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <a key={item.label} href={item.href} className="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group font-mono text-sm tracking-wider">
                <span className="text-cyan-400 opacity-60 group-hover:opacity-100">//</span>{item.label}
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <button className="md:hidden text-white border border-cyan-400 p-2 rounded-lg" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menú">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden container mx-auto px-6 pb-4">
          <div className="bg-gray-900/80 backdrop-blur-lg border border-white/10 rounded-2xl p-4">
            {navLinks.map((item) => (
              <a key={item.label} href={item.href} className="block py-3 text-center text-gray-200 hover:text-cyan-400 transition-colors duration-300 font-mono" onClick={() => setIsMenuOpen(false)}>
                <span className="text-cyan-400">//</span>{item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

// =====================================================================================
// === HOOK & COMPONENT: Hero ==========================================================
// =====================================================================================
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
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/1100939144?h=ad8dcb0b09&autoplay=1&loop=1&muted=1&background=1" frameBorder="0" allow="autoplay; fullscreen" className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"></iframe>
      </div>
      
      {isDesktop && (
        <>
          <div className="absolute inset-0 opacity-20 z-10" style={{ transform: `translate(${mousePosition.x * parallaxFactor.grid}px, ${mousePosition.y * parallaxFactor.grid}px)`}}>
            <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`, backgroundSize: '50px 50px'}}></div>
          </div>
          <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 animate-pulse z-10" style={{ transform: `translate(${mousePosition.x * parallaxFactor.cyanSquare}px, ${mousePosition.y * parallaxFactor.cyanSquare}px)` }}></div>
          <div className="absolute top-40 right-32 w-1 h-8 bg-red-500 opacity-60 z-10" style={{ transform: `translate(${mousePosition.x * parallaxFactor.redSquare}px, ${mousePosition.y * parallaxFactor.redSquare}px)` }}></div>
          <div className="absolute bottom-32 left-16 w-4 h-1 bg-yellow-400 z-10" style={{ transform: `translate(${mousePosition.x * parallaxFactor.yellowSquare}px, ${mousePosition.y * parallaxFactor.yellowSquare}px)` }}></div>
          <div className="absolute text-cyan-400 font-mono text-xs opacity-30 z-10" style={{ transform: `translate(${mousePosition.x * parallaxFactor.autodidacta}px, ${mousePosition.y * parallaxFactor.autodidacta}px)`, top: '15%', left: '10%' }}>{'{ AUTODIDACTA }'}</div>
          <div className="absolute text-red-400 font-mono text-xs opacity-30 z-10" style={{ transform: `translate(${mousePosition.x * parallaxFactor.detalle}px, ${mousePosition.y * parallaxFactor.detalle}px)`, top: '70%', right: '15%' }}>{'<ATENCION_AL_DETALLE />'}</div>
          <div className="absolute text-yellow-400 font-mono text-xs opacity-30 z-10" style={{ transform: `translate(${mousePosition.x * parallaxFactor.flexible}px, ${mousePosition.y * parallaxFactor.flexible}px)`, top: '25%', right: '20%' }}>{'const flexible = true;'}</div>
          <div className="absolute text-green-400 font-mono text-xs opacity-30 z-10" style={{ transform: `translate(${mousePosition.x * parallaxFactor.desarrollo}px, ${mousePosition.y * parallaxFactor.desarrollo}px)`, bottom: '20%', left: '18%' }}>{'// DESARROLLO_CONTINUO'}</div>
          <div className="absolute text-pink-400 font-mono text-xs opacity-30 z-10" style={{ transform: `translate(${mousePosition.x * parallaxFactor.empatico}px, ${mousePosition.y * parallaxFactor.empatico}px)`, bottom: '15%', right: '25%' }}>{'empathy.level = 100'}</div>
           <div className="absolute text-purple-400 font-mono text-xs opacity-30 z-10" style={{ transform: `translate(${mousePosition.x * parallaxFactor.adaptable}px, ${mousePosition.y * parallaxFactor.adaptable}px)`, top: '65%', left: '22%' }}>{'<Adaptable />'}</div>
        </>
      )}
      
      <div className="relative z-20 text-center px-6 flex flex-col items-center">
        <div className="mb-8 w-full">
          <div className="text-cyan-400 font-mono text-sm mb-4 animate-fade-in-up">
            <Terminal className="inline w-4 h-4 mr-2" />
            ~/hacelo-valer
          </div>
          <div className="w-full max-w-md mx-auto" data-text="VALER STUDIO">
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

// =====================================================================================
// === COMPONENT: About ================================================================
// =====================================================================================
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-950 relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, cyan 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, red 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="text-cyan-400 font-mono text-sm mb-4">
            <User className="inline w-4 h-4 mr-2" />
            ~/
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            <span className="text-cyan-400">[</span>SOBRE_MÍ<span className="text-cyan-400">]</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-mono">
            <span className="text-cyan-400">&gt;</span> Soy Valentin Marey un generalista 3D, director creativo multidisciplinario y autodidacta desde 2013.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-black text-white mb-6 font-mono">
              <span className="text-red-400">//</span>MI_MANIFIESTO
            </h3>
            <div className="space-y-4 text-gray-300 font-mono leading-relaxed text-base">
              <p>
                <span className="text-cyan-400">&gt;</span> Cansado de la burocracia y la ineficiencia, creé <strong>Valer Studios</strong> como una "One Person Company". Mi modelo es simple: <strong>comunicación directa, cero intermediarios y un enfoque obsesivo en la calidad.</strong>
              </p>
              <p>
                <span className="text-yellow-400">&gt;</span> Me involucro en cada proyecto desde la concepción hasta la entrega, asegurando que tu visión se transforme en un producto final potente y memorable.
              </p>
              <p>
                <span className="text-red-400">&gt;</span> Como generalista, mi fortaleza es la versatilidad. Desde la dirección de arte y 3D hasta la postproducción, controlo cada detalle para garantizar un resultado coherente y de alto impacto.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/30 p-8 relative rounded-2xl">
              <div className="flex items-center mb-6 border-b border-gray-800 pb-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-400 text-xs font-mono ml-4">core_principles.sh</div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-900 border border-gray-700 p-3 mt-1 rounded-lg">
                    <Zap className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-cyan-400 font-mono">Eficiencia Radical</h4>
                    <p className="text-gray-400 text-sm font-mono">Procesos ágiles para resultados más rápidos y mejores.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-900 border border-gray-700 p-3 mt-1 rounded-lg">
                    <Target className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-red-400 font-mono">Calidad Obsesiva</h4>
                    <p className="text-gray-400 text-sm font-mono">Atención al detalle en cada pixel, frame y sonido.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-900 border border-gray-700 p-3 mt-1 rounded-lg">
                    <Code className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-yellow-400 font-mono">Comunicación Directa</h4>
                    <p className="text-gray-400 text-sm font-mono">Hablás directamente conmigo. Sin demoras.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// =====================================================================================
// === COMPONENT: Services =============================================================
// =====================================================================================
const Services = () => {
  const colorStyles = {
    cyan: { text: 'text-cyan-400', border: 'border-cyan-400/30', hoverBorder: 'hover:border-cyan-400', bg: 'bg-cyan-400', groupHoverBg: 'group-hover:bg-cyan-400/10', accent: 'from-cyan-400 to-blue-500',},
    red: { text: 'text-red-400', border: 'border-red-400/30', hoverBorder: 'hover:border-red-400', bg: 'bg-red-400', groupHoverBg: 'group-hover:bg-red-400/10', accent: 'from-red-400 to-pink-500',},
    yellow: { text: 'text-yellow-400', border: 'border-yellow-400/30', hoverBorder: 'hover:border-yellow-400', bg: 'bg-yellow-400', groupHoverBg: 'group-hover:bg-yellow-400/10', accent: 'from-yellow-400 to-orange-500',},
    green: { text: 'text-green-400', border: 'border-green-400/30', hoverBorder: 'hover:border-green-400', bg: 'bg-green-400', groupHoverBg: 'group-hover:bg-green-400/10', accent: 'from-green-400 to-teal-500',},
  };
  
  const services = [
    { id: 'motion', icon: Box, title: '3D y Motion', description: 'Creación de mundos, productos y animaciones que desafían la imaginación.', features: ['Generalista 3D (Modelado, Shading, Animación)', 'Motion Graphics Avanzados', 'Visualización de Productos', 'Escenografías Virtuales para Eventos',], color: 'cyan'},
    { id: 'vfx', icon: Wand2, title: 'Post-Producción y VFX', description: 'El toque final que transforma un buen video en una pieza cinematográfica inolvidable.', features: ['Composición VFX en Nuke', 'Colorimetría Profesional', 'Edición Integral de Video', 'Post-Producción para Comerciales y Redes',], color: 'red'},
    { id: 'music', icon: Music, title: 'Contenido para Música y Eventos', description: 'Potenciando la visión de artistas con visuales de alto impacto y narrativas potentes.', features: ['Visualizers para Videoclips', 'Edición y Post de Videoclips', 'Visuales para Shows en Vivo (VJing)', 'Diseño de Arte para Artistas',], color: 'yellow'},
    { id: 'branding', icon: Megaphone, title: 'Branding y Contenido Digital', description: 'Construcción de identidades de marca y contenido que resuena en el ecosistema digital.', features: ['Branding para Marcas y Artistas', 'Diseño Gráfico Integral', 'Piezas para Redes Sociales', 'Estrategia Visual para Campañas',], color: 'green'}
  ];

  return (
    <section id="services" className="py-20 bg-black relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="text-cyan-400 font-mono text-sm mb-4">
            <Briefcase className="inline w-4 h-4 mr-2" />
            ~/services/arsenal
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            <span className="text-red-400">[</span>MIS_SERVICIOS<span className="text-red-400">]</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-mono">
            <span className="text-red-400">&gt;</span> Un arsenal de soluciones creativas para tus proyectos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            const style = colorStyles[service.color as keyof typeof colorStyles];
            return (
              <div 
                key={service.id} 
                className={`group bg-gray-900/50 backdrop-blur-sm border ${style.border} ${style.hoverBorder} transition-all duration-500 relative overflow-hidden flex flex-col rounded-2xl`}
              >
                <div className={`absolute top-0 left-0 w-full h-1 ${style.bg} transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000`}></div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className={`bg-gray-900 border border-gray-700 p-4 inline-block mb-6 ${style.groupHoverBg} transition-all duration-300 self-start rounded-xl`}>
                    <IconComponent className={`w-8 h-8 ${style.text}`} />
                  </div>
                  <h3 className={`text-2xl font-black ${style.text} mb-4 font-mono tracking-wider`}>{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed font-mono text-sm flex-grow">
                    <span className={style.text}>&gt;</span> {service.description}
                  </p>
                  <div className="space-y-3 mt-auto">
                    <div className={`${style.text} font-mono text-sm font-bold mb-3`}>// HABILIDADES_CLAVE:</div>
                    {service.features.map((feature) => (
                      <div key={feature} className="text-gray-400 flex items-start font-mono text-sm">
                        <span className={`w-2 h-2 ${style.bg} mr-3 mt-1.5 flex-shrink-0 animate-pulse rounded-sm`}></span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${style.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// =====================================================================================
// === COMPONENT: Portfolio ============================================================
// =====================================================================================
interface PortfolioProps {
  onProjectSelect: (project: any) => void;
  db: Firestore | null;
  appId: string | null;
}

const Portfolio: React.FC<PortfolioProps> = ({ onProjectSelect, db, appId }) => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!db || !appId) {
      setLoading(false);
      console.log("Firestore DB or App ID not available yet.");
      return;
    }

    setLoading(true);
    const projectsCollectionRef = collection(db, `/artifacts/${appId}/public/data/projects`);
    
    const unsubscribe = onSnapshot(projectsCollectionRef, (snapshot) => {
      const projectsData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setProjects(projectsData);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching projects from Firestore:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [db, appId]);

  const filters = ['ALL', '3D', 'VFX', 'MOTION'];
  const filteredProjects = activeFilter === 'ALL' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="work" className="py-20 bg-gray-950 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="text-cyan-400 font-mono text-sm mb-4">
            <Terminal className="inline w-4 h-4 mr-2" />
            ~/portfolio/showcase
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            <span className="text-yellow-400">[</span>PROYECTOS<span className="text-yellow-400">]</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-mono mb-8">
            <span className="text-yellow-400">&gt;</span> Proyectos que sobrevivieron las guerras del render.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 font-mono font-bold tracking-wider transition-all duration-300 border rounded-lg ${
                  activeFilter === filter
                    ? 'bg-cyan-400 text-black border-cyan-400'
                    : 'bg-transparent text-cyan-400 border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-400/10'
                }`}
              >
                [{filter}]
              </button>
            ))}
          </div>
        </div>

        {loading ? (<div className="text-center text-cyan-400 font-mono">Cargando proyectos desde la nube...</div>) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-black/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 relative overflow-hidden cursor-pointer rounded-2xl"
                onClick={() => onProjectSelect(project)}
              >
                <div className="relative overflow-hidden aspect-video bg-black rounded-t-2xl">
                  <img src={project.media[0]?.url || 'https://placehold.co/400x225/000000/333333?text=No+Image'} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 border border-gray-700 font-mono text-xs text-green-400 rounded-md">
                    {project.status}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-cyan-400 text-black p-4 flex items-center font-mono font-bold rounded-lg">
                      <Eye className="w-5 h-5 mr-2" />
                      VER DETALLES
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-cyan-400 font-mono text-sm font-bold">
                    //{project.category}
                  </div>
                  <h3 className="text-xl font-black text-white mt-3 mb-3 font-mono tracking-wider">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// =====================================================================================
// === COMPONENT: Workflow =============================================================
// =====================================================================================
const Workflow = () => {
  const workflowSteps = [
    { icon: ClipboardList, title: "1. Briefing y Alcance", description: "Una vez que me contactás, destilamos tu idea o proyecto en un brief claro y conciso. Definimos los objetivos, entregables y las tareas específicas para materializar tu visión.", color: "cyan" },
    { icon: Users, title: "2. Definición de Roles", description: "Establecemos qué partes del proyecto recaen sobre Valer Studio y cuáles ya están cubiertas por tu equipo, agencia o productora. La colaboración transparente es clave.", color: "red" },
    { icon: CalendarClock, title: "3. Plan y Presupuesto", description: "Con las tareas y roles definidos, desarrollo un calendario de producción detallado y un presupuesto transparente. Sin sorpresas, solo un plan de acción claro.", color: "yellow" },
    { icon: Rocket, title: "4. Ejecución y Entrega", description: "Con todo aprobado, me sumerjo en la producción. Mantengo una comunicación fluida sobre los avances hasta la entrega final, asegurando que el resultado supere tus expectativas.", color: "green" }
  ];

  const colorStyles: { [key: string]: { text: string, border: string } } = {
    cyan: { text: 'text-cyan-400', border: 'border-cyan-400/30' },
    red: { text: 'text-red-400', border: 'border-red-400/30' },
    yellow: { text: 'text-yellow-400', border: 'border-yellow-400/30' },
    green: { text: 'text-green-400', border: 'border-green-400/30' },
  };

  return (
    <section id="workflow" className="py-20 bg-gray-950 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="text-cyan-400 font-mono text-sm mb-4">
            <Terminal className="inline w-4 h-4 mr-2" />
            ~/metodologia/proceso
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            <span className="text-yellow-400">[</span>PROCESO DE TRABAJO<span className="text-yellow-400">]</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-mono">
            <span className="text-yellow-400">&gt;</span> Un proceso claro y eficiente, diseñado para la excelencia.
          </p>
        </div>
        <div className="relative border-l-2 border-cyan-400/20 ml-6 md:ml-0">
          {workflowSteps.map((step, index) => {
            const Icon = step.icon;
            const style = colorStyles[step.color];
            return (
              <div key={index} className="mb-12 md:flex items-start">
                <div className={`absolute -left-5 md:relative md:left-auto md:-translate-x-1/2 bg-gray-900 border-2 ${style.border} p-3 rounded-full z-10`}>
                  <Icon className={`w-8 h-8 ${style.text}`} />
                </div>
                <div className="ml-12 md:ml-8 w-full">
                  <div className="bg-black/50 backdrop-blur-sm border border-gray-800 p-6 rounded-2xl md:w-3/4">
                    <h3 className={`text-2xl font-black ${style.text} mb-3 font-mono tracking-wider`}>{step.title}</h3>
                    <p className="text-gray-300 font-mono text-base leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// =====================================================================================
// === COMPONENT: Contact ==============================================================
// =====================================================================================
const Contact = () => {
  const contactInfo = [
    { icon: Mail, title: 'EMAIL', content: 'contacto@valerstudio.com.ar', link: 'mailto:valentinmarey@gmail.com', color: 'text-cyan-400'},
    { icon: MessageSquare, title: 'WHATSAPP', content: '+54 11 5095-1458', link: 'https://wa.me/5491150951458', color: 'text-red-400'},
    { icon: MapPin, title: 'UBICACION', content: 'Buenos Aires, AR', link: null, color: 'text-yellow-400'}
  ];

  return (
    <section id="contact" className="py-20 bg-black relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="text-cyan-400 font-mono text-sm mb-4">
            <Terminal className="inline w-4 h-4 mr-2" />
            VAMOS A CREAR ALGO GRANDE
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            <span className="text-green-400">[</span>CONTACTO<span className="text-green-400">]</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-mono">
            <span className="text-green-400">&gt;</span> ¿Tenés una idea o un proyecto en mente? Hablemos y hagámoslo realidad.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/30 p-8 rounded-2xl h-full">
              <h3 className="text-2xl font-black text-white mb-8 font-mono"><span className="text-cyan-400">//</span> INFO DE CONTACTO</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-center space-x-4 group">
                    <div className="bg-gray-900 border border-gray-700 p-3 group-hover:border-cyan-400/50 transition-colors duration-300 rounded-xl">
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm font-mono">{info.title}</div>
                      {info.link ? (
                        <a href={info.link} target="_blank" rel="noopener noreferrer" className={`${info.color} hover:text-white transition-colors duration-300 font-mono`}>{info.content}</a>
                      ) : (
                        <div className={`${info.color} font-mono`}>{info.content}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-red-400/30 p-8 rounded-2xl h-full">
              <form 
                name="contact" 
                method="POST" 
                action="/gracias"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden"><label>No llenar: <input name="bot-field" /></label></p>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-cyan-400 mb-2 font-mono text-sm">NOMBRE:</label>
                    <input required type="text" id="name" name="name" className="w-full px-4 py-3 bg-black border border-gray-700 text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300 font-mono rounded-lg" placeholder="Tu nombre"/>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-cyan-400 mb-2 font-mono text-sm">EMAIL:</label>
                    <input required type="email" id="email" name="email" className="w-full px-4 py-3 bg-black border border-gray-700 text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300 font-mono rounded-lg" placeholder="tu@email.com"/>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-cyan-400 mb-2 font-mono text-sm">MENSAJE:</label>
                    <textarea required id="message" name="message" rows={5} className="w-full px-4 py-3 bg-black border border-gray-700 text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none font-mono rounded-lg" placeholder="Describí tu visión..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-cyan-400 text-black font-black py-4 hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 font-mono tracking-wider rounded-lg">
                    <Send className="w-5 h-5" />
                    <span>[ENVIAR MENSAJE]</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// =====================================================================================
// === COMPONENT: Footer ===============================================================
// =====================================================================================
const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/valer.studio/', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-500' }
  ];

  const currentDate = new Date().toLocaleDateString('es-AR');

  return (
    <footer className="bg-black pt-16 pb-8 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12">
                    <a href="#home" className="mb-6">
                        <svg id="Layer_4" data-name="Layer 4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 572.86 212.05" className="h-16 w-auto" fill="white">
                            <g id="VALER"><path d="M-1915.18,485.6V365.53h28.62v97.38h56.19V485.6Z" transform="translate(2167.82 -363.74)"/><polygon points="353.86 121.86 446.88 121.86 446.88 100.21 382.3 100.21 382.3 72.12 437.28 72.12 437.28 50.65 382.3 50.65 382.3 50.65 353.86 50.65 353.86 121.86"/><path d="M-1725.17,365.53H-1814v17.94a3.7,3.7,0,0,0,3.7,3.7h89.32V369.75A4.22,4.22,0,0,0-1725.17,365.53Z" transform="translate(2167.82 -363.74)"/><path d="M-1991.84,399-2003,369a1.62,1.62,0,0,0-3,0L-2052,483a1.62,1.62,0,0,0,1.5,2.23h25.88" transform="translate(2167.82 -363.74)"/><path d="M-1953.57,485.19h27a1.63,1.63,0,0,0,1.52-2.2l-44.15-116.83a1.63,1.63,0,0,0-1.52-1.05h-23.78a1.62,1.62,0,0,0-1.51,2.2q4,10.68,8.09,21.36Z" transform="translate(2167.82 -363.74)"/><path d="M-1999.41,440.85l-5.67,18a2.69,2.69,0,0,0,2.55,3.5l32.15.15-4.85-19.06a3.21,3.21,0,0,0-3.09-2.42Z" transform="translate(2167.82 -363.74)"/><path d="M-1640.26,442.52l17.4,43.08h24.21a3.69,3.69,0,0,0,3.39-5.16L-1612,441.9a3.7,3.7,0,0,1,1.65-4.72,26.53,26.53,0,0,0,8.64-7.08,28.31,28.31,0,0,0,5.32-12.13,76.28,76.28,0,0,0,1.31-14.22,74.12,74.12,0,0,0-1.57-16.06,28.14,28.14,0,0,0-5.68-11.95q-4.1-5-12-7.59t-20.33-2.62h-64.57v14.93a6.53,6.53,0,0,0,6.54,6.53h46.34a89.86,89.86,0,0,1,12.74.7,19.22,19.22,0,0,1,6.72,2,6.37,6.37,0,0,1,2.88,3.91,27.91,27.91,0,0,1,.69,6.92,25,25,0,0,1-.78,6.78,7.91,7.91,0,0,1-3,4.34q-2.17,1.6-6.8,2.16a109.77,109.77,0,0,1-12.66.56h-52.7V485.6h28.62V442.49" transform="translate(2167.82 -363.74)"/><g id="logo_valer" data-name="logo valer"><path d="M-2115.07,484.27c1.89-4,3.33-6.9,4.89-10q26.49-53.26,52.94-106.55c1.27-2.56,2.66-3.64,5.6-3.55,7.38.23,14.77.07,22.62.07-.49,1.29-.74,2.24-1.18,3.1q-28.87,57.32-57.85,114.6c-.55,1.08-1.89,2.48-2.9,2.51C-2098.73,484.64-2106.52,484.27-2115.07,484.27Z" transform="translate(2167.82 -363.74)"/><path d="M-2117.1,463.75-2167.82,364c6.36,0,12.72-.27,17.67-.15,6.92.28,10.64,1.84,13.71,8.34,9.87,20.87,20.54,41.36,31,61.95,1,1.9,1.22,3.38.2,5.38C-2109.2,447.31-2112.94,455.19-2117.1,463.75Z" transform="translate(2167.82 -363.74)"/><path d="M-2128.13,363.8h16.82c7.79,0,15.59-.15,23.37.07a7,7,0,0,1,4.57,2.31,116.29,116.29,0,0,1,7.09,10.31c2.18,3.4-1.86,9.69-6.12,9.68-10,0-20,0-30-.07-1.24,0-3.13-.41-3.61-1.2C-2120.08,378.14-2123.9,371.24-2128.13,363.8Z" transform="translate(2167.82 -363.74)"/></g></svg>
                    </a>
                </div>
              </div>
            </footer>

