import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// --- 1. FUNCIONES DE AYUDA (NUEVAS) ---
// Estas se encargan de convertir tu link normal en uno "embed" y detectar si es vertical

const getEmbedUrl = (url: string) => {
  if (!url) return '';
  
  // Si ya es un embed o es Vimeo, lo dejamos igual
  if (url.includes('/embed/') || url.includes('player.vimeo.com')) return url;

  // Lógica para YouTube (Shorts, Watch, youtu.be)
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    let videoId = '';
    
    if (url.includes('/shorts/')) {
      videoId = url.split('/shorts/')[1]?.split('?')[0];
    } else if (url.includes('v=')) {
      videoId = url.split('v=')[1]?.split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0];
    }

    if (videoId) return `https://www.youtube.com/embed/${videoId}`;
  }

  return url;
};

const isVerticalVideo = (url: string, definedOrientation: string) => {
  // Si vos le pusiste "vertical" en el JSON, respetamos eso
  if (definedOrientation === 'vertical') return true;
  // Si no, nos fijamos si el link dice "shorts". Si dice shorts, forzamos vertical.
  if (url && url.includes('/shorts/')) return true;
  return false;
};

// --- INTERFACES ---
interface Media {
  type: 'image' | 'video';
  url: string;
  orientation: 'horizontal' | 'vertical' | 'square';
}
interface Project {
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  tech: string[];
  media: Media[];
}
interface ProjectPopupProps {
  project: Project | null;
  onClose: () => void;
}

// --- COMPONENTE PRINCIPAL ---
const ProjectPopup: React.FC<ProjectPopupProps> = ({ project, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setCurrentSlide(0);
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const hasCarousel = project.media.length > 1;
  const currentMedia = project.media[currentSlide];

  // 2. ACÁ USAMOS LA LÓGICA NUEVA PARA DECIDIR LA FORMA DEL POPUP
  const realOrientation = isVerticalVideo(currentMedia.url, currentMedia.orientation || 'horizontal') 
    ? 'vertical' 
    : (currentMedia.orientation || 'horizontal');

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === project.media.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? project.media.length - 1 : prev - 1));
  };

  const renderMedia = (mediaItem: Media) => {
    if (mediaItem.type === 'video') {
      // 3. USAMOS LA FUNCION QUE LIMPIA EL LINK
      const embedUrl = getEmbedUrl(mediaItem.url);
      
      return (
        <iframe
          src={`${embedUrl}?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0&controls=0`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          style={{ pointerEvents: 'auto' }}
        ></iframe>
      );
    }
    return <img src={mediaItem.url} alt={project.title} className="w-full h-full object-contain" />;
  };
  
  return createPortal(
    <div className={`popup-overlay is-${realOrientation}`} onClick={onClose}>
      <div className={`popup-content-grid is-${realOrientation}`} onClick={(e) => e.stopPropagation()}>
        
        <div className="popup-media-area">
          <button onClick={onClose} className="popup-close-button">
            <X size={24} />
          </button>
          
          <div className="w-full h-full">
            {renderMedia(currentMedia)}
          </div>

          {hasCarousel && (
            <>
              <button onClick={prevSlide} className="carousel-nav left-0"><ChevronLeft size={24} /></button>
              <button onClick={nextSlide} className="carousel-nav right-0"><ChevronRight size={24} /></button>
              <div className="carousel-dots">
                {project.media.map((_, index) => (
                  <button key={index} onClick={(e) => { e.stopPropagation(); setCurrentSlide(index); }} className={`dot ${currentSlide === index ? 'active' : ''}`}></button>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="popup-info-area">
          <div className="text-cyan-400 font-mono text-sm font-bold mb-2">
            //{project.category}
          </div>
          <h2 className="text-3xl font-black text-white mb-4 font-mono tracking-wider glitch-text" data-text={project.title}>
            {project.title}
          </h2>
          <div className="text-gray-300 font-mono text-sm leading-relaxed mb-8 prose prose-invert prose-p:text-gray-300">
            <p style={{ whiteSpace: 'pre-line' }}> 
              {project.longDescription || project.description}
            </p>
          </div>
          <div>
            <div className="text-yellow-400 font-mono text-xs font-bold mb-4">
              // STACK_TECNOLÓGICO:
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="text-xs bg-gray-900 text-gray-300 px-3 py-1 border border-gray-700 font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectPopup;